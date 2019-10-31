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
        this.length = length
    }

    isInside(point) {
        if (point.x >= this.x 
            && point.x <= (this.x + this.length) 
            && point.y >= this.y
            && point.y <= (this.y + this.length)) {
                return true;
            }
        return false;
    }
}

let sqr = new Square(0, 1, 3, 2)
console.log(sqr)
let pts = new Point(0, 0)
console.log(sqr.isInside(pts))
pts = new Point(99, 3)
console.log(sqr.isInside(pts))