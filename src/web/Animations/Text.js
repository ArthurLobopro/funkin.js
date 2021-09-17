import { numbers, lowerCase, upperCase } from "../../../assets/animations/alphabet.js"
import { Sprites } from "../Images.js"

const caracteres = {
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowerCase: [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ],
    upperCase: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
}

const space = [{
    x: 0,
    y: 0,
    height: 0,
    width: 40,
    isSpace: true
}]

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const { alphabet } = Sprites

class createText {

    constructor(text, x = 0, y = 0) {
        if (text === undefined) return
        this.charObjects = []
        this.atualIndex = 0
        this.x = x
        this.y = y
        this.frames = []
        String(text).split('').forEach(char => {
            if (caracteres.numbers.includes(char)) {
                this.charObjects.push(numbers[char])
            }
            if (caracteres.lowerCase.includes(char)) {
                this.charObjects.push(lowerCase[char])
            }
            if (caracteres.upperCase.includes(char)) {
                this.charObjects.push(upperCase.normal[char])
            }
            if (char === " ") {
                this.charObjects.push(space)
            }
        })
        console.log(this.charObjects);
        this.setFrames(0)
        this.render()
    }
    setFrames(index) {
        this.frames = []
        this.charObjects.forEach(char => {
            this.frames.push(char[index])
        })
    }
    getWidth() {
        return this.charObjects.reduce((currentWidth, char) => {
            const charWidth = char[this.atualIndex].width
            return currentWidth + charWidth
        }, 0)
    }
    getCurrentWidth(index) {
        let currentWidth = 0
        for (let i = 0; i < index; i++) {
            const { width, frameWidth = 0 } = this.frames[i]
            currentWidth += frameWidth || width
        }
        return currentWidth
    }
    drawChars(x, y) {
        this.frames.forEach((char, index) => {
            const {
                x: sx, y: sy, width, height,
                frameHeight = 0, frameWidth = 0, frameX = 0,
                frameY = 0, isSpace = false
            } = char
            if (isSpace) return
            const dx = x + this.getCurrentWidth(index) + 5 * index + frameX
            const dy = y + frameY
            const dw = frameWidth || width
            const dh = frameHeight || height
            ctx.drawImage(
                alphabet,
                sx, sy,
                width, height,
                dx, dy,
                dw, dh
            )
        })
    }
    update() {
        const index = this.atualIndex
        this.atualIndex = index + 1 === 4 ? 0 : index + 1
        this.setFrames(this.atualIndex)
    }
    render() {
        this.drawChars(this.x, this.y)
    }
    reset() {
        this.atualIndex = 0
        this.setFrames(0)
    }
}

class BoldText extends createText {
    constructor(text, x = 0, y = 0, transparency = false) {
        super();
        this.charObjects = []
        this.atualIndex = 0
        this.x = x
        this.y = y
        this.frames = []
        this.transparency = transparency
        String(text).toUpperCase().split('').forEach(char => {
            if (caracteres.upperCase.includes(char)) {
                this.charObjects.push(upperCase.bold[char])
            }
            if (char === " ") {
                this.charObjects.push(space)
            }
        })
        this.setFrames(0)
    }
    render() {
        ctx.save()
        ctx.globalAlpha = this.transparency ? 0.6 : 1
        this.drawChars(this.x, this.y)
        ctx.restore()
    }
}
export { createText, BoldText }