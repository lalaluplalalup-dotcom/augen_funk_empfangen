radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
radio.setGroup(1)
