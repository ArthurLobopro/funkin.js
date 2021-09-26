import { Pause } from "../Screens/Pause.js";
import { ArrowsPainel } from "../Components/Arrows.js";
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class Phase {
    pauseScreen
    ArrowsPainel

    constructor({ renderBackground }){
        this.ArrowsPainel = new ArrowsPainel()
        this.renderBackground = renderBackground
    }

    render(){
        this.renderBackground?.()
    }

    pause(){
        const screenshot = canvas.toDataURL("image/png")
        this.pauseScreen = new Pause({
            renderImage: screenshot
        })
    }
}