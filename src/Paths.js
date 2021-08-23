const { ipcRenderer } = require('electron')
const path = require('path')

const appPath = ipcRenderer.sendSync('request-app-path')
const spritesFolder = path.resolve(appPath, "assets", "sprites")
const musicsFolder = path.resolve(appPath, "assets/music")
const soundsFolder = path.resolve(appPath, "assets/sounds")
const imagesFolder = path.resolve(appPath, "assets/images")


export { appPath, spritesFolder, musicsFolder, soundsFolder, imagesFolder }