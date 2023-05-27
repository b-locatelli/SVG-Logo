// require from the shape.js
const {Triangle, Circle, Square} = require("../lib/shape")

// test logo generate of triangle
describe("Triangle", () => {
    it('Should return a created logo', () => {
        const triangle = new Triangle();
        triangle.setColor("red")
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red"/>`)
    })
})

// test logo generate of circle
describe("Circle", () => {
    it('Should return a created logo', () => {
        const circle = new Circle();
        circle.setColor("green")
        expect(circle.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="green"/>`)
    })
})

// test logo generate of square
describe("Square", () => {
    it('Should return a created logo', () => {
        const square = new Square();
        square.setColor("yellow")
        expect(square.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="yellow"/>`)
    })
})