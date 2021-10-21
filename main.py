def on_logo_pressed():
    def on_button_pressed_a():
        def on_gesture_shake():
                pr1 = (randint(1, 6))
                if pr1 == 1:
                    basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    """)
                if pr1 == 1:
                    music.play_melody("C5", 120)
                elif pr1 == 2:
                    basic.show_leds("""
                    . . . . .
                    . . . # .
                    . . . . .
                    . # . . .
                    . . . . .
                    """)
                elif pr1 == 2:
                        music.play_melody("C5 - C5", 120)

                elif pr1 == 3:
                    basic.show_leds("""
                    . . . . .
                    . . . # .
                    . . # . .
                    . # . . .
                    . . . . .
                    """)
                elif pr1 == 3:
                    music.play_melody("C5 - C5 - C5", 120)
                elif pr1 == 4:
                    basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . . . .
                    . # . # .
                    . . . . .
                    """)
                elif pr1 == 4:
                    music.play_melody("C5 - C5 - C5 - C5", 120)
                elif pr1 == 5:
                    basic.show_leds("""
                    . . . . .
                    . # . # .
                    . . # . .
                    . # . # .
                    . . . . .
                    """)
                elif pr1 == 5:
                    music.play_melody("C5 - C5 - C5 - C5 - C5", 120)
                elif pr1 == 6:
                    basic.show_leds("""
                    . . . . .
                    . # # # .
                    . . . . .
                    . # # # .
                    . . . . .
                    """)
                elif pr1 == 6:
                    music.play_melody("C5 - C5 - C5 - C5 - C5 - C5", 120)


                    pr2 = (randint(0, 10))
                    if pr2 == 1:
                        basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """)
                    elif pr2 == 1:
                        music.play_melody("C5", 120)
                    elif pr2 == 2:
                        basic.show_leds("""
                        . . . . .
                        . . . # .
                        . . . . .
                        . # . . .
                        . . . . .
                        """)
                    elif pr2 == 2:
                        music.play_melody("C5 - C5", 120)
                    elif pr2 == 3:
                        basic.show_leds("""
                        . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
                        """)
                    elif pr2 == 3:
                        music.play_melody("C5 - C5 - C5", 120)
                    elif pr2 == 4:
                        basic.show_leds("""
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        """)
                    elif pr2 == 4:
                        music.play_melody("C5 - C5 - C5 - C5", 120)
                    elif pr2 == 5:
                        basic.show_leds("""
                        . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
                        """)
                    elif pr2 == 5:
                        music.play_melody("C5 - C5 - C5 - C5 - C5", 120)
                    elif pr2 == 6:
                        basic.show_leds("""
                        . . . . .
                        . # # # .
                        . . . . .
                        . # # # .
                        . . . . .
                        """)
                    elif pr2 == 6:
                        music.play_melody("C5 - C5 - C5 - C5 - C5 - C5", 120)
                    elif pr2 == 7:
                        basic.show_leds("""
                        . . . . .
                        . # # # .
                        . . # . .
                        . # # # .
                        . . . . .
                        """)
                        music.play_melody("C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                    elif pr2 == 8:
                        basic.show_leds("""
                        . . . . .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
                        """)
                    elif pr2 == 8:
                        music.play_melody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                    elif pr2 == 9:
                        basic.show_leds("""
                        # . # . #
                        . . . . .
                        # . # . #
                        . . . . .
                        # . # . #
                        """)
                    elif pr2 == 9:
                        music.play_melody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
                    elif pr2 == 10:
                        basic.show_leds("""
                        # . . . #
                        . # . # .
                        # . . . #
                        . # . # .
                        # . . . #
                        """)
                    elif pr2 == 10:
                        music.play_melody("C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5 - C5", 120)
        input.on_gesture(Gesture.SHAKE, on_gesture_shake)
    input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)