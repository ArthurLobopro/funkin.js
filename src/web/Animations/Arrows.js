import { Sprites } from "../Images.js"
import { grayArrows, press as pressArrows } from "../../../assets/animations/NOTES.js"

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
        left: [grayArrows.left],
        up: [grayArrows.up],
        down: [grayArrows.down],
        right: [grayArrows.right]
    }

    arrowsIndex = {
        left: 0,
        up: 0,
        down: 0,
        right: 0
    }

    arrowsX = {
        left: 0,
        up: 0,
        down: 0,
        right: 0
    }


    constructor(side) {
        this.updateWidth()
        this.updateHeight()

        this.x = side == "left" ? this.borderDistance : canvas.width - this.width - this.borderDistance
        this.updateX()
        console.log(this.arrowsX);
    }

    updateWidth() {
        this.width = (
            Object.entries(this.arrows).reduce((count, [key, arrow]) => count + arrow[this.arrowsIndex[key]].width / this.reduceArrow, 0) +
            this.spaceament * 4
        )
    }

    updateHeight() {
        const arrows = Object.entries(this.arrows)
        this.height = (
            arrows.reduce((count, [key, arrow]) => count + arrow[this.arrowsIndex[key]].height, 0) / arrows.length
        )
    }

    updateX(){
        const arrows = Object.entries(this.arrows)

        arrows.forEach(([key, arrow], index) => {
            this.arrowsX[key] = arrows.reduce((count, [key, arrow], currentIndex) => {
                if (currentIndex >= index) {
                    return count
                }
    
                return (
                    count 
                    + arrow[this.arrowsIndex[key]].width / this.reduceArrow + (index == 0 ? 0 : this.spaceament) 
                    // -(arrow[this.arrowsIndex[key]].frameX || 0)
                )
            }, this.x)
        })
        
        
    }

    updateFrames() {
        for (const side in this.arrowsIndex) {
            const index = this.arrowsIndex[side]
            if(index + 1 >= this.arrows[side].length){
                this.arrowsIndex[side] = 0
                this.arrows[side] = [grayArrows[side]]
            }else{
                this.arrowsIndex[side] =index + 1
            }
        }
    }

    click(direction) {
        this.arrows[direction] = pressArrows[direction]
        console.log(this.arrows);
    }

    render() {
        const arrows = Object.entries(this.arrows)
        arrows.forEach(([key, arrow], index) => {
            const {
                x: sx, y: sy, width, height,
                frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0
            } = arrow[this.arrowsIndex[key]]

            const dw = ((frameWidth || width) - frameX / this.reduceArrow) / this.reduceArrow
            const dh = ((frameHeight || height) - frameY / this.reduceArrow) / this.reduceArrow
            

            ctx.drawImage(
                Sprites.NOTES,
                sx, sy,
                width, height,
                this.arrowsX[key], this.y,
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

    render() {
        this.ArrowsFrames.left.render()
        this.ArrowsFrames.right.render()
    }

    update(){
        this.ArrowsFrames.left.updateFrames()
        this.ArrowsFrames.right.updateFrames()
    }

    onClick(side, direction) {
        this.ArrowsFrames[side].click(direction)
    }

}