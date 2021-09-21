import Screens from "./Screens.js"
import Tutorial from "./Phases/Tutorial.js"

const game = {
    haveMusicPlaying: false,
    backgroundMusic: null,
    setBackgroudMusic(music){
        this.backgroundMusic?.pause()
        this.backgroundMusic = music
        this.backgroundMusic.loop = true
        this.backgroundMusic.currentTime = 0
        this.backgroundMusic.play()
        this.haveMusicPlaying = true
    }
}

const atualScreen = Screens.Start
atualScreen.init()


// const atualScreen = Screens.Menu
// atualScreen.init()

export { game }