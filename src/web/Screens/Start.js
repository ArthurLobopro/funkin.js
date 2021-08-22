const path = require('path')
import { appPath } from '../../Paths.js'
import { loadAudio, loadImage } from '../Util.js'
import { animationBase } from '../Animation.js'
import * as logoAnimation from "../../../assets/animations/logoBumpin.js"
import * as girlFriendAnimation from "../../../assets/animations/gfDanceTitle.js"
import * as titleEnterAnimation from "../../../assets/animations/titleEnter.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    girlFriend: await loadImage(girlFriendAnimation.path),
    logo: await loadImage(logoAnimation.path),
    titleEnter: await loadImage(titleEnterAnimation.path)
}

const backgroundMusic = loadAudio(path.resolve(appPath, "assets/music/freakyMenu.ogg"))
backgroundMusic.play()

const Start = {
    girlFriend: {
        ...new animationBase({ ...girlFriendAnimation }),
        draw() {
            const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
            const x = canvas.width - width - 40 + frameX / 2
            const y = canvas.height - height - 20 + frameY
            const dy = frameHeight || height
            const dx = frameWidth || width
            ctx.drawImage(
                images.girlFriend, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x, y, //Posição x e y
                dx, dy  //largura e altura na tela
            )
        }

    },
    logo: {
        ...new animationBase({ ...logoAnimation }),
        x: -130,
        y: -90,
        draw() {
            const { width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
            const sx = 0, sy = 0
            const x = this.x + frameX
            const y = this.y + frameY
            const dh = frameHeight || height
            const dw = frameWidth || width
            ctx.drawImage(
                images.logo, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x, y, //Posição x e y
                dw, dh  //largura e altura na tela
            )
        }
    },
    titleEnter: {
        ... new animationBase({ ...titleEnterAnimation.frames.pressEnter }),
        draw() {
            const { width, height, x: sx, y: sy } = this.atualFrame
            const dw = width 
            const dh = height 
            const x =  (canvas.width  - (dw / 2)) - canvas.width * 0.3
            const y = canvas.height - dh - 50
            console.table({x,y})
            ctx.drawImage(
                images.titleEnter, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x, y, //Posição x e y
                dw, dh //largura e altura na tela
            )
        }
    },

    init() {
        setInterval(() => Start.render(), 1000 / 30)
        setInterval(() => {
            Start.logo.attFrame()
            Start.girlFriend.attFrame()
            Start.titleEnter.attFrame()
        }, 1000 / 24)
    },

    render() {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        this.logo.draw()
        this.girlFriend.draw()
        this.titleEnter.draw()
    },
}

export { Start }