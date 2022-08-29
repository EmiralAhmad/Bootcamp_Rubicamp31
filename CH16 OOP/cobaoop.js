//CLASS METHOD
class Rectangle {
    #width
  constructor(height, width) {
    this.height = height;
    this.#width = width;
  }

  set width(width) {
    this.width = width
  }

  get width(){
    return this
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10); //Harus pakai 'new' dulu baru bisa dipakai
let area = square.calcArea()
console.log(square.width);

// // STATIC METHOD
// class Point {
//     constructor(x,y) {
//         this.x = x;
//         this.y = y;
//     }

//     print() {
//         return `(${this.x}),${this.y}`
//     }

//     static distance(a,b) {
//         const dx = a.x - b.x
//         const dy = a.y - b.y 
//         return Math.hypot(dx,dy)
//     }
// }

// const a = new Point(1,1)
// const b = new Point(5,4)

//  let jarak = Point.distance(a,b)
//  console.log(`jarak antara ${a.print} dan ${b.print()} adalah ${Point.distance(a,b)}`)

//  //INHERITANCE

//  class Cat {
//     constructor(n)
//  }