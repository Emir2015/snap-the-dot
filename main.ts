input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let puan = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    puan = game.score()
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
