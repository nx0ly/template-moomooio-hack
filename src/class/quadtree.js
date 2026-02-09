class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

class Quadtree {
    constructor() {
        this.subdivided = false;

        this.ne;
        this.nw;
        this.se;
        this.sw;
    }
}