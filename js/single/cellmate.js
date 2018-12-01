Cellmate = function(context) {
    this.sprite = context.add.image(730, 82, 'cellmate');
    this.sprite.setOrigin(0,0);
    this.sprite.alpha = 0;

    context.add.tween({
        targets: this.sprite,
        duration: 1000*AR,
        alpha: 1
    })

    // this.background.setPosition(0, 0);
    // this.background.setScale(0.87,0.87);
}