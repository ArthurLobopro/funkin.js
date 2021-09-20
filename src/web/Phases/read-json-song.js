const path = require('path')

const read = (...pathSegments) => {
    const { song: { song },  sections, notes } = require(path.resolve(...pathSegments))
    return { song, sections, notes }
}

export { read }