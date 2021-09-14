import { BoldText } from "./Text.js";
import { game } from "../Game.js";

class BoldButton extends BoldText {
    music = null

    click(){}
    
    constructor({ text, x, y, focused = false, click, ...atributes }) {
        super(text, x, y, !focused)
        Object.entries(atributes).forEach( ([key, value]) => {
            this[key] = value
        })
        this.isFocused = focused
        if(typeof click !== 'function'){
            throw new Error("click is not a function")
        }
        this.click = click
    }
    focus() {
        if (this.isFocused)
            return

        this.isFocused = true
        this.transparency = false
        this.play()
    }
    unFocus() {
        if (!this.isFocused)
            return

        this.isFocused = false
        this.transparency = true
        this.pause()
    }
    play(){
        if(this.music){
            // this.music.currentTime = 0
            // this.music.loop = true
            // this.music.play()
            game.setBackgroudMusic(this.music)
        }
    }
    pause(){
        this.music?.pause()
    }
}

export { BoldButton }