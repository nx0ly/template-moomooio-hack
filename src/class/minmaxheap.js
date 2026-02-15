// https://en.wikipedia.org/wiki/Min-max_heap

// use the 'Iter' variant of a method whenever it exists

export default class MinMaxHeap {
    constructor(size) {
        this.heap = new Array(size).fill(null);
    }

    swap(a, b) {
        [a, b] = [b, a];
    }

    swapArray(a, b, h) {
        [h[a], h[b]] = [h[b], h[a]];
    }

    buildHeap(h) {
        for (let i = 0 | (h.length / 2) - 1; i >= 0; i--) {
            this.pushDown(h, i);
        }

        return h;
    }

    getLeftChild(i) {
        return 2 * i + 1;
    }

    getRightChild(i) {
        return 2 * i + 2;
    }

    // thought of implementing this method WAYY too late
    getGrandChildren(i) {
        return [this.getLeftChild(this.getLeftChild(i)), this.getLeftChild(this.getRightChild(i)), this.getRightChild(this.getLeftChild(i)), this.getRightChild(this.getRightChild(i))];
    }

    parent(i) {
        if (i == 0) return null; // root has no parent
        return 0 | ((i - 1) / 2);
    }

    grandparent(i) {
        let parent = this.parent(i);
        if (parent === null) return null;
        return this.parent(parent);
    }

    isMinLevel(i) {
        let level = 0 | (Math.log2(i + 1));
        return level % 2 === 0;
    }

    pushDown(h, i) {
        if (this.isMinLevel(i)) {
            this.pushDownMin(h, i);
        } else this.pushDownMax(h, i);
    }

    pushDownMin(h, i) {
        if (this.getLeftChild(i) < h.length || this.getRightChild(i) < h.length) {
            let isGrandChild = false;
            let m; //Math.min(heap[this.getLeftChild(this.getLeftChild(i))] != null ? heap[this.getLeftChild(this.getLeftChild(i))] : heap[this.getLeftChild(i)], heap[this.getRightChild(this.getRightChild(i)) != null ? this.getRightChild(this.getRightChild(i)) : this.getRightChild(i)]);

            let grandchildren = this.getGrandChildren(i).filter(x => x < h.length && h[x] != null);

            if (grandchildren.length) {
                isGrandChild = true;
                m = grandchildren[0];
                for (let x of grandchildren) {
                    if (h[x] < h[m]) m = x;
                }
            } else {
                let children = [this.getLeftChild(i), this.getRightChild(i)].filter(x => x < h.length && h[x] != null);

                if (children.length === 0) return;

                m = children[0];

                for (let x of children) {
                    if (h[x] < h[m]) m = x;
                }
            }

            if (isGrandChild) {
                if (h[m] < h[i]) {
                    // this.swap(h[m], h[i]);
                    this.swapArray(m, i, h);

                    if (h[m] > h[this.parent(m)]) this.swapArray(m, this.parent(m), h); //this.swap(h[m], h[this.parent(m)]);

                    this.pushDown(h, m);
                }
            } else if (h[m] < h[i]) this.swapArray(m, i, h); //this.swap(h[m], h[i]);
        }
    }

    pushDownMax(h, i) {
        if (this.getLeftChild(i) < h.length || this.getRightChild(i) < h.length) {
            let isGrandChild = false;
            let m; //Math.min(heap[this.getLeftChild(this.getLeftChild(i))] != null ? heap[this.getLeftChild(this.getLeftChild(i))] : heap[this.getLeftChild(i)], heap[this.getRightChild(this.getRightChild(i)) != null ? this.getRightChild(this.getRightChild(i)) : this.getRightChild(i)]);

            let grandchildren = this.getGrandChildren(i).filter(x => x < h.length && h[x] != null);

            if (grandchildren.length) {
                isGrandChild = true;
                m = grandchildren[0];
                for (let x of grandchildren) {
                    if (h[x] < h[m]) m = x;
                }
            } else {
                let children = [this.getLeftChild(i), this.getRightChild(i)].filter(x => x < h.length && h[x] != null);

                if (children.length === 0) return;

                m = children[0];

                for (let x of children) {
                    if (h[x] < h[m]) m = x;
                }
            }

            if (isGrandChild) {
                if (h[m] > h[i]) {
                    // this.swap(h[m], h[i]);
                    this.swapArray(m, i, h);

                    if (h[m] < h[this.parent(m)]) this.swapArray(m, this.parent(m), h); //this.swap(h[m], h[this.parent(m)]);

                    this.pushDown(h, m);
                }
            } else if (h[m] > h[i]) this.swapArray(m, i, h); //this.swap(h[m], h[i]);
        }
    }


    pushDownIter(h, m) {
        while (this.getLeftChild(m) || this.getRightChild(m)) {
            let i = m;

            if (this.isMinLevel(i)) {
                let isGrandChild = false;
                let m; //Math.min(heap[this.getLeftChild(this.getLeftChild(i))] != null ? heap[this.getLeftChild(this.getLeftChild(i))] : heap[this.getLeftChild(i)], heap[this.getRightChild(this.getRightChild(i)) != null ? this.getRightChild(this.getRightChild(i)) : this.getRightChild(i)]);

                let grandchildren = this.getGrandChildren(i);

                if (grandchildren.length) {
                    isGrandChild = true;
                    m = Math.min(...grandchildren);
                } else {
                    let children = [this.getLeftChild(i), this.getRightChild(i)];
                    m = Math.min(...children);
                }

                if (h[m] < h[i]) {
                    // this.swap(m, i);
                    this.swapArray(m, i, h);

                    if (isGrandChild) {
                        if (h[m] > h[this.parent(m)]) this.swapArray(m, this.parent(m), h); // this.swap(h[m], h[this.parent(m)]);
                    } else break;
                } else break;
            } else {
                let isGrandChild = false;
                let m; //Math.min(heap[this.getLeftChild(this.getLeftChild(i))] != null ? heap[this.getLeftChild(this.getLeftChild(i))] : heap[this.getLeftChild(i)], heap[this.getRightChild(this.getRightChild(i)) != null ? this.getRightChild(this.getRightChild(i)) : this.getRightChild(i)]);

                let grandchildren = this.getGrandChildren(i);

                if (grandchildren.length) {
                    isGrandChild = true;
                    m = Math.min(...grandchildren);
                } else {
                    let children = [this.getLeftChild(i), this.getRightChild(i)];
                    m = Math.min(...children);
                }

                if (h[m] > h[i]) {
                    this.swapArray(m, i, h);

                    if (isGrandChild) {
                        if (h[m] < h[this.parent(m)]) this.swapArray(m, this.parent(m), h); // this.swap(h[m], h[this.parent(m)]);
                    } else break;
                } else break;
            }
        }
    }

    pushUp(h, i) {
        if (i != 0) {
            if (!this.isMinLevel(i)) {
                if (h[i] > h[this.parent(i)]) {
                    // this.swap(h[i], h[this.parent(i)]);
                    this.swapArray(i, this.parent(i), h);
                    this.pushUpMax(h, i);
                } else this.pushUpMin(h, i);
            } else {
                if (h[i] < h[this.parent(i)]) {
                    // this.swap(h[i], h[this.parent(i)]);
                    this.swapArray(i, this.parent(i), h);
                    this.pushUpMin(h, i);
                } else this.pushUpMax(h, i);
            }
        }
    }

    pushUpMin(h, i) {
        let grandparent = this.grandparent(i);

        if (grandparent && h[i] < h[grandparent]) {
            // this.swap(h[i], h[grandparent]);
            this.swapArray(i, grandparent, h);

            this.pushUpMin(h, grandparent);
        }
    }


    pushUpMax(h, i) {
        let grandparent = this.grandparent(i);

        if (grandparent && h[i] > h[grandparent]) {
            // this.swap(h[i], h[grandparent]);
            this.swapArray(i, grandparent, h);

            this.pushUpMax(h, grandparent);
        }
    }

    pushUpMinIter(h, i) {
        while (this.grandparent(i) && h[i] < this.grandparent[i]) {
            // this.swap(h[i], h[this.grandparent(i)]);
            this.swapArray(i, this.grandparent(i), h);
            i = this.grandparent(i);
        }
    }
}