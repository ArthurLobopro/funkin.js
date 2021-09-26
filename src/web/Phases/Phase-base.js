import { Pause } from "../Screens/Pause.js";
import { ArrowsPainel } from "../Components/Arrows.js";
import { Boyfriend } from "../Components/Boyfriend.js";
import { Girlfriend } from "../Components/Girlfriend.js";
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

export class Phase {
    constructor({ renderBackground }){
        this.ArrowsPainel = new ArrowsPainel()
        this.GirlFriend = new Girlfriend()
        this.Boyfriend = new Boyfriend()
        this.renderBackground = renderBackground
        this.pauseScreen = null
    }

    render(){
        this.renderBackground?.()
        this.GirlFriend.render()
        this.Boyfriend.render()
        this.ArrowsPainel.render()
    }

    update(){
        this.ArrowsPainel.update()
        this.GirlFriend.update()
        this.Boyfriend.update(this.GirlFriend)
    }

    pause(){
        const screenshot = canvas.toDataURL("image/png")
        this.pauseScreen = new Pause({
            renderImage: screenshot
        })
    }
}