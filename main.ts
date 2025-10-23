namespace SpriteKind {
    export const red = SpriteKind.create()
    export const yellow = SpriteKind.create()
    export const rthrow = SpriteKind.create()
    export const blue = SpriteKind.create()
    export const ythrow = SpriteKind.create()
    export const bthrow = SpriteKind.create()
    export const selector = SpriteKind.create()
    export const bulborb = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const Treasure2 = SpriteKind.create()
    export const treasure3 = SpriteKind.create()
    export const weak = SpriteKind.create()
    export const thing = SpriteKind.create()
}
namespace StatusBarKind {
    export const minibhealth = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectornum == 1) {
        selectornum = 2
        selector2.setImage(assets.image`myImage7`)
    } else {
        if (selectornum == 3) {
            selectornum = 1
            selector2.setImage(img`
                ..........ffffffffffffffff..........
                .........ffffffffffffffffff.........
                ........f2f88888882777778f2f........
                .......f22f88888822777778f22f.......
                ......f222f88888222277788f222f......
                .....f2222f88882222228888f2222f.....
                .....f2222f88822222222888f2222f.....
                ....f22222f88822222222888f22222f....
                ....f22222f811ff2222ff118f22222f....
                ...f222222f811ff2222ff118f222222f...
                ...f222222f88822222222888f222222f...
                ..f2222222f88822222222888f2222222f..
                ..f2222222f88822222222888f2222222f..
                .f22222222f88822222222888f22222222f.
                .f22222222f88882222228888f22222222f.
                f222222222f88888222288888f222222222f
                f222222222ffffffffffffffff222222222f
                f2222222222ffffffffffffff2222222222f
                .ffffffffff.....ffff.....ffffffffff.
                ................ffff................
                ................ffff................
                ...............ffffff...............
                ...............fccccf...............
                ....................................
                `)
        } else {
            if (selectornum == 2) {
                selectornum = 3
                selector2.setImage(assets.image`myImage8`)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile49`, function (sprite, location) {
    ydeath = 1
    sprites.destroy(yellow_throw)
    ydeath = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectornum == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.rthrow)
        info.player1.changeScoreBy(redno)
        redno = 0
        miniattackr = 0
    }
    if (selectornum == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.ythrow)
        info.player3.changeScoreBy(yellowno)
        yellowno = 0
        miniattacky = 0
    }
    if (selectornum == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.bthrow)
        info.player2.changeScoreBy(blueno)
        blueno = 0
        miniattackb = 0
    }
})
scene.onOverlapTile(SpriteKind.rthrow, assets.tile`myTile33`, function (sprite, location) {
    rdeath = 1
    sprites.destroy(redthrow)
    rdeath = 0
})
scene.onHitWall(SpriteKind.bulborb, function (sprite, location) {
    if (EmperorBoi.isHittingTile(CollisionDirection.Left)) {
        EmperorBoi.setVelocity(20, 0)
        animation.runImageAnimation(
        EmperorBoi,
        assets.animation`myAnim1`,
        400,
        true
        )
        bulbdirection = 2
    } else {
        if (EmperorBoi.isHittingTile(CollisionDirection.Right)) {
            EmperorBoi.setVelocity(-20, 0)
            animation.runImageAnimation(
            EmperorBoi,
            assets.animation`myAnim4`,
            400,
            true
            )
            bulbdirection = 1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    controller.moveSprite(olimar, 0, 0)
})
info.player4.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.bthrow, SpriteKind.bulborb, function (sprite, otherSprite) {
    blue_throw.follow(EmperorBoi)
    if (notweak == 0) {
        timer.throttle("baction", 500, function () {
            minibbar.value += (miniattackb - 1) * 3
        })
        if (wheak == 0) {
            bulbyattack = 1
        }
    } else {
        if (wheak == 1) {
            timer.throttle("baction", 500, function () {
                minibbar.value += (miniattackb - 1) * 3
            })
        } else {
            timer.throttle("baction", 1000, function () {
                immune = sprites.create(img`
                    1 1 1 1 1 . 1 1 1 1 1 . 1 1 1 1 1 . 1 . . . 1 . 1 1 . . 1 . 1 1 1 1 1 
                    . . 1 . . . 1 . 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . 1 1 . . 1 . 1 . . . . 
                    . . 1 . . . 1 . 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . 1 . 1 . 1 . 1 . . . . 
                    . . 1 . . . 1 . 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . 1 . 1 . 1 . 1 1 1 1 1 
                    . . 1 . . . 1 . 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . 1 . . 1 1 . 1 . . . . 
                    . . 1 . . . 1 . 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . 1 . . 1 1 . 1 . . . . 
                    1 1 1 1 1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 1 1 1 1 . 1 . . . 1 . 1 1 1 1 1 
                    `, SpriteKind.thing)
                immune.setPosition(EmperorBoi.x - 30, EmperorBoi.y)
                immune.setVelocity(randint(-50, 20), randint(-50, 50))
                timer.after(967, function () {
                    sprites.destroy(immune)
                })
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure3, function (sprite, otherSprite) {
    timer.throttle("libraction", 500, function () {
        if (libra.overlapsWith(olimar)) {
            libra.startEffect(effects.disintegrate, 500)
            libra.follow(selector2, 40)
            libra.ay = -200
            for (let index = 0; index < 5; index++) {
                pause(100)
                libra.changeScale(-0.15, ScaleAnchor.Middle)
            }
            timer.after(500, function () {
                sprites.destroy(libra)
                info.player4.changeScoreBy(200)
            })
        }
    })
})
scene.onOverlapTile(SpriteKind.bthrow, assets.tile`myTile50`, function (sprite, location) {
    bdeath = 1
    sprites.destroy(blue_throw)
    bdeath = 0
})
scene.onHitWall(SpriteKind.rthrow, function (sprite, location) {
    timer.background(function () {
        if (redthrow.isHittingTile(CollisionDirection.Bottom)) {
            if (redthrow.vx > 0) {
                redthrow.setVelocity(50, 0)
            } else {
                redthrow.setVelocity(-50, 0)
            }
        }
    })
    if (redthrow.isHittingTile(CollisionDirection.Right)) {
        redthrow.setVelocity(-50, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        direction = 1
    } else {
        animation.runImageAnimation(
        olimar,
        [img`
            . . . . . . 9 9 e 9 9 . . . . . 
            . . . . . 9 9 9 9 e 9 9 . . . . 
            . . . . 9 9 9 d d d d 9 9 . . . 
            . . . 9 9 9 d f f d d d 9 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 9 9 d d d d d d d 9 . . 
            . . . . 9 9 2 d d d d d 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . 5 5 5 4 . . . . . 
            . . . . . . . 2 2 2 4 . . . . . 
            . . . . . . . 5 2 2 5 4 . . . . 
            . . . . . . . 5 2 5 5 4 . . . . 
            . . . . . . . 5 5 5 5 . . . . . 
            . . . . . . . 5 5 5 2 . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            `,img`
            . . . . . . 9 9 e 9 9 . . . . . 
            . . . . . 9 9 9 9 e 9 9 . . . . 
            . . . . 9 9 9 d d d d 9 9 . . . 
            . . . 9 9 9 d f f d d d 9 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 9 9 d d d d d d d 9 . . 
            . . . . 9 9 2 d d d d d 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . 5 5 5 4 . . . . . 
            . . . . 2 . . 2 2 2 4 . . . . . 
            . . . . 2 5 5 5 2 2 5 4 . . . . 
            . . . . 2 5 5 2 5 5 5 4 . . . . 
            . . . . 2 5 5 5 5 5 5 5 2 . . . 
            . . . . . . . . . . 5 2 . . . . 
            . . . . . . . . . . 2 2 . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 9 e 9 9 . . . . . 
            . . . . . 9 9 9 9 e 9 9 . . . . 
            . . . . 9 9 9 d d d d 9 9 . . . 
            . . . 9 9 9 d f f d d d 9 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 3 3 3 d d d d d d 9 . . 
            . . . 9 9 9 d d d d d d d 9 . . 
            . . . . 9 9 2 d d d d d 9 . . . 
            . . . . . 9 9 9 9 9 9 9 . . . . 
            . . . . . . . 5 5 5 4 . . . . . 
            . . . . . . . 2 2 2 5 4 4 4 . . 
            . . . . . . 5 5 2 2 5 5 5 2 . . 
            . . . . . . 5 5 5 2 5 5 5 2 . . 
            . . . . . . 5 5 5 . 5 5 5 2 . . 
            . . . . . 2 2 2 2 . . . . 2 . . 
            `],
        150,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile50`, function (sprite, location) {
    ydeath = 1
    sprites.destroy(yellow_throw)
    ydeath = 0
})
sprites.onDestroyed(SpriteKind.rthrow, function (sprite) {
    if (!(rdeath == 1)) {
        redno += -1
        info.player1.changeScoreBy(1)
    } else {
        redno = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, olimar)
    olimar.setImage(img`
        . . . . 9 9 9 e 9 9 9 9 . . . . 
        . . . 9 9 9 e 9 9 9 9 9 9 . . . 
        . . . 9 9 d d d d 9 9 9 9 . . . 
        . . 9 d d d d d d d 9 9 9 9 . . 
        . . 9 d d f f d d f f 9 9 9 . . 
        . . 9 d d d d d d d 3 3 3 9 . . 
        . . 9 9 d d d d d 3 3 3 3 9 . . 
        . . 9 9 d d d d d d 3 3 9 9 . . 
        . . . 9 9 9 d 2 d d 9 9 9 . . . 
        . . . . 5 5 5 b b 5 5 5 . . . . 
        . . 2 2 5 5 5 5 5 5 5 5 2 2 . . 
        . 2 2 2 . 5 5 5 5 5 5 . 2 2 2 . 
        . . 2 . . 5 5 5 5 5 5 . . 2 . . 
        . . . . . 5 5 . . 5 5 . . . . . 
        . . . . 5 5 5 . . 5 5 5 . . . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, olimar)
    olimar.setImage(img`
        . . . . 9 9 9 e 9 9 9 9 . . . . 
        . . . 9 9 9 e 9 9 9 9 9 9 . . . 
        . . . 9 9 d d d d 9 9 9 9 . . . 
        . . 9 d d d d d d d 9 9 9 9 . . 
        . . 9 d d f f d d f f 9 9 9 . . 
        . . 9 d d d d d d d 3 3 3 9 . . 
        . . 9 9 d d d d d 3 3 3 3 9 . . 
        . . 9 9 d d d d d d 3 3 9 9 . . 
        . . . 9 9 9 d 2 d d 9 9 9 . . . 
        . . . . 5 5 5 b b 5 5 5 . . . . 
        . . 2 2 5 5 5 5 5 5 5 5 2 2 . . 
        . 2 2 2 . 5 5 5 5 5 5 . 2 2 2 . 
        . . 2 . . 5 5 5 5 5 5 . . 2 . . 
        . . . . . 5 5 . . 5 5 . . . . . 
        . . . . 5 5 5 . . 5 5 5 . . . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.treasure3, assets.tile`myTile47`, function (sprite, location) {
    libra.setVelocity(-30, 0)
})
scene.onHitWall(SpriteKind.bthrow, function (sprite, location) {
    timer.background(function () {
        if (blue_throw.isHittingTile(CollisionDirection.Bottom)) {
            if (blue_throw.vx > 0) {
                blue_throw.setVelocity(50, 0)
            } else {
                blue_throw.setVelocity(-50, 0)
            }
        }
    })
    if (blue_throw.isHittingTile(CollisionDirection.Right)) {
        blue_throw.setVelocity(-50, 0)
    }
})
sprites.onDestroyed(SpriteKind.bthrow, function (sprite) {
    if (!(bdeath == 1)) {
        blueno += -1
        info.player2.changeScoreBy(1)
    } else {
        blueno = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (tip == 1) {
        game.showLongText("Wait until your first Pikmin is doing a task to throw your second one. ", DialogLayout.Bottom)
        tip = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        direction = 2
    } else {
        animation.runImageAnimation(
        olimar,
        [img`
            . . . . . 9 9 e 9 9 . . . . . . 
            . . . . 9 9 e 9 9 9 9 . . . . . 
            . . . 9 9 d d d d 9 9 9 . . . . 
            . . 9 9 d d d f f d 9 9 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d d 9 9 9 . . . 
            . . . 9 d d d d d 2 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 4 5 5 5 . . . . . . . 
            . . . . . 4 2 2 2 . . . . . . . 
            . . . . 4 5 2 2 5 . . . . . . . 
            . . . . 4 5 5 2 5 . . . . . . . 
            . . . . . 5 5 5 5 . . . . . . . 
            . . . . . 2 5 5 5 . . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            `,img`
            . . . . . 9 9 e 9 9 . . . . . . 
            . . . . 9 9 e 9 9 9 9 . . . . . 
            . . . 9 9 d d d d 9 9 9 . . . . 
            . . 9 9 d d d f f d 9 9 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d d 9 9 9 . . . 
            . . . 9 d d d d d 2 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 4 5 5 5 . . . . . . . 
            . . . . . 4 2 2 2 . . 2 . . . . 
            . . . . 4 5 2 2 5 5 5 2 . . . . 
            . . . . 4 5 5 5 2 5 5 2 . . . . 
            . . . 2 5 5 5 5 5 5 5 2 . . . . 
            . . . . 2 5 . . . . . . . . . . 
            . . . . 2 2 . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 e 9 9 . . . . . . 
            . . . . 9 9 e 9 9 9 9 . . . . . 
            . . . 9 9 d d d d 9 9 9 . . . . 
            . . 9 9 d d d f f d 9 9 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d 3 3 3 9 . . . 
            . . 9 d d d d d d d 9 9 9 . . . 
            . . . 9 d d d d d 2 9 9 . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . . 4 5 5 5 . . . . . . . 
            . . 4 4 4 5 2 2 2 . . . . . . . 
            . . 2 5 5 5 2 2 5 5 . . . . . . 
            . . 2 5 5 5 2 5 5 5 . . . . . . 
            . . 2 5 5 5 . 5 5 5 . . . . . . 
            . . 2 . . . . 2 2 2 2 . . . . . 
            `],
        150,
        true
        )
    }
})
scene.onHitWall(SpriteKind.treasure3, function (sprite, location) {
    if (libra.y > 200) {
        if (!(libra.overlapsWith(olimar))) {
            if (!(libra.tileKindAt(TileDirection.Center, assets.tile`myTile47`))) {
                libra.follow(olimar, 30)
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(olimar, 100, 0)
    timer.throttle("traction", 500, function () {
        timer.background(function () {
            if (direction == 2) {
                animation.runImageAnimation(
                olimar,
                assets.animation`myAnim`,
                25,
                false
                )
                timer.background(function () {
                    timer.after(200, function () {
                        olimar.setImage(img`
                            . . . . 9 9 9 e 9 9 9 9 . . . . 
                            . . . 9 9 9 e 9 9 9 9 9 9 . . . 
                            . . . 9 9 d d d d 9 9 9 9 . . . 
                            . . 9 d d d d d d d 9 9 9 9 . . 
                            . . 9 d d f f d d f f 9 9 9 . . 
                            . . 9 d d d d d d d 3 3 3 9 . . 
                            . . 9 9 d d d d d 3 3 3 3 9 . . 
                            . . 9 9 d d d d d d 3 3 9 9 . . 
                            . . . 9 9 9 d 2 d d 9 9 9 . . . 
                            . . . . 5 5 5 b b 5 5 5 . . . . 
                            . . 2 2 5 5 5 5 5 5 5 5 2 2 . . 
                            . 2 2 2 . 5 5 5 5 5 5 . 2 2 2 . 
                            . . 2 . . 5 5 5 5 5 5 . . 2 . . 
                            . . . . . 5 5 . . 5 5 . . . . . 
                            . . . . 5 5 5 . . 5 5 5 . . . . 
                            . . . . 2 2 2 . . 2 2 2 . . . . 
                            `)
                    })
                })
                if (selectornum == 1) {
                    if (info.player1.score() > 0) {
                        if (redthrow.overlapsWith(EmperorBoi)) {
                            miniattackr += -1
                        }
                        redthrow = sprites.create(img`
                            . . . . . . . . . . . . 7 7 . . 
                            . . . . . . . . . 2 2 7 7 7 7 . 
                            . . . . . . . . 2 . . . 7 7 . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . . 1 f 2 2 f 1 . . . . . 
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . 2 2 2 2 2 2 . . . . . 
                            . . . . 2 . 2 2 2 2 . 2 . . . . 
                            . . . . 2 . 2 2 2 2 . 2 . . . . 
                            . . . . . . 2 2 2 2 . . . . . . 
                            . . . . . . 2 . . 2 . . . . . . 
                            . . . . . . 2 . . 2 . . . . . . 
                            `, SpriteKind.rthrow)
                        redthrow.ay = 600
                        redthrow.setPosition(olimar.x + 10, olimar.y - 5)
                        redthrow.setVelocity(50, -200)
                        info.player1.changeScoreBy(-1)
                        redno += 1
                    }
                }
                if (selectornum == 2) {
                    if (info.player3.score() > 0) {
                        if (yellow_throw.overlapsWith(EmperorBoi)) {
                            miniattacky += -1
                        }
                        yellow_throw = sprites.create(assets.image`myImage1`, SpriteKind.ythrow)
                        yellow_throw.ay = 400
                        yellow_throw.setPosition(olimar.x + 10, olimar.y - 5)
                        yellow_throw.setVelocity(50, -275)
                        info.player3.changeScoreBy(-1)
                        yellowno += 1
                    }
                }
                if (selectornum == 3) {
                    if (info.player2.score() > 0) {
                        if (blue_throw.overlapsWith(EmperorBoi)) {
                            miniattackb += -1
                        }
                        blue_throw = sprites.create(assets.image`myImage6`, SpriteKind.bthrow)
                        blue_throw.ay = 600
                        blue_throw.setPosition(olimar.x + 10, olimar.y - 5)
                        blue_throw.setVelocity(50, -200)
                        info.player2.changeScoreBy(-1)
                        blueno += 1
                    }
                }
            } else {
                if (direction == 1) {
                    animation.runImageAnimation(
                    olimar,
                    assets.animation`myAnim`,
                    25,
                    false
                    )
                    timer.background(function () {
                        timer.after(200, function () {
                            olimar.setImage(img`
                                . . . . 9 9 9 e 9 9 9 9 . . . . 
                                . . . 9 9 9 e 9 9 9 9 9 9 . . . 
                                . . . 9 9 d d d d 9 9 9 9 . . . 
                                . . 9 d d d d d d d 9 9 9 9 . . 
                                . . 9 d d f f d d f f 9 9 9 . . 
                                . . 9 d d d d d d d 3 3 3 9 . . 
                                . . 9 9 d d d d d 3 3 3 3 9 . . 
                                . . 9 9 d d d d d d 3 3 9 9 . . 
                                . . . 9 9 9 d 2 d d 9 9 9 . . . 
                                . . . . 5 5 5 b b 5 5 5 . . . . 
                                . . 2 2 5 5 5 5 5 5 5 5 2 2 . . 
                                . 2 2 2 . 5 5 5 5 5 5 . 2 2 2 . 
                                . . 2 . . 5 5 5 5 5 5 . . 2 . . 
                                . . . . . 5 5 . . 5 5 . . . . . 
                                . . . . 5 5 5 . . 5 5 5 . . . . 
                                . . . . 2 2 2 . . 2 2 2 . . . . 
                                `)
                        })
                    })
                    if (selectornum == 1) {
                        if (info.player1.score() > 0) {
                            if (redthrow.overlapsWith(EmperorBoi)) {
                                miniattackr += -1
                            }
                            redthrow = sprites.create(img`
                                . . . . . . . . . . . . 7 7 . . 
                                . . . . . . . . . 2 2 7 7 7 7 . 
                                . . . . . . . . 2 . . . 7 7 . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . 1 f 2 2 f 1 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . 2 2 2 2 2 2 . . . . . 
                                . . . . 2 . 2 2 2 2 . 2 . . . . 
                                . . . . 2 . 2 2 2 2 . 2 . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . 2 . . 2 . . . . . . 
                                . . . . . . 2 . . 2 . . . . . . 
                                `, SpriteKind.rthrow)
                            redthrow.ay = 600
                            redthrow.setPosition(olimar.x - 10, olimar.y - 5)
                            redthrow.setVelocity(-50, -200)
                            info.player1.changeScoreBy(-1)
                            redno += 1
                        }
                    }
                    if (selectornum == 2) {
                        if (info.player3.score() > 0) {
                            if (yellow_throw.overlapsWith(EmperorBoi)) {
                                miniattacky += -1
                            }
                            yellow_throw = sprites.create(assets.image`myImage1`, SpriteKind.ythrow)
                            yellow_throw.ay = 400
                            yellow_throw.setPosition(olimar.x - 10, olimar.y - 5)
                            yellow_throw.setVelocity(-50, -275)
                            info.player3.changeScoreBy(-1)
                            yellowno += 1
                        }
                    }
                    if (selectornum == 3) {
                        if (info.player2.score() > 0) {
                            if (blue_throw.overlapsWith(EmperorBoi)) {
                                miniattackb += -1
                            }
                            blue_throw = sprites.create(assets.image`myImage6`, SpriteKind.bthrow)
                            blue_throw.ay = 600
                            blue_throw.setPosition(olimar.x - 10, olimar.y - 5)
                            blue_throw.setVelocity(-50, -200)
                            info.player2.changeScoreBy(-1)
                            blueno += 1
                        }
                    }
                }
            }
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bthrow, function (sprite, otherSprite) {
    sprites.destroy(blue_throw)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bulborb, function (sprite, otherSprite) {
    timer.throttle("oliaction", 750, function () {
        if (controller.right.isPressed()) {
            controller.moveSprite(olimar, -200, 0)
            info.player4.changeLifeBy(-1)
            timer.after(500, function () {
                controller.moveSprite(olimar, 100, 0)
            })
        } else {
            for (let index = 0; index < 500; index++) {
                olimar.setVelocity(-200, -100)
            }
            info.player4.changeLifeBy(-1)
            controller.moveSprite(olimar, 100, 0)
        }
    })
})
statusbars.onStatusReached(StatusBarKind.minibhealth, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 99, function (status) {
    if (start_complete == 1) {
        if (notweak == 0) {
            notweak = 1
            EmperorBoi.setImage(assets.image`myImage20`)
            effectholder = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            EmperorBoi.startEffect(effects.rings, 1500)
            EmperorBoi.startEffect(effects.halo, 1500)
            EmperorBoi.startEffect(effects.rings, 1500)
            EmperorBoi.setVelocity(0, 0)
            timer.after(750, function () {
                weak_point.setImage(img`
                    ................
                    ................
                    ......2222......
                    .....222112.....
                    .....222212.....
                    .....222222.....
                    .....222222.....
                    ......2222......
                    .....222222.....
                    ....22222222....
                    ....22222222....
                    ....22222222....
                    .....222222.....
                    .....222222....3
                    .....222222.....
                    .....222222.....
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    ................
                    `)
            })
            timer.after(1500, function () {
                EmperorBoi.setVelocity(-20, 0)
            })
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selectornum == 1) {
        selectornum = 3
        selector2.setImage(assets.image`myImage8`)
    } else {
        if (selectornum == 3) {
            selectornum = 2
            selector2.setImage(assets.image`myImage7`)
        } else {
            if (selectornum == 2) {
                selectornum = 1
                selector2.setImage(img`
                    ..........ffffffffffffffff..........
                    .........ffffffffffffffffff.........
                    ........f2f88888882777778f2f........
                    .......f22f88888822777778f22f.......
                    ......f222f88888222277788f222f......
                    .....f2222f88882222228888f2222f.....
                    .....f2222f88822222222888f2222f.....
                    ....f22222f88822222222888f22222f....
                    ....f22222f811ff2222ff118f22222f....
                    ...f222222f811ff2222ff118f222222f...
                    ...f222222f88822222222888f222222f...
                    ..f2222222f88822222222888f2222222f..
                    ..f2222222f88822222222888f2222222f..
                    .f22222222f88822222222888f22222222f.
                    .f22222222f88882222228888f22222222f.
                    f222222222f88888222288888f222222222f
                    f222222222ffffffffffffffff222222222f
                    f2222222222ffffffffffffff2222222222f
                    .ffffffffff.....ffff.....ffffffffff.
                    ................ffff................
                    ................ffff................
                    ...............ffffff...............
                    ...............fccccf...............
                    ....................................
                    `)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.bthrow, assets.tile`myTile48`, function (sprite, location) {
    bdeath = 1
    sprites.destroy(blue_throw)
    bdeath = 0
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile45`, function (sprite, location) {
    sprites.destroy(yellow_throw)
    librano += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    game.showLongText("Go to Picmin 3 and enter your score and time when prompted.", DialogLayout.Bottom)
    game.setGameOverMessage(true, "Advance to Level 3!")
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.bthrow, assets.tile`myTile49`, function (sprite, location) {
    bdeath = 1
    sprites.destroy(blue_throw)
    bdeath = 0
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile33`, function (sprite, location) {
    ydeath = 1
    sprites.destroy(yellow_throw)
    ydeath = 0
})
sprites.onDestroyed(SpriteKind.ythrow, function (sprite) {
    if (!(ydeath == 1)) {
        yellowno += -1
        info.player3.changeScoreBy(1)
    } else {
        yellowno = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rthrow, function (sprite, otherSprite) {
    sprites.destroy(redthrow)
})
scene.onHitWall(SpriteKind.ythrow, function (sprite, location) {
    timer.background(function () {
        if (yellow_throw.isHittingTile(CollisionDirection.Bottom)) {
            if (yellow_throw.vx > 0) {
                yellow_throw.setVelocity(50, 0)
            } else {
                yellow_throw.setVelocity(-50, 0)
            }
        }
    })
    if (yellow_throw.isHittingTile(CollisionDirection.Right)) {
        yellow_throw.setVelocity(-50, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ythrow, function (sprite, otherSprite) {
    sprites.destroy(yellow_throw)
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile48`, function (sprite, location) {
    ydeath = 1
    sprites.destroy(yellow_throw)
    ydeath = 0
})
sprites.onOverlap(SpriteKind.rthrow, SpriteKind.bulborb, function (sprite, otherSprite) {
    redthrow.follow(EmperorBoi)
    if (notweak == 0) {
        timer.throttle("raction", 333, function () {
            minibbar.value += (miniattackr - 1) * 3
        })
        if (wheak == 0) {
            bulbyattack = 1
        }
    } else {
        if (wheak == 1) {
            timer.throttle("raction", 333, function () {
                minibbar.value += (miniattackr - 1) * 3
            })
        }
    }
})
sprites.onOverlap(SpriteKind.ythrow, SpriteKind.weak, function (sprite, otherSprite) {
    if (notweak == 1) {
        if (wheak == 0) {
            wheak = 1
            bulbyattack = 0
            EmperorBoi.setVelocity(0, 0)
            animation.runImageAnimation(
            EmperorBoi,
            assets.animation`myAnim6`,
            100,
            false
            )
            timer.after(5000, function () {
                timer.throttle("getup", 0, function () {
                    animation.runImageAnimation(
                    EmperorBoi,
                    assets.animation`myAnim7`,
                    150,
                    false
                    )
                })
                timer.debounce("getup", 1050, function () {
                    animation.runImageAnimation(
                    EmperorBoi,
                    assets.animation`myAnim4`,
                    400,
                    true
                    )
                    EmperorBoi.setVelocity(-20, 0)
                    wheak = 0
                    bulbyattack = 1
                })
            })
        }
    }
})
statusbars.onZero(StatusBarKind.minibhealth, function (status) {
    sprites.destroy(EmperorBoi)
    info.player4.changeScoreBy(150)
    bulbydeath = 3
})
sprites.onOverlap(SpriteKind.ythrow, SpriteKind.bulborb, function (sprite, otherSprite) {
    yellow_throw.follow(EmperorBoi)
    if (notweak == 0) {
        timer.throttle("yaction", 500, function () {
            minibbar.value += (miniattacky - 1) * 3
        })
        if (wheak == 0) {
            bulbyattack = 1
        }
    } else {
        if (wheak == 1) {
            timer.throttle("yaction", 500, function () {
                minibbar.value += (miniattacky - 1) * 3
            })
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    timer.throttle("wactuionin", 750, function () {
        if (controller.right.isPressed()) {
            controller.moveSprite(olimar, -200, 0)
            info.player4.changeLifeBy(-1)
            timer.after(500, function () {
                controller.moveSprite(olimar, 100, 0)
            })
        } else {
            for (let index = 0; index < 500; index++) {
                olimar.setVelocity(-200, -100)
            }
            info.player4.changeLifeBy(-1)
            controller.moveSprite(olimar, 100, 0)
        }
    })
})
scene.onOverlapTile(SpriteKind.ythrow, assets.tile`myTile46`, function (sprite, location) {
    sprites.destroy(yellow_throw)
    librano += 1
})
let random = 0
let bulbydeath = 0
let effectholder: Sprite = null
let libra: Sprite = null
let immune: Sprite = null
let bulbyattack = 0
let wheak = 0
let direction = 0
let miniattackb = 0
let miniattacky = 0
let miniattackr = 0
let start_complete = 0
let notweak = 0
let bulbdirection = 0
let blueno = 0
let yellowno = 0
let redno = 0
let minibbar: StatusBarSprite = null
let EmperorBoi: Sprite = null
let weak_point: Sprite = null
let olimar: Sprite = null
let ydeath = 0
let selectornum = 0
let blue_throw: Sprite = null
let yellow_throw: Sprite = null
let redthrow: Sprite = null
let selector2: Sprite = null
let tip = 0
let bdeath = 0
let rdeath = 0
let librano = 0
rdeath = 0
bdeath = 0
let reds = 0
let strawb = 1
tip = 1
selector2 = sprites.create(img`
    ..........ffffffffffffffff..........
    .........ffffffffffffffffff.........
    ........f2f88888882777778f2f........
    .......f22f88888822777778f22f.......
    ......f222f88888222277788f222f......
    .....f2222f88882222228888f2222f.....
    .....f2222f88822222222888f2222f.....
    ....f22222f88822222222888f22222f....
    ....f22222f811ff2222ff118f22222f....
    ...f222222f811ff2222ff118f222222f...
    ...f222222f88822222222888f222222f...
    ..f2222222f88822222222888f2222222f..
    ..f2222222f88822222222888f2222222f..
    .f22222222f88822222222888f22222222f.
    .f22222222f88882222228888f22222222f.
    f222222222f88888222288888f222222222f
    f222222222ffffffffffffffff222222222f
    f2222222222ffffffffffffff2222222222f
    .ffffffffff.....ffff.....ffffffffff.
    ................ffff................
    ................ffff................
    ...............ffffff...............
    ...............fccccf...............
    ....................................
    `, SpriteKind.selector)
redthrow = sprites.create(img`
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . 2 2 7 7 7 7 . 
    . . . . . . . . 2 . . . 7 7 . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 1 f 2 2 f 1 . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 . 2 2 2 2 . 2 . . . . 
    . . . . 2 . 2 2 2 2 . 2 . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    `, SpriteKind.rthrow)
yellow_throw = sprites.create(assets.image`myImage1`, SpriteKind.ythrow)
sprites.destroy(redthrow)
sprites.destroy(yellow_throw)
sprites.destroy(blue_throw)
blue_throw = sprites.create(assets.image`myImage6`, SpriteKind.bthrow)
selectornum = 1
info.player1.setScore(5)
info.player2.setScore(5)
info.player3.setScore(5)
ydeath = 0
olimar = sprites.create(img`
    . . . . 9 9 9 e 9 9 9 9 . . . . 
    . . . 9 9 9 e 9 9 9 9 9 9 . . . 
    . . . 9 9 d d d d 9 9 9 9 . . . 
    . . 9 d d d d d d d 9 9 9 9 . . 
    . . 9 d d f f d d f f 9 9 9 . . 
    . . 9 d d d d d d d 3 3 3 9 . . 
    . . 9 9 d d d d d 3 3 3 3 9 . . 
    . . 9 9 d d d d d d 3 3 9 9 . . 
    . . . 9 9 9 d 2 d d 9 9 9 . . . 
    . . . . 5 5 5 b b 5 5 5 . . . . 
    . . 2 2 5 5 5 5 5 5 5 5 2 2 . . 
    . 2 2 2 . 5 5 5 5 5 5 . 2 2 2 . 
    . . 2 . . 5 5 5 5 5 5 . . 2 . . 
    . . . . . 5 5 . . 5 5 . . . . . 
    . . . . 5 5 5 . . 5 5 5 . . . . 
    . . . . 2 2 2 . . 2 2 2 . . . . 
    `, SpriteKind.Player)
olimar.setPosition(8, 190)
olimar.ay = 400
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
scene.cameraFollowSprite(olimar)
tiles.setCurrentTilemap(tilemap`level2`)
selector2.setPosition(20, 1200)
controller.moveSprite(selector2, 100, 0)
weak_point = sprites.create(img`
    ......bbbb......
    .....bbbbbb.....
    ....bb2222bb....
    ...bb222112bb...
    ...bb222212bb...
    ...bb222222bb...
    ...bb222222bb...
    ....bb2222bb....
    ...bb222222bb...
    ..bb22222222bb..
    ..bb22222222bb..
    ..bb22222222bb..
    ...bb222222bb...
    ...bb222222bb..3
    ...bb222222bb...
    ...bb222222bb...
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.weak)
EmperorBoi = sprites.create(assets.image`myImage17`, SpriteKind.bulborb)
EmperorBoi.setPosition(600, 100)
weak_point.setPosition(600, 100)
EmperorBoi.setVelocity(-20, 0)
EmperorBoi.setFlag(SpriteFlag.RelativeToCamera, false)
weak_point.follow(EmperorBoi, 100)
weak_point.setScale(3, ScaleAnchor.Middle)
minibbar = statusbars.create(40, 4, StatusBarKind.minibhealth)
minibbar.attachToSprite(EmperorBoi, 0, -40)
minibbar.max = 1000
minibbar.value = 1000
minibbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
info.player4.setLife(3)
if (info.player4.score() > 1200) {
    game.setGameOverMessage(false, "you cheated")
    game.gameOver(false)
}
redno = 0
yellowno = 0
blueno = 0
EmperorBoi.setScale(3, ScaleAnchor.Top)
bulbdirection = 2
controller.moveSprite(olimar, 100, 0)
EmperorBoi.ay = 400
animation.runImageAnimation(
EmperorBoi,
assets.animation`myAnim4`,
400,
true
)
let statusbar = 0
notweak = 0
timer.after(1000, function () {
    start_complete = 1
})
game.onUpdateInterval(4000, function () {
    timer.after(random, function () {
        random = randint(0, 3000)
        if (bulbyattack == 1) {
            if (!(bulbydeath == 3)) {
                EmperorBoi.setVelocity(0, 0)
                animation.stopAnimation(animation.AnimationTypes.All, EmperorBoi)
                EmperorBoi.setImage(assets.image`myImage19`)
                animation.runImageAnimation(
                EmperorBoi,
                assets.animation`myAnim5`,
                100,
                false
                )
                timer.after(750, function () {
                    rdeath = 1
                    ydeath = 1
                    bdeath = 1
                    sprites.destroyAllSpritesOfKind(SpriteKind.rthrow)
                    sprites.destroyAllSpritesOfKind(SpriteKind.ythrow)
                    sprites.destroyAllSpritesOfKind(SpriteKind.bthrow)
                    effects.clearParticles(EmperorBoi)
                })
                timer.after(1750, function () {
                    rdeath = 0
                    ydeath = 0
                    bdeath = 0
                    if (!(wheak == 1)) {
                        EmperorBoi.setVelocity(-20, 0)
                        animation.runImageAnimation(
                        EmperorBoi,
                        assets.animation`myAnim4`,
                        500,
                        true
                        )
                        weak_point.follow(EmperorBoi, 100)
                    }
                })
            }
        }
    })
})
forever(function () {
    if (librano == 2) {
        tiles.setTileAt(tiles.getTileLocation(67, 8), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(68, 8), assets.tile`transparency16`)
        libra = sprites.create(assets.image`myImage9`, SpriteKind.treasure3)
        libra.setPosition(1072, 128)
        libra.ay = 400
        libra.setVelocity(-30, 0)
        librano = 0
    }
})
forever(function () {
    selector2.setPosition(olimar.x, olimar.y - 50)
    if (controller.A.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, olimar)
        if (controller.left.isPressed()) {
            direction = 1
            olimar.setImage(assets.image`myImage4`)
        } else {
            if (controller.right.isPressed()) {
                olimar.setImage(assets.image`myImage5`)
                direction = 2
            }
        }
    }
})
forever(function () {
	
})
forever(function () {
    if (!(spriteutils.isDestroyed(effectholder))) {
        effectholder.setPosition(EmperorBoi.x - 30, EmperorBoi.y)
    }
})
game.onUpdateInterval(100, function () {
    if (olimar.isHittingTile(CollisionDirection.Left)) {
        if (olimar.isHittingTile(CollisionDirection.Bottom)) {
            olimar.setVelocity(0, -130)
        }
    }
    if (olimar.isHittingTile(CollisionDirection.Right)) {
        if (olimar.isHittingTile(CollisionDirection.Bottom)) {
            olimar.setVelocity(0, -130)
        }
    }
})
