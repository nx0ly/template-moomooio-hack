import { game } from "..";
import { WEAPONS } from "../data/weapons";
import Utils from "../utils";

let cam = [0, 0];

let oldtime = 0;

export default function render(delta) {
    console.log("<", game.players.length)

    if (!game.ctx) return;
    if (!game.myPlayer) {
        cam[0] = cam[1] = 7200;
        return;
    }

    let dist = Utils.getDistArray(cam, [game.myPlayer.lerpx, game.myPlayer.lerpy]);
    let dir = Utils.getDirArray([game.myPlayer.lerpx, game.myPlayer.lerpy], cam) - Math.PI;
    let spd = Math.min(dist * 0.01 * delta, dist);

    if (dist > 0.05) {
        cam[0] += spd * Math.cos(dir);
        cam[1] += spd * Math.sin(dir);
    } else {
        cam[0] = game.myPlayer.lerpx;
        cam[1] = game.myPlayer.lerpy;
    }

    let rate = 170;
    for (let player of game.players) {
        player.dt += delta;

        let tmpRate = Math.min(1.7, player.dt / rate);
        let tmpDiff = (player.x - player.oldX);
        player.lerpx = player.oldX + (tmpDiff * tmpRate);
        tmpDiff = (player.y - player.oldY);
        player.lerpy = player.oldY + (tmpDiff * tmpRate);

        // direction lerp here if you even need it
    }

    let xoff = cam[0] - (1920 / 2);
    let yoff = cam[1] - (1080 / 2);

    game.ctx.font = "30px Hammersmith One";
    game.ctx.fillStyle = "#fff";
    game.ctx.textBaseline = "middle";
    game.ctx.textAlign = "center";
    game.ctx.lineWidth = 8;
    game.ctx.lineJoin = "round";

    for (let player of game.players.filter(x => x.visible)) {

        // shame
        let tmpText = `<0>`;
        var tmpS = 60;
        var tmpX = player.lerpx - xoff + (tmpS / 2) + (game.ctx.measureText(tmpText).width / 2) + 35;
        game.ctx.strokeText(tmpText, tmpX, (player.lerpy - yoff - 35) - 34);
        game.ctx.fillText(tmpText, tmpX, (player.lerpy - yoff - 35) - 34);

        // sid
        tmpText = `{${player.sid}}`;
        var tmpS = 65;
        var tmpX = player.lerpx - xoff - (tmpS / 2) - (game.ctx.measureText(tmpText).width / 2) - 35;
        game.ctx.strokeText(tmpText, tmpX, (player.lerpy - yoff - 35) - 34);
        game.ctx.fillText(tmpText, tmpX, (player.lerpy - yoff - 35) - 34);


        if (player.buildIndex < 0) {
            let speed = WEAPONS[player.weaponIndex].speed;

            player.visualReloads[player.weaponIndex] ??= 0;

            player.visualReloads[player.weaponIndex] += delta / speed;

            player.visualReloads[player.weaponIndex] = Math.max(0, Math.min(1, player.visualReloads[player.weaponIndex]));
        }


        // am i a god yet?
        // no im lazy
        // have fun ugly code
        let t = player.visualReloads[player.weapons[0]];
        t = t * t * (3 - 2 * t);

        let r, g = 0, b = 81;

        if (t < 0.5) {
            let p = t * 2;
            r = 204;
            g = 81 + 123 * p;
        } else {
            let p = (t - 0.5) * 2;
            r = 204 - 62 * p;
            g = 204;
        }

        let t2 = player.visualReloads[player.weapons[1]];
        t2 = t2 * t2 * (3 - 2 * t2);

        let r2, g2 = 0, b2 = 81;

        if (t2 < 0.5) {
            let p2 = t2 * 2;
            r2 = 204;
            g2 = 81 + 123 * p2;
        } else {
            let p2 = (t2 - 0.5) * 2;
            r2 = 204 - 62 * p2;
            g2 = 204;
        }

        let color = `rgb(${Math.round(r)}, ${Math.round(g)}, ${b})`;
        let color2 = `rgb(${Math.round(r2)}, ${Math.round(g2)}, ${b2})`;

        game.ctx.fillStyle = "#3d3f42";
        game.ctx.roundRect(
            player.lerpx - xoff - 54.5,
            player.lerpy - yoff + 50,
            54.5,
            17,
            8
        );
        game.ctx.fill();

        game.ctx.fillStyle = color;

        game.ctx.roundRect(
            player.lerpx - xoff - 50,
            player.lerpy - yoff + 54.5,
            50 * player.visualReloads[player.weapons[0]] - 4.5,
            8,
            7
        );
        game.ctx.fill();

        game.ctx.fillStyle = "#3d3f42";
        game.ctx.roundRect(
            player.lerpx - xoff + 4.5 - 4.5,
            player.lerpy - yoff + 50,
            54.5,
            17,
            8
        );
        game.ctx.fill();

        game.ctx.fillStyle = color2;

        game.ctx.roundRect(
            player.lerpx - xoff + 9 - 4.5,
            player.lerpy - yoff + 54.5,
            50 * player.visualReloads[player.weapons[1]] - 4.5,
            8,
            7
        );
        game.ctx.fill();


    }

}

export function renderLoop() {
    let now = performance.now();
    let dt = now - oldtime;
    oldtime = now;

    render(dt);
    requestAnimationFrame(renderLoop);
}