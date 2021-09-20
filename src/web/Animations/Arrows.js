import { Sprites } from "../Images.js"
import { grayArrows } from "../../../assets/animations/NOTES.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class GrayArrows {
    width = 0
    height = 0
    x = 0
    y = 75
    spaceament = 10
    borderDistance = 55
    reduceArrow = 1.5

    arrows = {
        left: grayArrows.left,
        up: grayArrows.up,
        down: grayArrows.down,
        right: grayArrows.right
    }


    constructor(direction) {
        this.updateWidth()
        this.updateHeight()
        this.x = direction == "left" ? this.borderDistance : canvas.width - this.width - this.borderDistance
    }

    updateWidth() {
        this.width = (
            Object.entries(this.arrows).reduce((count, [key, arrow]) => count + arrow.width / this.reduceArrow, 0) +
            this.spaceament * 4
        )
    }

    updateHeight() {
        const arrows = Object.entries(this.arrows)
        this.height = (
            arrows.reduce((count, [key, arrow]) => count + arrow.height, 0) / arrows.length
        )
    }

    render() {
        const arrows = Object.entries(this.arrows)
        arrows.forEach(([_, arrow], index) => {
            const {
                x: sx, y: sy, width, height,
                frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0
            } = arrow

            const atualX = arrows.reduce((count, [key, arrow], currentIndex) => {
                if (currentIndex >= index) {
                    return count
                }

                return count + arrow.width / this.reduceArrow + (index == 0 ? 0 : this.spaceament)
            }, this.x)

            const dw = (frameWidth || width) / this.reduceArrow
            const dh = (frameHeight || height) / this.reduceArrow

            ctx.drawImage(
                Sprites.NOTES,
                sx, sy,
                width, height,
                atualX, this.y,
                dw, dh
            )
        })
    }

}

export class ArrowsPainel {
    ArrowsFrames = {
        left: new GrayArrows("left"),
        right: new GrayArrows("right")
    }

    render(){
        this.ArrowsFrames.left.render()
        this.ArrowsFrames.right.render()
    }

}