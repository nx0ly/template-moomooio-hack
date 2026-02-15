import Utils from "../utils";

const GATHER_ANGLE = Math.PI / 2.6;
const HALF_GATHER_ANGLE = Math.PI / 2.6;

export default function autobreak(me, trap, nearbySpikes = []) {
    let trapAngle = angle(me, trap);

    let spikeAngles = nearbySpikes.map(x => {
        Utils.normalizeAngle(angle(me, spike))
    });

    let breakAngle = null;
    let iterCount = 0;


    let centers = [trapAngle, ...spikeAngles];

    for (let x of centers) {
        let start = normalizeAngle(x - HALF_GATHER_ANGLE);
        let end = normalizeAngle(x + HALF_GATHER_ANGLE);

        // check if it contains the trap
        let trapDIff = normalizeAngle(trapAngle - x);
        if (Math.abs(trapDIff) > HALF_GATHER_ANGLE) continue;

        let count = 0;

        for (let ang of spikeAngles) {
            let diff = normalizeAngle(ang - x);
            if (Math.abs(diff) <= HALF_GATHER_ANGLE) {
                count++;
            }
        }

        if (count > iterCount) {
            breakAngle = x;
            iterCount = count;
        }
    }

    
}

// simpler function since the utils one would look ugly
function angle(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
}