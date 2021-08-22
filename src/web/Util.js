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

export { loadImage, loadAudio }