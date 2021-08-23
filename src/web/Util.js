const loadImage = async path => {
    const image = new Image()
    image.src = path
    return new Promise(res => {
        image.onload = () => {
            res(image)
        }
    })
}

const loadAudio = path => {
    const audio = new Audio(path)
    return audio
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

export { loadImage, loadAudio, delay, range }