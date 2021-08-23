const path = require('path')
import { musicsFolder, soundsFolder } from '../Paths.js'
import { loadAudio } from './Util.js'

const Music = {
    menuMusic: loadAudio(path.resolve(musicsFolder, "freakyMenu.ogg")),
}

const Sounds = {
    selectMenu: loadAudio(path.resolve(soundsFolder, "confirmMenu.ogg"))
}

export { Music, Sounds }