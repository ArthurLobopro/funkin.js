import { loadImage } from "./Util.js";
import { spritesFolder } from "../Paths.js";

import { path as logoBumpinPath } from "../../assets/animations/logoBumpin.js"
import { path as gfDanceTitlePath } from "../../assets/animations/gfDanceTitle.js"
import { path as titleEnterPath } from "../../assets/animations/titleEnter.js"

const Images = {

}

const Sprites = {
    girlFriendTitle: await loadImage(spritesFolder, gfDanceTitlePath),
    logo: await loadImage(spritesFolder, logoBumpinPath),
    titleEnter: await loadImage(spritesFolder, titleEnterPath)
}

export { Sprites, Images }