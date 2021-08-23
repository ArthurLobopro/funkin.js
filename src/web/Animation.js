import { delay } from "./Util.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

class animationBase {
    constructor({ frames }) {
        this.frames = frames
        this.atualFrameIndex = 0
        this.atualFrame = this.frames[0]
        this.reset = function () {
            this.atualFrameIndex = 0
            this.atualFrame = this.frames[0]
        }
        this.updateFrame = function () {
            this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
            this.atualFrame = this.frames[this.atualFrameIndex]
        }
    }
}

class menuButtonsAnimationBasic {
    constructor({ types, isFocused = false }) {

        this.isFocused = isFocused
        this.types = types
        this.frames = this.types[this.isFocused ? 'focus' : 'basic']
        this.atualFrame = this.frames[0]
        this.atualFrameIndex = 0

        this.updateFrame = function () {
            this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
            this.atualFrame = this.frames[this.atualFrameIndex]
        }
        this.focus = function () {
            if (this.isFocused)
                return

            this.isFocused = true
            this.frames = this.types.focus
            this.atualFrameIndex = 0
            this.atualFrame = this.frames[0]
        }
        this.unFocus = function () {
            if (!this.isFocused)
                return

            this.isFocused = false
            this.frames = this.types.basic
            this.atualFrameIndex = 0
            this.atualFrame = this.frames[0]
        }
    }
}

async function transition(renderCallBack, middleCallBack) {
    for (let h = 0; h < canvas.height; h += 15) {
        renderCallBack?.()
        const gradient = ctx.createLinearGradient(0, h, 0, canvas.height + h)
        gradient.addColorStop(0, '#000')
        gradient.addColorStop(1, '#00000000')
        // ctx.fillStyle = "#000"
        // ctx.fillRect(0, 0, canvas.width, h)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        await delay(10)
    }
    middleCallBack?.()
    for (let h = 0; h < canvas.height; h += 15) {
        // renderCallBack?.()
        const gradient = ctx.createLinearGradient(0, h, 0, canvas.height + h)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(1, '#000')
        // ctx.fillStyle = "#000"
        // ctx.fillRect(0, 0, canvas.width, h)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        await delay(10)
    }
}

export { animationBase, menuButtonsAnimationBasic, transition }