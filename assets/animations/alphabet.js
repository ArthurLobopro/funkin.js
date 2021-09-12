const path = 'alphabet.png'

const upperCase = {
    normal: {
        A: [
            { x: 347, y: 141, width: 45, height: 59 },
            { x: 347, y: 141, width: 45, height: 59 },
            { x: 402, y: 141, width: 45, height: 59 },
            { x: 402, y: 141, width: 45, height: 59 }
        ],
        B: [
            { x: 569, y: 141, width: 38, height: 59 },
            { x: 569, y: 141, width: 38, height: 59 },
            { x: 617, y: 141, width: 38, height: 59 },
            { x: 617, y: 141, width: 38, height: 59 }
        ],
        C: [
            { x: 794, y: 141, width: 45, height: 57 },
            { x: 794, y: 141, width: 45, height: 57 },
            { x: 849, y: 141, width: 45, height: 57 },
            { x: 849, y: 141, width: 45, height: 57 }
        ],
        D: [
            { x: 0, y: 221, width: 48, height: 56 },
            { x: 0, y: 221, width: 48, height: 56 },
            { x: 58, y: 221, width: 48, height: 56 },
            { x: 58, y: 221, width: 48, height: 56 }
        ],
        E: [
            { x: 222, y: 221, width: 34, height: 53 },
            { x: 222, y: 221, width: 34, height: 53 },
            { x: 266, y: 221, width: 34, height: 53 },
            { x: 266, y: 221, width: 34, height: 53 }
        ],
        F: [
            { x: 416, y: 221, width: 36, height: 51 },
            { x: 416, y: 221, width: 36, height: 51 },
            { x: 462, y: 221, width: 36, height: 51 },
            { x: 462, y: 221, width: 36, height: 51 }
        ],
        G: [
            { x: 636, y: 221, width: 43, height: 55 },
            { x: 636, y: 221, width: 43, height: 55 },
            { x: 689, y: 221, width: 43, height: 55 },
            { x: 689, y: 221, width: 43, height: 55 }
        ],
        H: [
            { x: 851, y: 221, width: 32, height: 53 },
            { x: 851, y: 221, width: 32, height: 53 },
            { x: 893, y: 221, width: 32, height: 52, frameX: 0, frameWidth: 32, frameHeight: 53 },
            { x: 893, y: 221, width: 32, height: 52, frameX: 0, frameWidth: 32, frameHeight: 53 }
        ],
        I: [
            { x: 53, y: 301, width: 36, height: 52 },
            { x: 53, y: 301, width: 36, height: 52 },
            { x: 99, y: 301, width: 36, height: 52 },
            { x: 99, y: 301, width: 36, height: 52 }
        ],
        J: [
            { x: 273, y: 301, width: 39, height: 54 },
            { x: 273, y: 301, width: 39, height: 54 },
            { x: 322, y: 301, width: 39, height: 54 },
            { x: 322, y: 301, width: 39, height: 54 }
        ],
        K: [
            { x: 479, y: 301, width: 35, height: 52 },
            { x: 479, y: 301, width: 35, height: 52 },
            { x: 524, y: 301, width: 35, height: 52 },
            { x: 524, y: 301, width: 35, height: 52 }
        ],
        L: [
            { x: 671, y: 301, width: 34, height: 53 },
            { x: 671, y: 301, width: 34, height: 53 },
            { x: 715, y: 301, width: 34, height: 53 },
            { x: 715, y: 301, width: 34, height: 53 }
        ],
        M: [
            { x: 891, y: 301, width: 44, height: 50 },
            { x: 891, y: 301, width: 44, height: 50 },
            { x: 945, y: 301, width: 44, height: 50 },
            { x: 945, y: 301, width: 44, height: 50 }
        ],
        N: [
            { x: 110, y: 381, width: 32, height: 50 },
            { x: 110, y: 381, width: 32, height: 50 },
            { x: 152, y: 381, width: 32, height: 50 },
            { x: 152, y: 381, width: 32, height: 50 }
        ],
        O: [
            { x: 314, y: 381, width: 40, height: 54 },
            { x: 314, y: 381, width: 40, height: 54 },
            { x: 364, y: 381, width: 40, height: 54 },
            { x: 364, y: 381, width: 40, height: 54 }
        ],
        P: [
            { x: 526, y: 381, width: 35, height: 51 },
            { x: 526, y: 381, width: 35, height: 51 },
            { x: 571, y: 381, width: 35, height: 51 },
            { x: 571, y: 381, width: 35, height: 51 }
        ],
        Q: [
            { x: 740, y: 381, width: 41, height: 51 },
            { x: 740, y: 381, width: 41, height: 51 },
            { x: 791, y: 381, width: 41, height: 51 },
            { x: 791, y: 381, width: 41, height: 51 }
        ],
        R: [
            { x: 956, y: 381, width: 40, height: 55 },
            { x: 956, y: 381, width: 40, height: 55 },
            { x: 0, y: 461, width: 40, height: 55 },
            { x: 0, y: 461, width: 40, height: 55 }
        ],
        S: [
            { x: 168, y: 461, width: 38, height: 55 },
            { x: 168, y: 461, width: 38, height: 55 },
            { x: 216, y: 461, width: 38, height: 55 },
            { x: 216, y: 461, width: 38, height: 55 }
        ],
        T: [
            { x: 372, y: 461, width: 42, height: 50 },
            { x: 372, y: 461, width: 42, height: 50 },
            { x: 424, y: 461, width: 42, height: 50 },
            { x: 424, y: 461, width: 42, height: 50 }
        ],
        U: [
            { x: 584, y: 461, width: 38, frameY: 1, height: 49 },
            { x: 584, y: 461, width: 38, frameY: 1, height: 49 },
            { x: 632, y: 461, width: 38, frameY: 1, height: 49 },
            { x: 632, y: 461, width: 38, frameY: 1, height: 49 }
        ],
        V: [
            { x: 808, y: 461, width: 40, frameY: 2, height: 48 },
            { x: 808, y: 461, width: 40, frameY: 2, height: 48 },
            { x: 858, y: 461, width: 40, frameY: 2, height: 48 },
            { x: 858, y: 461, width: 40, frameY: 2, height: 48 }
        ],
        W: [
            { x: 68, y: 537, width: 46, height: 51 },
            { x: 68, y: 537, width: 46, height: 51 },
            { x: 124, y: 537, width: 46, height: 51 },
            { x: 124, y: 537, width: 46, height: 51 }
        ],
        X: [
            { x: 310, y: 537, width: 41, height: 53 },
            { x: 310, y: 537, width: 41, height: 53 },
            { x: 361, y: 537, width: 41, height: 53 },
            { x: 361, y: 537, width: 41, height: 53 }
        ],
        Y: [
            { x: 540, y: 537, width: 42, height: 52 },
            { x: 540, y: 537, width: 42, height: 52 },
            { x: 592, y: 537, width: 42, height: 52 },
            { x: 592, y: 537, width: 42, height: 52 }
        ],
        Z: [
            { x: 768, y: 537, width: 38, frameY: 3, height: 47 },
            { x: 768, y: 537, width: 38, frameY: 3, height: 47 },
            { x: 816, y: 537, width: 38, frameY: 3, height: 47 },
            { x: 816, y: 537, width: 38, frameY: 3, height: 47 }
        ]
    },
    bold: {
        A: [
            { x: 219, y: 141, width: 54, height: 67 },
            { x: 219, y: 141, width: 54, height: 67 },
            { x: 283, y: 141, width: 54, height: 67 },
            { x: 283, y: 141, width: 54, height: 67 }
        ],
        B: [
            { x: 457, y: 141, width: 46, height: 70 },
            { x: 457, y: 141, width: 46, height: 70 },
            { x: 513, y: 141, width: 46, height: 70 },
            { x: 513, y: 141, width: 46, height: 70 }
        ],
        C: [
            { x: 665, y: 141, width: 55, height: 66 },
            { x: 665, y: 141, width: 55, height: 66 },
            { x: 730, y: 141, width: 54, height: 65, frameX: 0, frameWidth: 55, frameHeight: 66 },
            { x: 730, y: 141, width: 54, height: 65, frameX: 0, frameWidth: 55, frameHeight: 66 }
        ],
        D: [
            { x: 904, y: 141, width: 53, height: 67 },
            { x: 904, y: 141, width: 53, height: 67 },
            { x: 967, y: 141, width: 53, height: 67 },
            { x: 967, y: 141, width: 53, height: 67 }
        ],
        E: [
            { x: 116, y: 221, width: 43, height: 66 },
            { x: 116, y: 221, width: 43, height: 66 },
            { x: 169, y: 221, width: 43, height: 66 },
            { x: 169, y: 221, width: 43, height: 66 }
        ],
        F: [
            { x: 310, y: 221, width: 43, height: 67 },
            { x: 310, y: 221, width: 43, height: 67 },
            { x: 363, y: 221, width: 43, height: 67 },
            { x: 363, y: 221, width: 43, height: 67 }
        ],
        G: [
            { x: 508, y: 221, width: 54, height: 70 },
            { x: 508, y: 221, width: 54, height: 70 },
            { x: 572, y: 221, width: 54, height: 70 },
            { x: 572, y: 221, width: 54, height: 70 }
        ],
        H: [
            { x: 742, y: 221, width: 45, height: 66 },
            { x: 742, y: 221, width: 45, height: 66 },
            { x: 797, y: 221, width: 44, height: 66, frameX: 0, frameWidth: 44, frameHeight: 66 },
            { x: 797, y: 221, width: 44, height: 66, frameX: 0, frameWidth: 44, frameHeight: 66 }
        ],
        I: [
            { x: 935, y: 221, width: 43, height: 64 },
            { x: 935, y: 221, width: 43, height: 64 },
            { x: 0, y: 301, width: 43, height: 64 },
            { x: 0, y: 301, width: 43, height: 64 }
        ],
        J: [
            { x: 145, y: 301, width: 54, height: 70 },
            { x: 145, y: 301, width: 54, height: 70 },
            { x: 209, y: 301, width: 54, height: 70 },
            { x: 209, y: 301, width: 54, height: 70 }
        ],
        K: [
            { x: 371, y: 301, width: 44, height: 69 },
            { x: 371, y: 301, width: 44, height: 69 },
            { x: 425, y: 301, width: 44, height: 69 },
            { x: 425, y: 301, width: 44, height: 69 }
        ],
        L: [
            { x: 569, y: 301, width: 41, height: 66 },
            { x: 569, y: 301, width: 41, height: 66 },
            { x: 620, y: 301, width: 41, height: 66 },
            { x: 620, y: 301, width: 41, height: 66 }
        ],
        M: [
            { x: 759, y: 301, width: 56, height: 63 },
            { x: 759, y: 301, width: 56, height: 63 },
            { x: 825, y: 301, width: 56, height: 63 },
            { x: 825, y: 301, width: 56, height: 63 }
        ],
        N: [
            { x: 0, y: 381, width: 45, height: 65 },
            { x: 0, y: 381, width: 45, height: 65 },
            { x: 55, y: 381, width: 45, height: 65 },
            { x: 55, y: 381, width: 45, height: 65 }
        ],
        O: [
            { x: 194, y: 381, width: 50, height: 69 },
            { x: 194, y: 381, width: 50, height: 69 },
            { x: 254, y: 381, width: 50, height: 69 },
            { x: 254, y: 381, width: 50, height: 69 }
        ],
        P: [
            { x: 414, y: 381, width: 46, height: 70 },
            { x: 414, y: 381, width: 46, height: 70 },
            { x: 470, y: 381, width: 46, height: 70 },
            { x: 470, y: 381, width: 46, height: 70 }
        ],
        Q: [
            { x: 616, y: 381, width: 52, height: 67 },
            { x: 616, y: 381, width: 52, height: 67 },
            { x: 678, y: 381, width: 52, height: 67 },
            { x: 678, y: 381, width: 52, height: 67 }
        ],
        R: [
            { x: 842, y: 381, width: 47, height: 66 },
            { x: 842, y: 381, width: 47, height: 66 },
            { x: 899, y: 381, width: 47, height: 66 },
            { x: 899, y: 381, width: 47, height: 66 }
        ],
        S: [
            { x: 50, y: 461, width: 49, height: 66 },
            { x: 50, y: 461, width: 49, height: 66 },
            { x: 109, y: 461, width: 49, height: 66 },
            { x: 109, y: 461, width: 49, height: 66 }
        ],
        T: [
            { x: 264, y: 461, width: 44, height: 64 },
            { x: 264, y: 461, width: 44, height: 64 },
            { x: 318, y: 461, width: 44, height: 64 },
            { x: 318, y: 461, width: 44, height: 64 }
        ],
        U: [
            { x: 476, y: 461, width: 44, height: 59 },
            { x: 476, y: 461, width: 44, height: 59 },
            { x: 530, y: 461, width: 44, height: 59 },
            { x: 530, y: 461, width: 44, height: 59 }
        ],
        V: [
            { x: 680, y: 461, width: 54, height: 66 },
            { x: 680, y: 461, width: 54, height: 66 },
            { x: 744, y: 461, width: 54, height: 66 },
            { x: 744, y: 461, width: 54, height: 66 }
        ],
        W: [
            { x: 908, y: 461, width: 58, height: 63 },
            { x: 908, y: 461, width: 58, height: 63 },
            { x: 0, y: 537, width: 58, height: 63 },
            { x: 0, y: 537, width: 58, height: 63 }
        ],
        X: [
            { x: 180, y: 537, width: 55, height: 67 },
            { x: 180, y: 537, width: 55, height: 67 },
            { x: 245, y: 537, width: 55, height: 67 },
            { x: 245, y: 537, width: 55, height: 67 }
        ],
        Y: [
            { x: 412, y: 537, width: 54, height: 69 },
            { x: 412, y: 537, width: 54, height: 69 },
            { x: 476, y: 537, width: 54, height: 69 },
            { x: 476, y: 537, width: 54, height: 69 }
        ],
        Z: [
            { x: 644, y: 537, width: 52, height: 65 },
            { x: 644, y: 537, width: 52, height: 65 },
            { x: 706, y: 537, width: 52, height: 65 },
            { x: 706, y: 537, width: 52, height: 65 }
        ]
    }
}

const lowerCase = {
    a: [
        { x: 332, y: 616, width: 36, frameY: 12, height: 38 },
        { x: 332, y: 616, width: 36, frameY: 12, height: 38 },
        { x: 378, y: 616, width: 36, frameY: 12, height: 38 },
        { x: 378, y: 616, width: 36, frameY: 12, height: 38 }
    ],
    b: [
        { x: 606, y: 616, width: 31, height: 50 },
        { x: 606, y: 616, width: 31, height: 50 },
        { x: 647, y: 616, width: 31, height: 50 },
        { x: 647, y: 616, width: 31, height: 50 }
    ],
    c: [
        { x: 688, y: 616, width: 33, frameY: 17, height: 33 },
        { x: 688, y: 616, width: 33, frameY: 17, height: 33 },
        { x: 731, y: 616, width: 32, frameY: 17, height: 33, frameX: 0, frameWidth: 33, frameHeight: 33 },
        { x: 731, y: 616, width: 32, frameY: 17, height: 33, frameX: 0, frameWidth: 33, frameHeight: 33 }
    ],
    d: [
        { x: 831, y: 616, width: 32, height: 53 },
        { x: 831, y: 616, width: 32, height: 53 },
        { x: 873, y: 616, width: 32, height: 53 },
        { x: 873, y: 616, width: 32, height: 53 }
    ],
    e: [
        { x: 0, y: 689, width: 33, frameY: 13, height: 37 },
        { x: 0, y: 689, width: 33, frameY: 13, height: 37 },
        { x: 43, y: 689, width: 33, frameY: 13, height: 37 },
        { x: 43, y: 689, width: 33, frameY: 13, height: 37 }
    ],
    f: [
        { x: 215, y: 689, width: 27, frameY: 2, height: 48 },
        { x: 215, y: 689, width: 27, frameY: 2, height: 48 },
        { x: 252, y: 689, width: 27, frameY: 2, height: 48 },
        { x: 252, y: 689, width: 27, frameY: 2, height: 48 }
    ],
    g: [
        { x: 401, y: 689, width: 33, frameY: 20, height: 41 },
        { x: 401, y: 689, width: 33, frameY: 20, height: 41 },
        { x: 444, y: 689, width: 33, frameY: 20, height: 41 },
        { x: 444, y: 689, width: 33, frameY: 20, height: 41 }
    ],
    h: [
        { x: 487, y: 689, width: 29, frameY: 2, height: 48 },
        { x: 487, y: 689, width: 29, frameY: 2, height: 48 },
        { x: 526, y: 689, width: 29, frameY: 2, height: 48 },
        { x: 526, y: 689, width: 29, frameY: 2, height: 48 }
    ],
    i: [
        { x: 671, y: 689, width: 13, frameY: 8, height: 42 },
        { x: 671, y: 689, width: 13, frameY: 8, height: 42 },
        { x: 694, y: 689, width: 13, frameY: 8, height: 42 },
        { x: 694, y: 689, width: 13, frameY: 8, height: 42 }
    ],
    j: [
        { x: 717, y: 689, width: 28, frameY: 2, height: 48 },
        { x: 717, y: 689, width: 28, frameY: 2, height: 48 },
        { x: 755, y: 689, width: 28, frameY: 2, height: 48 },
        { x: 755, y: 689, width: 28, frameY: 2, height: 48 }
    ],
    k: [
        { x: 793, y: 689, width: 35, frameY: 2, height: 48 },
        { x: 793, y: 689, width: 35, frameY: 2, height: 48 },
        { x: 838, y: 689, width: 35, frameY: 2, height: 48 },
        { x: 838, y: 689, width: 35, frameY: 2, height: 48 }
    ],
    l: [
        { x: 883, y: 689, width: 10, frameY: 2, height: 48 },
        { x: 883, y: 689, width: 10, frameY: 2, height: 48 },
        { x: 903, y: 689, width: 10, frameY: 2, height: 48 },
        { x: 903, y: 689, width: 10, frameY: 2, height: 48 }
    ],
    m: [
        { x: 0, y: 763, width: 41, frameY: 23, height: 27 },
        { x: 0, y: 763, width: 41, frameY: 23, height: 27 },
        { x: 51, y: 763, width: 41, frameY: 23, height: 27 },
        { x: 51, y: 763, width: 41, frameY: 23, height: 27 }
    ],
    n: [
        { x: 190, y: 763, width: 27, frameY: 20, height: 30 },
        { x: 190, y: 763, width: 27, frameY: 20, height: 30 },
        { x: 227, y: 763, width: 27, frameY: 20, height: 30 },
        { x: 227, y: 763, width: 27, frameY: 20, height: 30 }
    ],
    o: [
        { x: 264, y: 763, width: 30, frameY: 18, height: 32 },
        { x: 264, y: 763, width: 30, frameY: 18, height: 32 },
        { x: 304, y: 763, width: 30, frameY: 18, height: 32 },
        { x: 304, y: 763, width: 30, frameY: 18, height: 32 }
    ],
    p: [
        { x: 344, y: 763, width: 28, frameY: 20, height: 43 },
        { x: 344, y: 763, width: 28, frameY: 20, height: 43 },
        { x: 382, y: 763, width: 28, frameY: 20, height: 43 },
        { x: 382, y: 763, width: 28, frameY: 20, height: 43 }
    ],
    q: [
        { x: 468, y: 763, width: 36, frameY: 20, height: 43 },
        { x: 468, y: 763, width: 36, frameY: 20, height: 43 },
        { x: 514, y: 763, width: 36, frameY: 20, height: 43 },
        { x: 514, y: 763, width: 36, frameY: 20, height: 43 }
    ],
    r: [
        { x: 658, y: 763, width: 24, frameY: 21, height: 29 },
        { x: 658, y: 763, width: 24, frameY: 21, height: 29 },
        { x: 692, y: 763, width: 24, frameY: 21, height: 29 },
        { x: 692, y: 763, width: 24, frameY: 21, height: 29 }
    ],
    s: [
        { x: 826, y: 763, width: 27, frameY: 15, height: 35 },
        { x: 826, y: 763, width: 27, frameY: 15, height: 35 },
        { x: 863, y: 763, width: 27, frameY: 15, height: 35 },
        { x: 863, y: 763, width: 27, frameY: 15, height: 35 }
    ],
    t: [
        { x: 982, y: 763, width: 28, frameY: 2, height: 48 },
        { x: 982, y: 763, width: 28, frameY: 2, height: 48 },
        { x: 0, y: 838, width: 28, frameY: 2, height: 48 },
        { x: 0, y: 838, width: 28, frameY: 2, height: 48 }
    ],
    u: [
        { x: 38, y: 838, width: 31, frameY: 17, height: 33 },
        { x: 38, y: 838, width: 31, frameY: 17, height: 33 },
        { x: 79, y: 838, width: 31, frameY: 17, height: 33 },
        { x: 79, y: 838, width: 31, frameY: 17, height: 33 }
    ],
    v: [
        { x: 212, y: 838, width: 32, frameY: 19, height: 31 },
        { x: 212, y: 838, width: 32, frameY: 19, height: 31 },
        { x: 254, y: 838, width: 31, frameY: 19, height: 31, frameX: 0, frameWidth: 32, frameHeight: 31 },
        { x: 254, y: 838, width: 31, frameY: 19, height: 31, frameX: 0, frameWidth: 32, frameHeight: 31 }
    ],
    w: [
        { x: 295, y: 838, width: 42, frameY: 19, height: 31 },
        { x: 295, y: 838, width: 42, frameY: 19, height: 31 },
        { x: 347, y: 838, width: 42, frameY: 19, height: 31 },
        { x: 347, y: 838, width: 42, frameY: 19, height: 31 }
    ],
    x: [
        { x: 399, y: 838, width: 33, frameY: 17, height: 33 },
        { x: 399, y: 838, width: 33, frameY: 17, height: 33 },
        { x: 442, y: 838, width: 33, frameY: 17, height: 33 },
        { x: 442, y: 838, width: 33, frameY: 17, height: 33 }
    ],
    y: [
        { x: 485, y: 838, width: 35, frameY: 20, height: 42 },
        { x: 485, y: 838, width: 35, frameY: 20, height: 42 },
        { x: 530, y: 838, width: 35, frameY: 20, height: 42 },
        { x: 530, y: 838, width: 35, frameY: 20, height: 42 }
    ],
    z: [
        { x: 575, y: 838, width: 38, frameY: 19, height: 31 },
        { x: 575, y: 838, width: 38, frameY: 19, height: 31 },
        { x: 623, y: 838, width: 37, frameY: 19, height: 31, frameX: 0, frameWidth: 38, frameHeight: 31 },
        { x: 623, y: 838, width: 37, frameY: 19, height: 31, frameX: 0, frameWidth: 38, frameHeight: 31 }
    ]
}

const numbers = {
    0: [
        { x: 815, y: 0, width: 34, height: 54, frameX: 0, frameY: 0, frameWidth: 35, frameHeight: 54 },
        { x: 815, y: 0, width: 34, height: 54, frameX: 0, frameY: 0, frameWidth: 35, frameHeight: 54 },
        { x: 859, y: 0, width: 35, height: 54 },
        { x: 859, y: 0, width: 35, height: 54 }
    ],
    1: [
        { x: 904, y: 0, width: 23, height: 53 },
        { x: 904, y: 0, width: 23, height: 53 },
        { x: 937, y: 0, width: 23, height: 53 },
        { x: 937, y: 0, width: 23, height: 53 }
    ],
    2: [
        { x: 970, y: 0, width: 37, height: 52 },
        { x: 970, y: 0, width: 37, height: 52 },
        { x: 0, y: 74, width: 36, height: 52, frameX: 0, frameY: 0, frameWidth: 37, frameHeight: 52 },
        { x: 0, y: 74, width: 36, height: 52, frameX: 0, frameY: 0, frameWidth: 37, frameHeight: 52 }
    ],
    3: [
        { x: 46, y: 74, width: 34, height: 56 },
        { x: 46, y: 74, width: 34, height: 56 },
        { x: 90, y: 74, width: 34, height: 55, frameX: 0, frameY: 0, frameWidth: 34, frameHeight: 56 },
        { x: 90, y: 74, width: 34, height: 55, frameX: 0, frameY: 0, frameWidth: 34, frameHeight: 56 }
    ],
    4: [
        { x: 134, y: 74, width: 35, height: 55 },
        { x: 134, y: 74, width: 35, height: 55 },
        { x: 179, y: 74, width: 35, height: 54, frameX: 0, frameY: 0, frameWidth: 35, frameHeight: 55 },
        { x: 179, y: 74, width: 35, height: 54, frameX: 0, frameY: 0, frameWidth: 35, frameHeight: 55 }
    ],
    5: [
        { x: 224, y: 74, width: 41, height: 53 },
        { x: 224, y: 74, width: 41, height: 53 },
        { x: 275, y: 74, width: 41, height: 53 },
        { x: 275, y: 74, width: 41, height: 53 }
    ],
    6: [
        { x: 326, y: 74, width: 39, height: 54 },
        { x: 326, y: 74, width: 39, height: 54 },
        { x: 375, y: 74, width: 39, height: 54 },
        { x: 375, y: 74, width: 39, height: 54 }
    ],
    7: [
        { x: 424, y: 74, width: 40, height: 49 },
        { x: 424, y: 74, width: 40, height: 49 },
        { x: 474, y: 74, width: 40, height: 49 },
        { x: 474, y: 74, width: 40, height: 49 }
    ],
    8: [
        { x: 524, y: 74, width: 34, height: 56 },
        { x: 524, y: 74, width: 34, height: 56 },
        { x: 568, y: 74, width: 33, height: 56, frameX: 0, frameY: 0, frameWidth: 34, frameHeight: 56 },
        { x: 568, y: 74, width: 33, height: 56, frameX: 0, frameY: 0, frameWidth: 34, frameHeight: 56 }
    ],
    9: [
        { x: 611, y: 74, width: 34, height: 57 },
        { x: 611, y: 74, width: 34, height: 57 },
        { x: 655, y: 74, width: 34, height: 57 },
        { x: 655, y: 74, width: 34, height: 57 }
    ]
}

export { numbers, lowerCase, upperCase, path }