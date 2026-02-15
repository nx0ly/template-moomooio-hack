import { decode, encode } from "msgpack-lite";
import initMenu from "./menu";
import utils from "./utils";
import render, { renderLoop } from "./systems/render";
import { Quadtree, Rect } from "./class/quadtree";
import Player from "./class/player";
import updatePlayers from "./systems/playerUpdate";
import Utils from "./utils";
import { WEAPONS } from "./data/weapons";

class Game {
    constructor() {
        this.ws = null;
        this.keysPressed = new Set();

        this.players = [];
        this.buildings = [];
        this.projectiles = [];
        this.animals = [];

        this.ctx = null;

        this.myPlayer = null;

        // buffer added for some buildings outside the map
        // probably doesnt matter tho
        this.quadtree = new Quadtree(new Rect(-144, -144, 14400 + 144, 14400 + 144));

        let game = this;
        // this.utils = utils(game);

        game.ctx = document.getElementById("gameCanvas")?.getContext("2d");

        let old = WebSocket.prototype.send;
        WebSocket.prototype.send = function (...args) {
            if (!game.ws) {
                game.ws = this;
                game.ws.addEventListener("message", (e) => game.handleIncomingData(e.data));
            }

            return old.apply(this, args);
        };

        window.addEventListener("keydown", (e) => {
            this.keysPressed.add(e.keyCode);
        });
        window.addEventListener("keyup", (e) => {
            this.keysPressed.delete(e.keyCode);
        });
    }

    send(e) {
        const t = Array.prototype.slice.call(arguments, 1);
        this.ws.send(encode([e, t]));
    }

    handleIncomingData(d) {
        let [type, data] = decode(new Uint8Array(d));

        switch (type) {
            // add player
            case "D": {
                let [d, ismine] = data;

                let existing = Utils.getPlayerBySid(data[1]);
                let player = existing || new Player(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], this.quadtree);

                if (ismine) {
                    this.myPlayer = player;
                }

                !existing && this.players.push(player);
            }

            case "a": {
                let [d] = data;
                updatePlayers(d);

                console.log(game.myPlayer.reloads[0])
            }

            case "K": {
                let [sid, didHit, index] = data;

                let player = Utils.getPlayerBySid(sid);
                if (!player) return;

                player.didHit = true;
                player.hitIndex = index;
                // player.reloads[index] = WEAPONS[index].speed;
            }
        }
    }
}

export const game = new Game();
initMenu();
renderLoop();