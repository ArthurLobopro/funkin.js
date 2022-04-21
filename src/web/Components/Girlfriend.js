import { frames as frameTypes } from "../../../assets/animations/GF-assets.js"
import { multTypesAnimation } from "./Animation.js"
import { Sprites } from "../Images.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class Girlfriend extends multTypesAnimation {
    constructor() {
        super({ frames: frameTypes.dancingBeat, types: frameTypes })
        this.updateCoords()
    }

    updateCoords() {
        const { width, height, frameHeight = 0, frameWidth = 0 } = this.atualFrame

        this.width = (frameWidth || width) / 1.5
        this.height = (frameHeight || height) / 1.5
        this.x = canvas.width / 2 - this.width / 2
        this.y = canvas.height / 2 - this.height / 2
    }

    update() {
        this.updateFrame()
        this.updateCoords()
    }

    render() {
        const { x: sx, y: sy, width, height } = this.atualFrame
        const dh = this.height
        const dw = this.width
        const x = this.x
        const y = this.y

        ctx.drawImage(
            Sprites.GFAssets,
            sx, sy,
            width, height,
            x, y,
            dw, dh
        )
    }
}