import { BoldText } from "./Text.js";
import { game } from "../Game.js";

class BoldButton extends BoldText {
    music = null
    constructor({ text, x, y, focused = false, ...atributes }) {
        super(text, x, y, !focused)
        Object.entries(atributes).forEach( ([key, value]) => {
            this[key] = value
        })
        this.isFocused = focused
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