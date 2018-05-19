function Point(x, y) {
    console.log(this)
    this.x = x
    this.y = y
}

Point.prototype.r = function () {
    return Math.sqrt(
        this.x * this.x + this.y * this.y
    )
}

var p = new Point(1, 1)

console.log(p)
console.log(p.r())
