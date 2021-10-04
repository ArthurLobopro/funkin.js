import { range, delay, playAudio } from '../Util.js'
import { transition } from '../Components/Animation.js'
import { Sounds } from "../Audio.js"
import { Start } from './Start.js'
import { FreePlay } from './FreePlay.js'
import { Images, Sprites } from '../Images.js'
import { MenuButtonsList } from '../Components/MenuButton.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
    backgroudYellow: Images.backgroudYellow,
    buttons: Sprites.mainMenuButtons
}

const functions = {
    down() {
        Menu.buttons.down()
        moveBackground(Menu.buttons.focusedIndex)
    },
    up() {
        Menu.buttons.up()
        moveBackground(Menu.buttons.focusedIndex)
    },
    click() {
        Menu.buttons.click()
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
    buttons: new MenuButtonsList(),
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
        this.buttons.render()
    },
    update() {
        this.buttons.update()
    },
    init() {
        this.renderInterval = setInterval(() => Menu.render() , 1000 / 60);
        this.updateInterval = setInterval(() => Menu.update(), 1000 / 18)
        window.onkeydown = this.onkeydown
    },
    reset() {
        clearInterval(this.renderInterval)
        clearInterval(this.updateInterval)
        this.buttons.reset()
    },
    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }
}

export { Menu }