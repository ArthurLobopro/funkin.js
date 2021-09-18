const path = require('path')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const loadImage = async (...pathSegments) => {
    const image = new Image()
    image.src = path.resolve(...pathSegments)
    return new Promise(res => {
        image.onload = () => {
            res(image)
        }
    })
}

const loadAudio = (...pathSegments) => {
    const audio = new Audio(path.resolve(...pathSegments))
    return audio
}

const playAudio = audio => {
    audio.currentTime = 0
    audio.play()
}

function delay(time) {
    return new Promise(res => {
        setTimeout(() => {
            res(true)
        }, time);
    })
}

const range = (min, max, pass = 1) => {
    let array = []
    if (min > max) {
        pass = pass > 0 ? pass *= -1 : pass
        for (let i = min; i > max; i += pass) { array.push(i) }
    }else{
        for (let i = min; i < max; i += pass) { array.push(i) }
    }
    
    return array
}

const clearCanvas = () => {
    ctx.clearRect(0 , 0, canvas.width, canvas.height)
}

export { loadImage, loadAudio, playAudio, delay, range, clearCanvas }