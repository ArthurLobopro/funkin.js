import { read } from "./read-json-song.js";
import { appPath, imagesFolder } from "../../Paths.js"
import { frames as GirlFriendFrames } from "../../../assets/animations/GF-assets.js"
import { types as BoyfriendTypes } from "../../../assets/animations/BOYFRIEND.js"
import { Images, Sprites } from "../Images.js";
import { multframesAnimations } from '../Components/Animation.js';
import { Pause } from "../Screens/Pause.js";
import { ArrowsPainel } from "../Components/Arrows.js";
import { Music } from "../Audio.js";
import { game } from "../Game.js";
import { Boyfriend } from "../Components/Boyfriend.js";
import { Girlfriend } from "../Components/Girlfriend.js";

const images = {
    stageback: Images.stageback,
    curtains: Images.curtains,
    stagefront: Images.stagefront,
    GFAssets: Sprites.GFAssets,
    Boyfriend: Sprites.BOYFRIEND
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const GirlFriend = new Girlfriend()

const BoyFriend = new Boyfriend({ x: GirlFriend.x + GirlFriend.width / 2, y: GirlFriend.y + GirlFriend.height / 2 })

const Tutorial = {
    updateInterval: null,
    renderInterval: null,
    isPaused: false,
    pauseScreen: null,

    ArrowsFrames: new ArrowsPainel(),

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

        GirlFriend.render()
        BoyFriend.render()

        this.ArrowsFrames.render()

    },

    update() {
        GirlFriend.update()
        BoyFriend.update(GirlFriend)
        this.ArrowsFrames.update()
    },

    pause() {
        clearInterval(this.updateInterval)
        clearInterval(this.renderInterval)
        this.isPaused = true
        this.pauseScreen = new Pause({ renderImage: canvas.toDataURL('image/png') })
        console.log("pause");
    },

    init() {
        this.renderInterval = setInterval(() => this.render(), 1000 / 30)
        this.updateInterval = setInterval(() => this.update(), 1000 / 24)
        window.onkeydown = this.onkeydown
        // game.setBackgroudMusic(Music.Tutorial_Inst)
    },

    onkeydown(event) {
        const { key } = event
        buttonsFunctions?.[key]?.()
    }

}

const keyFunctions = {
    down: () => { Tutorial.ArrowsFrames.onClick("right", "down") },
    up: () => { Tutorial.ArrowsFrames.onClick("right", "up") },
    left: () => { Tutorial.ArrowsFrames.onClick("right", "left") },
    right: () => { Tutorial.ArrowsFrames.onClick("right", "right") },
    pause: () => Tutorial.pause()
}

const buttonsFunctions = {
    "s": keyFunctions.down,
    "ArrowDown": keyFunctions.down,
    "a": keyFunctions.left,
    "ArrowLeft": keyFunctions.left,
    "d": keyFunctions.right,
    "ArrowRight": keyFunctions.right,
    "w": keyFunctions.up,
    "ArrowUp": keyFunctions.up,
    "Escape": keyFunctions.pause,
    "Enter": keyFunctions.pause
}


export default Tutorial