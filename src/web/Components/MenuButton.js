const { shell } = require('electron')

import * as mainButtons from "../../../assets/animations/main_menu_buttons.js"
import { Sprites } from "../Images.js"
import { FreePlay } from "../Screens/FreePlay.js"
import { Menu } from "../Screens/Menu.js"
import { playAudio } from "../Util.js"
import { Sounds } from "../Audio.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

class MenuButton {
    isFocused = false
    constructor({ types, index, isFocused = false, click, getCoords }) {
        this.click = click
        this.isFocused = isFocused
        this.index = index
        this.types = types
        this.getCoords = getCoords
        this.frames = this.types[this.isFocused ? 'focus' : 'basic']
        this.atualFrameIndex = 0

    }

    get atualFrame() {
        return this.frames[this.atualFrameIndex]
    }

    updateFrame() {
        this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
    }

    update() {
        this.updateFrame()
    }
    reset() {
        this.atualFrameIndex = 0
        this.frames = this.types[this.isFocused ? 'focus' : 'basic']
    }
    focus() {
        if (this.isFocused)
            return

        this.isFocused = true
        this.frames = this.types.focus
        this.atualFrameIndex = 0
    }
    unFocus() {
        if (!this.isFocused)
            return

        this.isFocused = false
        this.frames = this.types.basic
        this.atualFrameIndex = 0
    }

    render() {
        const { sx, sy, width, height, x, y, dw, dh } = this.getCoords()
        ctx.drawImage(
            Sprites.mainMenuButtons,
            sx, sy,
            width, height,
            x, y,
            dw, dh
        )
    }
}

export class MenuButtonsList {
    constructor() {
        this.buttons = [
            new MenuButton({
                types: mainButtons.storymode, isFocused: true, index: 0,
                click() { },
                getCoords() {
                    const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                    const dh = frameHeight || height
                    const dw = frameWidth || width
                    const x = (canvas.width / 2 - dw / 2) - frameX
                    const y = 50 + frameY
                    return {
                        sx, sy,
                        width, height,
                        x, y,
                        dw, dh
                    }
                }
            }),
            new MenuButton({
                types: mainButtons.freeplay, index: 1,
                click() {
                    Menu.reset()
                    FreePlay.init()
                },
                getCoords() {
                    const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                    const dh = frameHeight || height
                    const dw = frameWidth || width
                    const x = (canvas.width / 2 - dw / 2) - frameX
                    const y = 100 + height + frameY - (this.isFocused ? 50 : 0)
                    return {
                        sx, sy,
                        width, height,
                        x, y,
                        dw, dh
                    }
                }
            }),
            new MenuButton({
                types: mainButtons.donate, index: 2,
                click() { shell.openExternal("https://ninja-muffin24.itch.io/funkin") },
                getCoords() {
                    const { x: sx, y: sy, width, height, frameX = 0, frameY = 0, frameWidth = 0, frameHeight = 0 } = this.atualFrame
                    const dh = frameHeight || height
                    const dw = frameWidth || width
                    const x = (canvas.width / 2 - width / 2) + frameX / 2
                    const y = 150 + dh * 2 - frameY - (this.isFocused ? 70 : 0)
                    return {
                        sx, sy,
                        width, height,
                        x, y,
                        dw, dh
                    }
                }
            })
        ]
        this.focusedIndex = 0
    }

    render() {
        this.buttons.forEach(button => button.render())
    }

    update() {
        this.buttons.forEach(button => button.update())
    }

    getFocusedButton() {
        return this.buttons[this.focusedIndex]
    }

    reset() {
        this.buttons.forEach(button => button.reset())
    }

    up() {
        const newIndex = this.focusedIndex === 0 ? this.buttons.length - 1 : this.focusedIndex - 1
        this.getFocusedButton().unFocus()
        this.focusedIndex = newIndex
        this.getFocusedButton().focus()
        playAudio(Sounds.scrollMenu)
    }

    down() {
        const newIndex = this.focusedIndex === this.buttons.length - 1 ? 0 : this.focusedIndex + 1
        this.getFocusedButton().unFocus()
        this.focusedIndex = newIndex
        this.getFocusedButton().focus()
        playAudio(Sounds.scrollMenu)
    }

    click() {
        this.getFocusedButton().click()
    }
}