import { read } from "./read-json-song.js";
import { appPath, imagesFolder } from "../../Paths.js"
import { loadImage } from "../Util.js";
import { frames as GirlFriendFrames } from "../../../assets/animations/GF-assets.js"
import { types as BoyfriendTypes } from "../../../assets/animations/BOYFRIEND.js"
import { Images, Sprites } from "../Images.js";
import { multframesAnimations } from "../Animation.js";
import { Pause } from "../Screens/Pause.js";

const images = {
    stageback: Images.stageback,
    curtains: Images.curtains,
    stagefront: Images.stagefront,
    GFAssets: Sprites.GFAssets,
    Boyfriend: Sprites.BOYFRIEND
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const GirlFriend = new multframesAnimations({
    frames: GirlFriendFrames.dancingBeat,
    types: GirlFriendFrames,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    draw() {
        const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
        const dh = (frameHeight || height) / 1.5
        const dw = (frameWidth || width) / 1.5
        const x = canvas.width / 2 - dw / 2
        const y = canvas.height / 2 - dh / 2
        this.y = y
        this.x = x
        this.width = dw
        this.height = dh
        ctx.drawImage(
            images.GFAssets, //Imagem
            sx, sy, //Posição no sprite
            width, height, //Largura e altura no sprite
            x, y, //Posição x e y
            dw, dh  //largura e altura na tela
        )
    }
})

const Boyfriend = new multframesAnimations({
    frames: BoyfriendTypes.frames["idle-dance"],
    types: BoyfriendTypes,
    draw() {
        const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
        const dh = (frameHeight || height) / 1.5
        const dw = (frameWidth || width) / 1.5
        const x = GirlFriend.x + GirlFriend.width / 2
        const y = GirlFriend.y + GirlFriend.height / 2

        ctx.drawImage(
            images.Boyfriend, //Imagem
            sx, sy, //Posição no sprite
            width, height, //Largura e altura no sprite
            x, y, //Posição x e y
            dw, dh  //largura e altura na tela
        )
    }
})

const Tutorial = {
    updateInterval: null,
    renderInterval: null,
    isPaused: false,
    pauseScreen: null,

    render() {
        const { width, height } = images.stagefront
        ctx.drawImage(
            images.stageback,
            0, 0,
            canvas.width, canvas.height
        )

        ctx.drawImage(
            images.stagefront,
            0, 400,
            canvas.width, height
        )

        ctx.drawImage(
            images.curtains,
            0, 0,
            canvas.width, canvas.height
        )

        GirlFriend.draw()
        Boyfriend.draw()

    },

    update() {
        GirlFriend.updateFrame()
        Boyfriend.updateFrame()
    },

    pause() {
        clearInterval(this.updateInterval)
        clearInterval(this.renderInterval)
        this.isPaused = true
        this.pauseScreen = new Pause({ renderCb:  Tutorial.render  })
        console.log("pause");
    },

    init() {
        this.renderInterval = setInterval(() => this.render(), 1000 / 30)
        this.updateInterval = setInterval(() => this.update(), 1000 / 24)
        window.onkeydown = this.onkeydown
    },

    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }

}

const functions = {
    down: () => { },
    up: () => { },
    pause: () => Tutorial.pause()
}

const buttonsFunctions = {
    "s": functions.down,
    "ArrowDown": functions.down,
    "w": functions.up,
    "ArrowUp": functions.up,
    "Escape": functions.pause
}


export default Tutorial