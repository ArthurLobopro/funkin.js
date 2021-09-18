import { loadImage } from "./Util.js";
import { spritesFolder, imagesFolder } from "../Paths.js";

import { path as logoBumpinPath } from "../../assets/animations/logoBumpin.js"
import { path as gfDanceTitlePath } from "../../assets/animations/gfDanceTitle.js"
import { path as titleEnterPath } from "../../assets/animations/titleEnter.js"
import { path as mainMenuButtonsPath} from "../../assets/animations/main_menu_buttons.js"
import { path as alphabetPath } from "../../assets/animations/alphabet.js"
import { path as GFAssetsPath} from "../../assets/animations/GF-assets.js"
import { path as BOYFRIENDPath} from "../../assets/animations/BOYFRIEND.js"

const Images = {
    backgroudYellow: await loadImage(imagesFolder, "menuBG.png"),
    backgroudBlue: await loadImage(imagesFolder, 'menuBGBlue.png'),
    stageback: await loadImage(imagesFolder, "stageback.png"),
    curtains: await loadImage(imagesFolder, "stagecurtains.png"),
    stagefront: await loadImage(imagesFolder, "stagefront.png")
}

const Sprites = {
    girlFriendTitle: await loadImage(spritesFolder, gfDanceTitlePath),
    logo: await loadImage(spritesFolder, logoBumpinPath),
    titleEnter: await loadImage(spritesFolder, titleEnterPath),
    mainMenuButtons: await loadImage(spritesFolder, mainMenuButtonsPath),
    alphabet: await loadImage(spritesFolder, alphabetPath),
    GFAssets: await loadImage(spritesFolder, GFAssetsPath),
    BOYFRIEND: await loadImage(spritesFolder, BOYFRIENDPath),
}

export { Sprites, Images }