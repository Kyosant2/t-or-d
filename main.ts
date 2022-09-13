input.onButtonPressed(Button.A, function () {
    TruthORDare = randint(0, 1)
    if (TruthORDare == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.AB, function () {
    arrow = randint(0, 3)
    if (TruthORDare == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (TruthORDare == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (TruthORDare == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    }
})
let arrow = 0
let TruthORDare = 0
basic.showString("WELCOME TO TRUTH OR DARE... ")
