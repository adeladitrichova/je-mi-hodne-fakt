input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        input.onGesture(Gesture.Shake, function on_gesture_shake() {
            let pr2: number;
            let pr1 = randint(1, 6)
            if (pr1 == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
            }
            
            if (pr1 == 1) {
                music.playMelody("C5", 120)
            } else if (pr1 == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . . . .
                    . # . . .
                    . . . . .
                    `)
            } else if (pr1 == 2) {
                music.playMelody("C5 - C5", 120)
            } else if (pr1 == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . # . .
                    . # . . .
                    . . . . .
                    `)
            } else if (pr1 == 3) {
                music.playMelody("C5 - C5 - C5", 120)
            } else if (pr1 == 4) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    . . . . .
                    `)
            } else if (pr1 == 4) {
                music.playMelody("C5 - C5 - C5 - C5", 120)
            } else if (pr1 == 5) {
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    `)
            } else if (pr1 == 5) {
                music.playMelody("C5 - C5 - C5 - C5 - C5", 120)
            } else if (pr1 == 6) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . . . . .
                    . # # # .
                    . . . . .
                    `)
            } else if (pr1 == 6) {
                music.playMelody("C5 - C5 - C5 - C5 - C5 - C5", 120)
                pr2 = randint(0, 10)
                if (pr2 == 1) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                } else if (pr2 == 1) {
                    music.playMelody("C5", 120)
                } else if (pr2 == 2) {
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . . . .
                        . # . . .
                        . . . . .
                        `)
                } else if (pr2 == 2) {
                    music.playMelody("C5 - C5", 120)
                } else if (pr2 == 3) {
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
                        `)
                } else if (pr2 == 3) {
                    music.playMelody("C5 - C5 - C5", 120)
                } else if (pr2 == 4) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        `)
                } else if (pr2 == 4) {
                    music.playMelody("C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 5) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
                        `)
                } else if (pr2 == 5) {
                    music.playMelody("C5 - C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 6) {
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . . . . .
                        . # # # .
                        . . . . .
                        `)
                } else if (pr2 == 6) {
                    music.playMelody("C5 - C5 - C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 7) {
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . . # . .
                        . # # # .
                        . . . . .
                        `)
                    music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 8) {
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
                        `)
                } else if (pr2 == 8) {
                    music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 9) {
                    basic.showLeds(`
                        # . # . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . # . #
                        `)
                } else if (pr2 == 9) {
                    music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                } else if (pr2 == 10) {
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        # . . . #
                        . # . # .
                        # . . . #
                        `)
                } else if (pr2 == 10) {
                    music.playMelody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                }
                
            }
            
        })
    })
})
