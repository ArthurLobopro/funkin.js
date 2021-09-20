const { shell } = require('electron')
import { range, delay, playAudio } from '../Util.js'
import { menuButtonsAnimationBase, transition } from '../Animation.js'
import * as mainButtons from "../../../assets/animations/main_menu_buttons.js"
import { Sounds } from "../Audio.js"
import { Start } from './Start.js'
import { FreePlay } from './FreePlay.js'
import { Images, Sprites } from '../Images.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    backgroudYellow: Images.backgroudYellow,
    buttons: Sprites.mainMenuButtons
}

const screenComponents = {
    buttons: {
        storyMode: new menuButtonsAnimationBase({
            types: mainButtons.storymode,
            isFocused: true,
            draw() {
                const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                const dh = frameHeight || height
                const dw = frameWidth || width
                const x = (canvas.width / 2 - dw / 2) - frameX
                const y = 50 + frameY
                ctx.drawImage(
                    images.buttons,
                    sx, sy,
                    width, height,
                    x, y,
                    dw, dh
                )
            },
            click() {

            }
        }),
        freeplay: new menuButtonsAnimationBase({
            types: mainButtons.freeplay,
            draw() {
                const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                const dh = frameHeight || height
                const dw = frameWidth || width
                const x = (canvas.width / 2 - dw / 2) - frameX
                const y = 100 + height + frameY - (this.isFocused ? 50 : 0)
                ctx.drawImage(
                    images.buttons,
                    sx, sy,
                    width, height,
                    x, y,
                    dw, dh
                )
            },
            click() {
                Menu.reset()
                FreePlay.init()
            }
        }),

        donate: new menuButtonsAnimationBase({
            types: mainButtons.donate,
            draw() {
                const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                const dh = frameHeight || height
                const dw = frameWidth || width
                const x = (canvas.width / 2 - width / 2) + frameX / 2
                const y = 150 + dh * 2 - frameY - (this.isFocused ? 70 : 0)
                ctx.drawImage(
                    images.buttons,
                    sx, sy,
                    width, height,
                    x, y,
                    dw, dh
                )
            },
            click() {
                shell.openExternal("https://ninja-muffin24.itch.io/funkin")
            }
        }),
    }
}

const functions = {
    down() {
        const buttons = Object.entries(screenComponents.buttons)
        const focusedIndex = buttons.findIndex(([key, component]) => component.isFocused)
        buttons.forEach(([key, component]) => {
            component.unFocus()
        })

        const newIndex = focusedIndex + 1 === buttons.length ? 0 : focusedIndex + 1

        buttons[newIndex][1].focus()
        moveBackground(newIndex)
        playAudio(Sounds.scrollMenu)
    },
    up() {
        const buttons = Object.entries(screenComponents.buttons)
        const focusedIndex = buttons.findIndex(([key, component]) => component.isFocused)
        buttons.forEach(([key, component]) => {
            component.unFocus()
        })

        const newIndex = focusedIndex === 0 ? buttons.length - 1 : focusedIndex - 1
        buttons[newIndex][1].focus()
        moveBackground(newIndex)
        playAudio(Sounds.scrollMenu)
    },
    click() {
        const buttons = Object.entries(screenComponents.buttons)
        const focusedButton = buttons.find(([key, component]) => component.isFocused)
        focusedButton[1].click()
    },
    returnToStart() {
        clearInterval(Menu.renderInterval)
        const middleCallBack = () => {
            Menu.reset()
            Start.init()
        }
        transition(Menu.render, middleCallBack)
    }
}

const buttonsFunctions = {
    "s": functions.down,
    "ArrowDown": functions.down,
    "w": functions.up,
    "ArrowUp": functions.up,
    "Enter": functions.click,
    "Escape": functions.returnToStart
}

const moveBackground = async index => {
    const newBackgroundY = 30 * index || 0
    const diference = Menu.backgroudY - newBackgroundY
    const oldBackgroundY = Menu.backgroudY
    range(0, diference, 2).forEach(async (value, index) => {
        await delay(25 * index)
        Menu.backgroudY = oldBackgroundY - value
    })
}


const Menu = {
    renderInterval: null,
    updateInterval: null,
    backgroudY: 0,
    render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const { backgroudYellow: backgroud } = images
        ctx.drawImage(
            backgroud,
            0, Menu.backgroudY,
            backgroud.width - 80, backgroud.height - 80,
            0, 0,
            canvas.width, canvas.height
        )
        Object.entries(screenComponents.buttons).forEach(([key, component]) => {
            component.draw()
        })
    },
    updateFrames() {
        Object.entries(screenComponents.buttons).forEach(([key, component]) => {
            component.updateFrame()
        })
    },
    init() {
        this.renderInterval = setInterval(Menu.render, 1000 / 60);
        this.updateInterval = setInterval(Menu.updateFrames, 1000 / 18)
        window.onkeydown = this.onkeydown
    },
    reset() {
        clearInterval(this.renderInterval)
        clearInterval(this.updateInterval)
        Object.entries(screenComponents.buttons).forEach(([key, component]) => {
            component.reset()
        })
    },
    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }

}

export { Menu }