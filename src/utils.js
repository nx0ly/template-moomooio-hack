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
}