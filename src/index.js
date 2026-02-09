import { decode, encode } from "msgpack-lite";

class Game {
    constructor() {
        this.ws = null;
        this.keysPressed = new Set();

        let game = this;

        let old = WebSocket.prototype.send;
        WebSocket.prototype.send = function(...args) {
            if(!game.ws) {
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
                console.log(data);
            }
        }
    }
}

window.game = new Game();