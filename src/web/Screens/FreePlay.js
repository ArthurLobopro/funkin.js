import { createText, BoldText } from "../Animations/Text.js";
import { imagesFolder } from "../../Paths.js";
import { loadImage, playAudio } from "../Util.js";
import { BoldButton } from "../Animations/Buttons.js";
import { Music, Sounds } from "../Audio.js";

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

const screenComponents = {
    buttons: [
        new BoldButton({ text: "Tutorial", x: 50, y: positions.middle, focused: true, music: Music.Tutorial_Inst }),
        new BoldButton({ text: "Bopeebo", x: 50, y: positions.innerBotton, music: Music.Bopeebo_Inst }),
        new BoldButton({ text: "Fresh", x: 50, y: positions.bottom, music: Music.Fresh_Inst }),
        // new BoldButton("Dadbatle", 50, positions.top),
        // new BoldButton("Spookeez", 50, positions.innerTop)
    ]
}

const getFocusedButtonIndex = () => {
    const index = screenComponents.buttons.findIndex(button => button.isFocused)
    return index
}

const getFocusedButton = () => screenComponents.buttons.find(button => button.isFocused)

const functions = {
    down() {
        const index = getFocusedButtonIndex()
        const newIndex = index + 1 === screenComponents.buttons.length ? 0 : index + 1
        screenComponents.buttons[index].unFocus()
        screenComponents.buttons[newIndex].focus()
        playAudio(Sounds.scrollMenu)
    },
    up() {
        const index = getFocusedButtonIndex()
        const newIndex = index - 1 === -1 ? screenComponents.buttons.length - 1 : index - 1
        screenComponents.buttons[index].unFocus()
        screenComponents.buttons[newIndex].focus()
        playAudio(Sounds.scrollMenu)
    }
}

const buttonsFunctions = {
    "s": functions.down,
    "ArrowDown": functions.down,
    "w": functions.up,
    "ArrowUp": functions.up,
    // "Enter": functions.click,
    // "Escape": functions.returnToStart
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
        screenComponents.buttons.forEach(component => {
            component.render()
        })
    },
    updateFrames() {
        screenComponents.buttons.forEach(component => {
            component.update()
        })
    },
    init() {
        this.renderInterval = setInterval(FreePlay.render, 1000 / 60);
        this.updateInterval = setInterval(FreePlay.updateFrames, 1000 / 18)
        getFocusedButton().play()
        window.onkeydown = this.onkeydown
    },
    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }
}

export { FreePlay }