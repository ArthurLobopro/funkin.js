const { ipcRenderer } = require('electron')
import { loadImage } from '../Util.js'
import * as logoAnimation from "../../../assets/animations/logoBumpin.js"
import * as girlFriendAnimation from "../../../assets/animations/gfDanceTitle.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    girlFriend: await loadImage(girlFriendAnimation.path),
    logo: await loadImage(logoAnimation.path)
}

const Start = {
    girlFriend: {
        ...girlFriendAnimation,
        atualFrame: girlFriendAnimation.frames[0],
        atualFrameIndex: 0,
        attFrame() {
            this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
            this.atualFrame = this.frames[this.atualFrameIndex]
        },
        draw() {
            const { x:sx, y:sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0 , frameY = 0 } = this.atualFrame
            const x = canvas.width - width - 40 + frameX/2
            const y = canvas.height - height - 20 + frameY
            const dy = frameHeight || height
            const dx = frameWidth || width
            ctx.drawImage(
                images.girlFriend, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x , y, //Posição x e y
                dx, dy  //largura e altura na tela
            )
        }

    },
    logo: {
        ...logoAnimation,
        atualFrame: logoAnimation.frames[1],
        atualFrameIndex: 0,
        x: -130,
        y: -90,
        attFrame() {
            this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
            this.atualFrame = this.frames[this.atualFrameIndex]
        },
        draw() {
            const { width, height, frameHeight = 0, frameWidth = 0, frameX = 0 , frameY = 0 } = this.atualFrame
            const sx = 0, sy = 0
            const x = this.x + frameX
            const y = this.y + frameY
            const dy = frameHeight || height
            const dx = frameWidth || width
            ctx.drawImage(
                images.logo, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x , y, //Posição x e y
                dx, dy  //largura e altura na tela
            )
        }
    },
    
    init(){
        setInterval(() => Start.render(), 1000/30)
        setInterval(() => {
            Start.logo.attFrame()
            Start.girlFriend.attFrame()
        }, 1000/24)
    },

    render() {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        this.logo.draw()
        this.girlFriend.draw()
    },
}

export { Start }