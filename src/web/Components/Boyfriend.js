import { types } from "../../../assets/animations/BOYFRIEND.js"
import { multframesAnimations } from "./Animation.js"
import { Sprites } from "../Images.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class Boyfriend extends multframesAnimations {
    constructor() {
        super({ types, frames: types.frames["idle-dance"] })
        this.x = 0
        this.y = 0
    }

    update(GirlFriend) {
        this.x = GirlFriend.x + GirlFriend.width / 2
        this.y = GirlFriend.y + GirlFriend.height / 2
        this.updateFrame()
    }

    render() {
        const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
        const dh = (frameHeight || height) / 1.5
        const dw = (frameWidth || width) / 1.5
        const x = this.x
        const y = this.y

        ctx.drawImage(
            Sprites.BOYFRIEND,
            sx, sy,
            width, height,
            x, y,
            dw, dh
        )
    }
}