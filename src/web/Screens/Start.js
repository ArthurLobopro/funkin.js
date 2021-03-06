import { loadImage } from '../Util.js'
import { animationBase, transition } from '../Animation.js'
import { frames as logoFrames } from "../../../assets/animations/logoBumpin.js"
import { frames as GfDanceFrames } from "../../../assets/animations/gfDanceTitle.js"
import { types as titleEnterFramesTypes } from "../../../assets/animations/titleEnter.js"
import { Music, Sounds } from '../Audio.js'
import { Menu } from './Menu.js'
import { game } from '../Game.js'
import { Sprites } from '../Images.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    girlFriend: Sprites.girlFriendTitle,
    logo: Sprites.logo,
    titleEnter: Sprites.titleEnter
}

const screenComponents = {
    girlFriend: new animationBase({
        frames: GfDanceFrames,
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
    }),
    logo: new animationBase({
        frames: logoFrames,
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
    }),

    titleEnter: new animationBase({
        frames: titleEnterFramesTypes.pressEnter,
        yd: 0,
        draw() {
            const { width, height, x: sx, y: sy } = this.atualFrame
            const dw = width
            const dh = height
            const x = (canvas.width - (dw / 2)) - canvas.width * 0.3
            const y = canvas.height - dh - 50 - this.yd
            ctx.drawImage(
                images.titleEnter, //Imagem
                sx, sy, //Posição no sprite
                width, height, //Largura e altura no sprite
                x, y, //Posição x e y
                dw, dh //largura e altura na tela
            )
        },
        switchFrames() {
            this.frames = titleEnterFramesTypes.enterPressed
            this.atualFrameIndex = 0
            this.atualFrame[this.frames[0]]
            this.yd = 17
        },
        reset() {
            this.frames = titleEnterFramesTypes.pressEnter
            this.atualFrameIndex = 0
            this.atualFrame[this.frames[0]]
            this.yd = 0
        }
    })
}

const Start = {
    screenComponents,
    renderInterval: null,
    updateInterval: null,
    init() {
        if (!game.haveMusicPlaying) {
            game.setBackgroudMusic(Music.menuMusic)
        }
        this.renderInterval = setInterval(this.render, 1000 / 30)
        this.updateInterval = setInterval(() => {
            Object.entries(Start.screenComponents).forEach(([key, component]) => {
                component.updateFrame()
            })
        }, 1000 / 24)
        window.onkeydown = this.onkeydown
    },

    render() {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        Object.entries(Start.screenComponents).forEach(([key, component]) => {
            component.draw()
        })
    },
    reset() {
        Object.entries(Start.screenComponents).forEach(([key, component]) => {
            component.reset()
        })
        clearInterval(Start.updateInterval)
        clearInterval(Start.renderInterval)
    },
    onkeydown(event) {
        const { key } = event
        console.log(key);
        if (key === 'Enter') {
            Sounds.selectMenu.play()
            Start.screenComponents.titleEnter.switchFrames()
            // clearInterval(Start.updateInterval)
            clearInterval(Start.renderInterval)
            const middleCallBack = () => {
                Start.reset()
                Menu.init()
            }
            transition(Start.render, middleCallBack)
        }
    }
}

export { Start }