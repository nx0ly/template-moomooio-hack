import { HATS } from "../data/hats";
import { TAILS } from "../data/tails";
import Utils from "../utils";

// euler integration
export default function onetick(myweaponrange, mypos, enemypos, myvel, enemyvel, tick = 1000 / 9, hats = HATS.filter(x => x?.spdMult), tails = TAILS.filter(x => x?.spdMult), preferredTicks = []) {
    // assuming constant enemy velocity
    // maybe later add some sort of prediction

    // preferredTicks must be how many ticks in the future

    // myweaponrange should be weapon range + 70

    /*

    todo:
    - resolve enemy collisions (eg. hitting a wall might push them away, making this prediction useless)
    ^ should be resolved once i finish the collision system.

    */

    let xdmax = 15;
    let ticksfind = Array.from({ length: xdmax }, (_, i) => i + 1);

    let moves = [];

    let enemyf = {
        x: enemypos[0] + (enemyvel[0] * t * 111),
        y: enemypos[1] + (enemyvel[1] * t * 111)
    };

    for (let ticks of preferredTicks) {
        // let futureenemypos = [enemypos[0] + (enemyvel[0] * ticks), enemypos[1] + (enemyvel[1] * ticks)];
        // let dist = Utils.getDistArray(mypos, futureenemypos);

        for (let hat of hats) {
            for (let tail of tails) {
                let xd = hat.spdMult * tail.spdMult;

                for (let s of [true, false]) {
                    let xd2 = simulatemovement(mypos, myvel, enemyf, T, xd, s);
                    let d = Utils.getDistArray([xd2.x, xd2.y], [enemyf.x, enemyf.y]);

                    if (d >= 212 && d <= 232) {
                        moves.push({
                            hat,
                            tail,
                            tick: t,
                            accel: s,
                            totalm: xd,
                            derr: Math.abs(d - 222),
                            isop: preferredTicks.includes(t)
                        });
                    }
                }
            }
        }
    }

    return moves.sort((a, b) => {
        if (a.isop !== b.isop) return b.isop - a.isop;

        if (a.tick !== b.tick) return a.tick - b.tick;

        if (b.totalm !== a.totalm) return b.totalm - a.totalm;

        return a.derr - b.derr;
    });
}

function simulatemovement(pos, vel, xd, t, m, br) {
    let p = { x: pos[0], y: pos[1] };
    let v = { x: vel[0], y: vel[1] };

    for (let i = 0; i < t; i++) {
        if (br) {
            let [dx, dy] = [
                xd.x - p.x,
                xd.y - p.y
            ];
            let mag = Math.sqrt(dx * dx + dy * dy);

            if (mag > 0) {
                let [movex, movey] = [
                    dx / mag,
                    dy / mag
                ];

                // MAKE SURE THIS IS CORRECT (looks wrong)
                v.x += movex * 0.0016 * m * 111;
                v.x += movey * 0.0016 * m * 111;
            }
        }

        p.x += v.x * 111;
        p.y += v.y * 111;

        v.x *= Math.pow(0.993, 111);
        v.y *= Math.pow(0.993, 111);
    }
    return p;
}