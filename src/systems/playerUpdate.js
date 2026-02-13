import { game } from "..";
import Utils from "../utils";
import handleReloads from "./reloads";

export default function updatePlayers(data) {
    for (let player of game.players) {
        player.forcePos = !player.visible;
        player.visible = false;
    }

    for (let i = 0; i < data.length; i += 13) {
        let sid = data[0];
        let player = Utils.getPlayerBySid(sid);

        if (!player) continue;

        player.oldX = player.lerpx;
        player.oldY = player.lerpy;
        player.x = data[i + 1];
        player.y = data[i + 2];
        player.dir = data[i + 3];
        player.buildIndex = data[i + 4];
        player.weaponIndex = data[i + 5];
        player.weaponVariant = data[i + 6];
        player.team = data[i + 7];
        player.isLeader = data[i + 8];
        player.skinIndex = data[i + 9];
        player.tailIndex = data[i + 10];
        player.iconIndex = data[i + 11];
        player.zIndex = data[i + 12];
        player.visible = true;
        player.dt = 0;

        if (player.weaponIndex <= 8) {
            player.weapons[0] = player.weaponIndex;
        } else player.weapons[1] = player.weaponIndex;

        handleReloads(player);
    }
}