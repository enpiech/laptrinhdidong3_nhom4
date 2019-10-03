class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
}

class Square extends Point {
    constructor (id, x, y, length) {
        super(x, y)
        this.id = id
        this.x = x
        this.y = y
    }

    isInside(point) {
        if (point.x >= this.x 
            && point.x <= (this.x + length) 
            && point.y >= this.y
            && point.y <= (this.y + length)) {
                return true;
            }
        return false;
    }
}

let sqr = new Square(0, 1, 2, 2)
console.log(sqr)
let pts = new Point(0, 0)
console.log(sqr.isInside(pts))