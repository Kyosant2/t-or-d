input.onButtonPressed(Button.A, function () {
    TruthORDare = randint(0, 1)
    if (TruthORDare == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    arrow = randint(0, 3)
    if (arrow == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
let arrow = 0
let TruthORDare = 0
basic.showString(" TRUTH OR DARE... ")
music.playTone(131, music.beat(BeatFraction.Whole))
