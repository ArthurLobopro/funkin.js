const loadImage = async path => {
    const image = new Image()
    image.src = path
    return new Promise(res => {
        image.onload = () => {
            res(image)
        }
    })
}

export { loadImage }