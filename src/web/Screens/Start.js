const { ipcRenderer } = require('electron')
import { loadImage } from '../Util.js'
import * as logoAnimation from "../../../assets/animations/logoBumpin.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const appPath = ipcRenderer.sendSync('request-app-path')

// const girlFriendAnimationPath = path.join(appPath, 'assets/animations/gfPixel.js')
// const girlFriendAnimation = require()


const images = {
    // girlFriend: await loadImage(girlFriendAnimation.path),
    logo: await loadImage(logoAnimation.path)
}

const Start = {
    // girlFriend: {
    //     ...girlFriendAnimation,
    //     atualFrame: girlFriendAnimation.frames[0],
    //     atualFrameIndex: 0,
    //     attFrame() {
    //         if (this.atualFrameIndex + 1 === this.frames.length) {
    //             this.atualFrameIndex = 0
    //             this.atualFrame = this.frames[0]
    //         }

    //         this.atualFrameIndex++
    //         this.atualFrame = this.frames[this.atualFrameIndex]
    //     },
    //     draw() {
    //         const { x: sx, y: sy, width, height } = this.atualFrame
    //         ctx.drawImage(
    //             images.girlFriend,
    //             sx, sy,
    //             width, height,
    //             // canvas.width - width, canvas.height - height,
    //             0,0,
    //             width, height
    //         )
    //     }

    // },
    logo: {
        ...logoAnimation,
        atualFrame: logoAnimation.frames[0],
        atualFrameIndex: 0,
        attFrame() {
            if (this.atualFrameIndex + 1 === this.frames.length) {
                this.atualFrameIndex = 0
                this.atualFrame = this.frames[0]
            }

            this.atualFrameIndex++
            this.atualFrame = this.frames[this.atualFrameIndex]
        },
        draw() {
            const { x: sx, y: sy, width, height } = this.atualFrame
            ctx.drawImage(
                images.logo,
                sx, sy,
                width, height,
                // canvas.width - width, canvas.height - height,
                -100,-75,
                width / 1.5, height / 1.5
            )
        }
    },
    
    render() {
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        this.logo.draw()
        // this.girlFriend.draw()
    },
}

export { Start }