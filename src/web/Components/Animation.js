//@ts-check

import { delay } from "../Util.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

class animationBase {
    frames = []
    atualFrameIndex = 0

    constructor({ frames, ...args }) {
        this.frames = frames
        this.atualFrameIndex = 0
        Object.entries(args).forEach( ([key, value]) => this[key] = value )
    }

    reset() {
        this.atualFrameIndex = 0
    }

    updateFrame() {
        this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
    }

    get atualFrame(){
        return this.frames[this.atualFrameIndex]
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

export { animationBase, multframesAnimations, transition }