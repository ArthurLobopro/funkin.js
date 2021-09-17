import { read } from "./read-json-song.js";
import { appPath, imagesFolder } from "../../Paths.js"
import { loadImage } from "../Util.js";
import { frames as GirlFriendFrames } from "../../../assets/animations/GF-assets.js"
import { types as BoyfriendTypes } from "../../../assets/animations/BOYFRIEND.js"
import { Images, Sprites } from "../Images.js";
import { multframesAnimations } from "../Animation.js";

const images = {
    stageback: Images.stageback,
    curtains: Images.curtains,
    stagefront: Images.stagefront,
    GFAssets: Sprites.GFAssets,
    Boyfriend: Sprites.BOYFRIEND
}

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const girlFriend = new multframesAnimations({
    frames: GirlFriendFrames.dancingBeat,
    types: GirlFriendFrames,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    draw(){
        const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
        const dh = (frameHeight || height) / 1.5
        const dw = (frameWidth || width) / 1.5
        const x = canvas.width / 2 - dw/2
        const y = canvas.height /2 - dh / 2
        this.y = y
        this.x = x
        this.width = dw
        this.height = dh
        ctx.drawImage(
            images.GFAssets, //Imagem
            sx, sy, //Posição no sprite
            width, height, //Largura e altura no sprite
            x, y, //Posição x e y
            dw, dh  //largura e altura na tela
        )
    }
})

const Boyfriend = new multframesAnimations({
    frames: BoyfriendTypes.frames["idle-dance"],
    types: BoyfriendTypes,
    draw(){
        const { x: sx, y: sy, width, height, frameHeight = 0, frameWidth = 0, frameX = 0, frameY = 0 } = this.atualFrame
        const dh = (frameHeight || height) / 1.5
        const dw = (frameWidth || width) / 1.5
        const x = girlFriend.x + girlFriend.width / 2
        const y = girlFriend.y + girlFriend.height / 2
        
        ctx.drawImage(
            images.Boyfriend, //Imagem
            sx, sy, //Posição no sprite
            width, height, //Largura e altura no sprite
            x, y, //Posição x e y
            dw, dh  //largura e altura na tela
        )
    }
})

const Tutorial = {
    renderInterval: null,
    render(){
        const { width, height } = images.stagefront
        ctx.drawImage(
            images.stageback,
            0, 0,
            canvas.width, canvas.height
        )
        
        ctx.drawImage(
            images.stagefront,
            0, 400,
            canvas.width, height
        )
        
        ctx.drawImage(
            images.curtains,
            0, 0,
            canvas.width, canvas.height
        )

        girlFriend.draw()
        Boyfriend.draw()
    },

    init(){
        this.renderInterval = setInterval( this.render, 1000/24);
    }

}


export default Tutorial