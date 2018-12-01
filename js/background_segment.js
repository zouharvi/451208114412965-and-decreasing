function BackgroundSeqment(context, name) {
    this.background = context.add.image(200, 70, name);

    this.background.setOrigin(0,0);
    this.background.setPosition(0, 0);
    this.background.setScale(0.87,0.87);
}

function TransitionBlockingFrom(context) {
    let rect = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
    graphics = context.add.graphics({ fillStyle: { color: 0x000000 } });
    graphics.fillRectShape(rect);

    context.add.tween({
        targets: graphics,
        duration: 1000*AR,
        alpha: 0
    })
}

function TransitionBlockingTo(context, callback) {
    let rect = new Phaser.Geom.Rectangle(0, 0, 1000, 1000);
    graphics = context.add.graphics({ fillStyle: { color: 0x000000 } });
    graphics.fillRectShape(rect);

    // graphics.setDepth(10000);
    graphics.alpha = 0;

    context.add.tween({
        targets: graphics,
        duration: 1000*AR,
        alpha: 1,
        onComplete: function() {
            graphics.destroy();
            callback(context);
        }
    })
}

BackgroundSeqment.prototype.try_scroll = function(context) {
    this.background.x -= 0.6/AR;
};