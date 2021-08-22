function animationBase({ frames }) {
    this.frames = frames
    this.atualFrameIndex = 0
    this.atualFrame = this.frames[0]
    this.attFrame = function () {
        this.atualFrameIndex = this.atualFrameIndex + 1 === this.frames.length ? 0 : this.atualFrameIndex + 1
        this.atualFrame = this.frames[this.atualFrameIndex]
    }
}

export { animationBase }