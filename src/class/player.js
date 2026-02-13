import { Point } from "./quadtree";

export default class Player {
    constructor(id, sid, name, x, y, dir, health, maxHealth, scale, skinColor, quadtree) {
        this.id = id;
        this.sid = sid;
        this.name = name;
        this.x = x;
        this.y = y;
        this.oldX = this.x;
        this.oldY = this.y;
        this.lerpx = this.x;
        this.lerpy = this.y;
        this.dt = 0;
        this.dir = dir;
        this.health = health;
        this.maxHealth = maxHealth;
        this.scale = scale;
        this.skinColor = skinColor;
        this.buildIndex = null;
        this.weaponIndex = 0;
        this.team = null;
        this.isLeader = false;
        this.skinIndex = 0;
        this.tailIndex = 0;
        this.iconIndex = 0;
        this.zIndex = null;
        this.visible = true;
        this.weapons = [];
        this.reloads = {};
        this.oldReloads = {};
        this.visualReloads = [];
        this.vx = 0;
        this.vy = 0;

        this.didHit = false;
        this.trapped = false;

        this.skinIndex;
        this.tailIndex;
        this.team;

        this.weapons = [];
        this.weaponVariants = [];
        this.hitIndex = null;

        this.quadtree = quadtree;
        this.point = new Point(x, y, 35, this);
    }

    update(d = 111) {
        this.quadtree.remove(this.point);

        // maybe prediction logic here or some bs
        // your choice ig

        this.quadtree.insert(this.point);
    }

    calculatePotentialDamage() {
        // super basic jaja
        
    }
}