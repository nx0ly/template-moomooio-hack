export class Point {
    constructor(x, y, r, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.node = null;
    }
}

export class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    contains(point) {
        return (
            point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h
        );
    }

    intersects(rect) {
        return !(
            rect.x >= this.x + this.w ||
            rect.x + rect.w <= this.x ||
            rect.y >= this.y + this.h ||
            rect.y + rect.h <= this.y
        );
    }

    intersectsCircle(point) {
        let cx = Math.max(this.x, Math.min(point.x, this.x + this.w));
        let cy = Math.max(this.y, Math.min(point.y, this.y + this.h));
        let dx = point.x - cx;
        let dy = point.y - cy;
        return dx * dx + dy * dy <= point.r * point.r;
    }
}

export class Quadtree {
    constructor(boundary, capacity = 6) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.subdivided = false;
        this.ne = null;
        this.nw = null;
        this.se = null;
        this.sw = null;
    }

    subdivide() {
        let { x, y, w, h } = this.boundary;
        let w2 = w / 2;
        let h2 = h / 2;

        this.ne = new Quadtree(new Rect(x + w2, y, w2, h2), this.capacity);
        this.nw = new Quadtree(new Rect(x, y, w2, h2), this.capacity);
        this.se = new Quadtree(new Rect(x + w2, y + h2, w2, h2), this.capacity);
        this.sw = new Quadtree(new Rect(x, y + h2, w2, h2), this.capacity);

        this.subdivided = true;
    }

    insert(point) {
        if (!this.boundary.contains(point)) return false;

        if (this.points.length < this.capacity && !this.subdivided) {
            this.points.push(point);
            point.node = this;
            return true;
        }

        if (!this.subdivided) this.subdivide();

        return (
            this.nw.insert(point) ||
            this.ne.insert(point) ||
            this.sw.insert(point) ||
            this.se.insert(point)
        );
    }

    remove(point) {
        if (point.node !== this && !this.boundary.contains(point)) return false;

        if (point.node === this) {
            let i = this.points.indexOf(point);
            if (i !== -1) {
                this.points.splice(i, 1);
                point.node = null;
                return true;
            }
        }

        if (this.subdivided) {
            let removed =
                this.nw.remove(point) ||
                this.ne.remove(point) ||
                this.sw.remove(point) ||
                this.se.remove(point);

            if (removed) this.tryMerge();
            return removed;
        }

        return false;
    }

    tryMerge() {
        if (!this.subdivided) return;

        let children = [this.nw, this.ne, this.sw, this.se];
        let total = children.reduce((s, c) => s + c.points.length, 0);

        if (
            total <= this.capacity &&
            children.every(c => !c.subdivided)
        ) {
            this.points = [];
            for (let c of children) {
                for (let p of c.points) {
                    this.points.push(p);
                    p.node = this;
                }
            }
            this.nw = this.ne = this.sw = this.se = null;
            this.subdivided = false;
        }
    }

    query(range, found = []) {
        if (!this.boundary.intersects(range)) return found;

        for (let p of this.points) {
            if (range.intersectsCircle(p)) found.push(p);
        }

        if (this.subdivided) {
            this.nw.query(range, found);
            this.ne.query(range, found);
            this.sw.query(range, found);
            this.se.query(range, found);
        }

        return found;
    }
}
