import Screens from "./Screens.js"

// const atualScreen = Screens.Start
// atualScreen.init()
// window.onkeydown = atualScreen.onkeydown

const atualScreen = Screens.Menu
atualScreen.init()
window.onkeydown = atualScreen?.onkeydown || null
