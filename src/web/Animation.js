import { delay } from "./Util.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

class animationBase {
    frames = []
    atualFrameIndex = 0
    atualFrame = {}

    constructor({ frames, ...args }) {
        this.frames = frames
        this.atualFrameIndex = 0
        this.atualFrame = this.frames[0]

        Object.entries(args).forEach( ([key, value]) => this[key] = value )
    }

    reset() {
        this.atualFrameIndex = 0
        this.atualFrame = this.frames[0]
    }

    updateFrame() {
        this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
        this.atualFrame = this.frames[this.atualFrameIndex]
    }
}

class menuButtonsAnimationBase {
    isFocused = false
    constructor({ types, ...atributes }) {
        Object.entries(atributes).forEach(([key, value]) => {
            this[key] = value
        })

        console.log(atributes);
        this.types = types
        this.frames = this.types[this.isFocused ? 'focus' : 'basic']
        this.atualFrame = this.frames[0]
        this.atualFrameIndex = 0

    }
    updateFrame() {
        this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
        this.atualFrame = this.frames[this.atualFrameIndex]
    }
    reset() {
        this.atualFrameIndex = 0
        this.frames = this.types[this.isFocused ? 'focus' : 'basic']
        this.atualFrame = this.frames[0]
    }
    focus() {
        if (this.isFocused)
            return

        this.isFocused = true
        this.frames = this.types.focus
        this.atualFrameIndex = 0
        this.atualFrame = this.frames[0]
    }
    unFocus() {
        if (!this.isFocused)
            return

        this.isFocused = false
        this.frames = this.types.basic
        this.atualFrameIndex = 0
        this.atualFrame = this.frames[0]
    }
}

class multframesAnimations extends animationBase{
    types = {}

    constructor({ frames, types, ...args }) {
        super({ frames })
        this.types = types

        Object.entries(args).forEach( ([key, value]) => this[key] = value )
    }

    setFramesType(type){
        if(this.types[type]){
            this.frames = this.types[type]
            this.atualFrameIndex = 0
            this.atualFrame = this.frames[0]
        }else{
            console.error(`"${type}" not exists in animation types`)
        }
    }
}

async function transition(renderCallBack, middleCallBack) {
    const drawGradient = h => {
        const gradient = ctx.createLinearGradient(0, h, 0, canvas.height * 1.5 + h)
        gradient.addColorStop(0, '#000')
        gradient.addColorStop(1, '#00000000')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const drawReverseGradient = h => {
        const gradient = ctx.createLinearGradient(0, h, 0, canvas.height * 1.5 + h)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(1, '#000')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    for (let h = 0; h < canvas.height * 1.5; h += 15) {
        renderCallBack?.()
        drawGradient(h)
        await delay(10)
    }
    middleCallBack?.()
    for (let h = 0; h < canvas.height * 1.5; h += 15) {
        drawReverseGradient(h)
        await delay(10)
    }
}

export { animationBase, menuButtonsAnimationBase, multframesAnimations, transition }