const { ipcRenderer } = require('electron')
const path = require('path')

const appPath = ipcRenderer.sendSync('request-app-path')
const spritesFolder = path.resolve(appPath, "assets", "sprites")


export { appPath, spritesFolder }