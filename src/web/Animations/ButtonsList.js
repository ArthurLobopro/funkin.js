import { range,playAudio } from "../Util.js"
import { Sounds } from "../Audio.js"
const canvas = document.querySelector('canvas')



class ButtonsList {

    buttons = []
    focusedIndex = 0
    centerY = 0
    spaceament = 90
    mediumHeight = 67.5

    constructor(buttons) {
        buttons.forEach(button => this.buttons.push(button))
        const haveFocused = this.buttons.some(button => button.isFocused)
        if (haveFocused) {
            this.focusedIndex = this.buttons.findIndex(button => button.isFocused)
        } else {
            this.buttons[0].focus()
        }
        this.updateCenterY()

        for (const index in range(this.focusedIndex , this.buttons.length)) {
            this.buttons[index].y = 
                this.centerY + (this.mediumHeight * index + this.spaceament * index)
        }

    }

    updateCenterY() {
        this.centerY = canvas.height / 2 - this.mediumHeight / 2
    }

    down() {
        const index = this.focusedIndex
        const newIndex = index + 1 === this.buttons.length ? 0 : index + 1
        this.buttons[index].unFocus()
        this.buttons[newIndex].focus()
        this.focusedIndex = newIndex

        playAudio(Sounds.scrollMenu)
    }
    up() {
        const index = this.focusedIndex
        const newIndex = index - 1 === -1 ? this.buttons.length - 1 : index - 1
        this.buttons[index].unFocus()
        this.buttons[newIndex].focus()
        this.focusedIndex = newIndex
        playAudio(Sounds.scrollMenu)
    }

    render() {
        this.buttons.forEach(button => button.render())
    }

    updateFrames() {
        this.buttons.forEach(button => {
            button.update()
        })
    }
}

export { ButtonsList }