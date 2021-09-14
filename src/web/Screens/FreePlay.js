import { imagesFolder } from "../../Paths.js";
import { loadImage } from "../Util.js";
import { BoldButton } from "../Animations/Buttons.js";
import { Music } from "../Audio.js";
import { Menu } from "./Menu.js"
import { ButtonsList } from "../Animations/ButtonsList.js";
import { transition } from "../Animation.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    backgroudBlue: await loadImage(imagesFolder, 'menuBGBlue.png'),
}

const positions = {
    top: canvas.height / 2 - 50 / 2 - 100 * 3,
    innerTop: canvas.height / 2 - 50 / 2 - 100 * 1.5,
    middle: canvas.height / 2 - 50 / 2,
    innerBotton: canvas.height / 2 - 50 / 2 + 100 * 1.5,
    bottom: canvas.height / 2 - 50 / 2 + 100 * 3
}

function setScreen(screen) {
    FreePlay.reset()
    transition(FreePlay.render, () => screen.init())
}

const screenComponents = {
    buttons: new ButtonsList([
        new BoldButton({ text: "Tutorial", x: 50, focused: true, music: Music.Tutorial_Inst, click() { } }),
        new BoldButton({ text: "Bopeebo", x: 50, music: Music.Bopeebo_Inst, click() { } }),
        new BoldButton({ text: "Fresh", x: 50, music: Music.Fresh_Inst, click() { } }),
        // new BoldButton({ text: "Dadbatle", x: 50, click(){} }),
    ])
}

const functions = {
    down: () => screenComponents.buttons.down(),
    up: () => screenComponents.buttons.up(),
    returnToMenu() {
        setScreen(Menu)
    }
}

const buttonsFunctions = {
    "s": functions.down,
    "ArrowDown": functions.down,
    "w": functions.up,
    "ArrowUp": functions.up,
    "Enter": () => screenComponents.buttons.click(),
    "Escape": functions.returnToMenu
}

const FreePlay = {
    renderInterval: null,
    updateInterval: null,
    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const { backgroudBlue: backgroud } = images
        ctx.drawImage(
            backgroud,
            0, 0,
            backgroud.width - 80, backgroud.height,
            0, 0,
            canvas.width, canvas.height
        )
        screenComponents.buttons.render()
    },
    updateFrames() {
        screenComponents.buttons.updateFrames()
    },
    init() {
        this.renderInterval = setInterval(FreePlay.render, 1000 / 60);
        this.updateInterval = setInterval(FreePlay.updateFrames, 1000 / 18)
        window.onkeydown = this.onkeydown
    },
    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    },
    reset() {
        clearInterval(this.renderInterval)
        clearInterval(this.updateInterval)
        screenComponents.buttons.reset()
    }
}

export { FreePlay }