class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
    setText(text, color) {
        this.text = `<text fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = SVG;