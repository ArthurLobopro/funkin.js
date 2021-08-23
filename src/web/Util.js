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
    return new Promise( res => {
        setTimeout(() => {
            res(true)
        }, time);
    })
}

export { loadImage, loadAudio, delay }