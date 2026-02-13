import { WEAPONS } from "../data/weapons.js";

export default function handleReloads(player) {
    if (player.didHit) {
        let weapon = WEAPONS[player.hitIndex];
        if (weapon.projectile) {
            let scale = 70;
            let projectileSpd = player.skinIndex == 1 ? 1.3 : 1;

            // weapon recoil (literally just musket :skull:)
            if (weapon.rec) {
                player.vx -= -weapon.rec * Math.cos(player.dir);
                player.vy -= -weapon.rec * Math.sin(player.dir);

                // add the projectile here blah blah blah
                // s.addProjectile(
                //         player.x + scale * Math.cos(player.dir),
                //         player.y + scale * Math.sin(player.dir),
                //         player.dir,
                //         c.projectiles[F].range * N,
                //         c.projectiles[F].speed * N,
                //         weapon.projectile,
                //         player,
                //         null,
                //         player.zIndex
                //     );
            }
        }

        player.oldReloads[player.hitIndex] = player.reloads[player.hitIndex];
        player.visualReloads[player.hitIndex] = player.oldReloads[player.hitIndex];
        player.reloads[player.hitIndex] = weapon.speed * ((player?.skinIndex == 20) ? 0.78 : 1);

        player.didHit = false;
    } else if (player.buildIndex < 0) {
        player.oldReloads[player.weaponIndex] = player.reloads[player.weaponIndex];
        // player.visualReloads[player.weaponIndex] = player.oldReloads[player.weaponIndex];
        player.reloads[player.weaponIndex] = Math.max(0, player.reloads[player.weaponIndex] - 111);
    }
}