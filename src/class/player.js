export default class Player {
    constructor(id, sid, name, x, y, dir, health, maxHealth, scale, skinColor) {
        this.id = id;
        this.sid = sid;
        this.name = name;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.health = health;
        this.maxHealth = maxHealth;
        this.scale = scale;
        this.skinColor = skinColor;

        this.weapons = [];
        this.weaponVariants = [];
    }

    calculatePotentialDamage() {
        
    }
}