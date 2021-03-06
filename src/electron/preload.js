const {contextBridge} = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    const gameScript = document.createElement('script')
    gameScript.src = "../src/web/Game.js"
    gameScript.type = "module"
    document.head.appendChild(gameScript)
    contextBridge.exposeInMainWorld('require', require)
})