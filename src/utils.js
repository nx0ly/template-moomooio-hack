import { game } from ".";

export default class Utils {
    static getPlayerBySid(sid) {
        return game.players.filter(x => x?.sid === sid)[0];
    }

    static getDistArray(a, b) {
        return Math.hypot(b[0] - a[0], b[1] - a[1]);
    }

    static getDirArray(a, b) {
        return Math.atan2(b[1] - a[1], b[0] - a[0]);
    }

    static normalizeAngle(a) {
        while (a <= -Math.PI) a += Math.PI * 2;
        while (a > -Math.PI) a -= Math.PI * 2;

        return a;
    }
}