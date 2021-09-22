const game = document.querySelector('canvas')

function resizeCanvas() {
    const windowWidth = window.innerWidth
    const gameWidth = game.width

    const windowHeight = window.innerHeight
    const gameHeight = game.height

    const divWidth = windowWidth / gameWidth
    const divHeight = windowHeight / gameHeight

    if (divWidth < divHeight) {
        game.style.width = `${windowWidth}px`
        game.style.height = "auto"
    } else {
        game.style.width = "auto"
        game.style.height = `${windowHeight}px`
    }

    console.log("Resize");
}

window.onresize = () => resizeCanvas()

window.addEventListener( "DOMContentLoaded", resizeCanvas)