const path = require('path')
import { musicsFolder, soundsFolder } from '../Paths.js'
import { loadAudio } from './Util.js'

const Music = {
    menuMusic: loadAudio(musicsFolder, "freakyMenu.ogg"),
}

const Sounds = {
    selectMenu: loadAudio(soundsFolder, "confirmMenu.ogg"),
    scrollMenu: loadAudio(soundsFolder, "scrollMenu.ogg")
}

export { Music, Sounds }