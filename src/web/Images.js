import { loadImage } from "./Util.js";
import { spritesFolder, imagesFolder } from "../Paths.js";

import { path as logoBumpinPath } from "../../assets/animations/logoBumpin.js"
import { path as gfDanceTitlePath } from "../../assets/animations/gfDanceTitle.js"
import { path as titleEnterPath } from "../../assets/animations/titleEnter.js"
import { path as mainMenuButtonsPath} from "../../assets/animations/main_menu_buttons.js"

const Images = {
    backgroudYellow: await loadImage(imagesFolder, "menuBG.png"),
    backgroudBlue: await loadImage(imagesFolder, 'menuBGBlue.png'),
}

const Sprites = {
    girlFriendTitle: await loadImage(spritesFolder, gfDanceTitlePath),
    logo: await loadImage(spritesFolder, logoBumpinPath),
    titleEnter: await loadImage(spritesFolder, titleEnterPath),
    mainMenuButtons: await loadImage(spritesFolder, mainMenuButtonsPath)
}

export { Sprites, Images }