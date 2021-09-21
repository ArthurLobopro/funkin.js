import { ButtonsList } from "../Animations/ButtonsList.js";
import { BoldButton } from "../Animations/Buttons.js";
import { clearCanvas } from "../Util.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class Pause {
    renderImage = new Image()
    playCb = null
    restartCb = null
    exitCb = null

    renderInterval = null
    updateInterval = null

    buttons = []

    buttonsFunctions = {
        "s": () => this.buttons.down(),
        "ArrowDown": () => this.buttons.down(),
        "w": () => this.buttons.up(),
        "ArrowUp": () => this.buttons.up(),
        "Escape": this.exit
    }

    constructor({ renderImage, playCb, restartCb, exitCb }){
        this.renderImage.src = renderImage
        this.playCb = playCb
        this.restartCb = restartCb
        this.exitCb = exitCb  

        this.buttons = new ButtonsList([
            new BoldButton({ text: "Resume", focused: true, x: 50, click(){ this.play() } }),
            new BoldButton({ text: "Restart Song", x: 50, click: this.restart }),
            new BoldButton({ text: "Exit to Menu", x: 50, click: this.exit })
        ])

        this.updateInterval = setInterval(() => this.update() , 1000 / 24);
        this.renderInterval = setInterval(() => this.render() , 1000 / 30);

        window.onkeydown = event => this.onkeydown(event)
    }

    play(){
        this.playCb?.()
    }

    restart(){
        this.restartCb?.()
    }

    exit(){
        this.exitCb?.()
        clearInterval(this.renderInterval)
        clearInterval(this.updateInterval)
    }

    update(){
        this.buttons.updateFrames()
    }

    render(){
        clearCanvas()
        ctx.drawImage(
            this.renderImage, 0 ,0
        )
        ctx.save()
        ctx.globalAlpha = 0.3
        ctx.fillStyle = "#000"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.restore()
        this.buttons.render()
    }

    onkeydown(event) {
        const { key } = event
        this.buttonsFunctions?.[key]?.()
    }
}