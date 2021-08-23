const path = require('path')
import { spritesFolder } from '../../src/Paths.js'

const spritePath = path.resolve(spritesFolder, 'main_menu_buttons.png')

const donate = {
    basic: [
        {
            x: 0,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 0,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 0,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 454,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 454,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 454,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 908,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 908,
            y: 0,
            width: 444,
            height: 117
        },
        {
            x: 908,
            y: 0,
            width: 444,
            height: 117
        }
    ],
    focus: [
        {
            x: 1362,
            y: 0,
            width: 590,
            height: 157,
            frameX: 0,
            frameY: -2,
            frameWidth: 590,
            frameHeight: 159
        },
        {
            x: 0,
            y: 167,
            width: 587,
            height: 154,
            frameX: -1,
            frameY: -5,
            frameWidth: 590,
            frameHeight: 159
        },
        {
            x: 597,
            y: 167,
            width: 585,
            height: 155,
            frameX: -3,
            frameY: 0,
            frameWidth: 590,
            frameHeight: 159
        }
    ]
}

const freeplay = {
    basic: [
        {
            x: 1192,
            y: 167,
            width: 484,
            height: 122
        },
        {
            x: 1192,
            y: 167,
            width: 484,
            height: 122
        },
        {
            x: 1192,
            y: 167,
            width: 484,
            height: 122
        },
        {
            x: 0,
            y: 332,
            width: 484,
            height: 122
        },
        {
            x: 0,
            y: 332,
            width: 484,
            height: 122
        },
        {
            x: 0,
            y: 332,
            width: 484,
            height: 122
        },
        {
            x: 494,
            y: 332,
            width: 484,
            height: 122
        },
        {
            x: 494,
            y: 332,
            width: 484,
            height: 122
        },
        {
            x: 494,
            y: 332,
            width: 484,
            height: 122
        }
    ],
    focus: [
        {
            x: 988,
            y: 332,
            width: 627,
            height: 169,
            frameX: 0,
            frameY: 0,
            frameWidth: 635,
            frameHeight: 174
        },
        {
            x: 0,
            y: 511,
            width: 632,
            height: 170,
            frameX: -3,
            frameY: -1,
            frameWidth: 635,
            frameHeight: 174
        },
        {
            x: 642,
            y: 511,
            width: 629,
            height: 173,
            frameX: -4,
            frameY: -1,
            frameWidth: 635,
            frameHeight: 174
        }
    ]
}

const storymode = {
    basic:[
        {
            x: 1237,
            y: 859,
            width: 615,
            height: 122
        },
        {
            x: 1237,
            y: 859,
            width: 615,
            height: 122
        },
        {
            x: 1237,
            y: 859,
            width: 615,
            height: 122
        },
        {
            x: 0,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 0,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 0,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 625,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 625,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 625,
            y: 1032,
            width: 615,
            height: 122
        },
        {
            x: 1250,
            y: 1032,
            width: 796,
            height: 173,
            frameX: 0,
            frameY: -3,
            frameWidth: 796,
            frameHeight: 181
        }
    ],
    focus:[
        {
            x: 1250,
            y: 1032,
            width: 796,
            height: 173,
            frameX: 0,
            frameY: -3,
            frameWidth: 796,
            frameHeight: 181
        },
        {
            x: 0,
            y: 1215,
            width: 794,
            height: 174,
            frameX: -2,
            frameY: -2,
            frameWidth: 796,
            frameHeight: 181
        },
        {
            x: 804,
            y: 1215,
            width: 794,
            height: 181,
            frameX: 0,
            frameY: 0,
            frameWidth: 796,
            frameHeight: 181
        }
    ]
}

export { spritePath as path, donate, freeplay, storymode }