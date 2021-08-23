const { shell } = require('electron')
const { resolve } = require('path')
import { loadImage, range, delay } from '../Util.js'
import { menuButtonsAnimationBasic, transition } from '../Animation.js'
import { imagesFolder } from '../../Paths.js'
import * as mainButtons from "../../../assets/animations/main_menu_buttons.js"


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    backgroudYellow: await loadImage(resolve(imagesFolder, 'menuBG.png')),
    buttons: await loadImage(resolve(mainButtons.path))
}

const screenComponents = {
    buttons: {
        storyMode: {
            ...new menuButtonsAnimationBasic({ types: mainButtons.storymode, isFocused: true }),
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
        },
        freeplay: {
            ...new menuButtonsAnimationBasic({ types: mainButtons.freeplay }),
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

            }
        },
        donate: {
            ...new menuButtonsAnimationBasic({ types: mainButtons.donate }),
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
        }
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
    },
    click() {
        const buttons = Object.entries(screenComponents.buttons)
        const focusedButton = buttons.find(([key, component]) => component.isFocused)
        focusedButton[1].click()
    }
}

const buttonsFunctions = {
    "s": functions.down,
    "ArrowDown": functions.down,
    "w": functions.up,
    "ArrowUp": functions.up,
    "Enter": functions.click
}

const moveBackground = async index => {
    const newBackgroundY = 30 * index || 0
    const diference = Menu.backgroudY - newBackgroundY
    const oldBackgroundY = Menu.backgroudY
    range(0, diference,2).forEach( async (value, index) => {
        await delay(25 * index)
        Menu.backgroudY = oldBackgroundY - value
    })
}


const Menu = {
    renderInterval: null,
    updateInterval: null,
    backgroudY: 0,
    draw() {
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
        this.renderInterval = setInterval(Menu.draw, 1000 / 60);
        this.updateInterval = setInterval(Menu.updateFrames, 1000 / 18)
        window.onkeydown = this.onkeydown
    },
    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }

}

export { Menu }