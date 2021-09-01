const path = require('path')
import { musicsFolder, soundsFolder } from '../Paths.js'
import { loadAudio } from './Util.js'

const Music = {
    menuMusic: loadAudio(musicsFolder, "freakyMenu.ogg"),
    Tutorial_Inst: loadAudio(musicsFolder, "Tutorial_Inst.ogg"),
    Bopeebo_Inst: loadAudio(musicsFolder, "Bopeebo_Inst.ogg"),
    Fresh_Inst: loadAudio(musicsFolder , "Fresh_Inst.ogg")
}

const Sounds = {
    selectMenu: loadAudio(soundsFolder, "confirmMenu.ogg"),
    scrollMenu: loadAudio(soundsFolder, "scrollMenu.ogg")
}

export { Music, Sounds }