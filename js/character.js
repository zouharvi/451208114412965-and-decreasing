function Character(context, level) {
    this.context = context;

    this.number = context.add.text(20, 30, META.name_str, STYLES.overhead_number_main); 

    this.life_number = META.name_int;
    this.sprite = context.add.sprite(0, 157, 'walk_spritesheet');
    this.sprite.setOrigin(0, 0);

    context.anims.create({
        key: 'walk_right',
        frames: context.anims.generateFrameNumbers('walk_spritesheet', { start: 0, end: 5 }),
        frameRate: 3,
        repeat: -1
    });
    context.anims.create({
        key: 'walk_stop',
        frames: context.anims.generateFrameNumbers('walk_spritesheet', { start: 0, end: 0 }),
        frameRate: 1,
        repeat: -1
    });
}

Character.prototype.start_walk = function(context) {
    this.sprite.anims.play('walk_right');
}

Character.prototype.stop_walk = function(context) {
    this.sprite.anims.play('walk_stop');
}

Character.prototype.safe_decrease = function(number, fade) {
    let allowed = META.name_int - META.name_int*story.index/100/200;
    if(allowed > this.life_number) {
        number = 1;
    }
    this.life_number -= (Math.random()/4 + 0.75)*(Math.pow(10,number));
    this.life_number = Math.max(0, Math.ceil(this.life_number));


    if(fade) {
        this.context.add.tween({
            targets: this.number,
            duration: 500*AR,
            alpha: 0.1,
            onComplete: function() {
                character.update_counter(this.life_number); 
                character.context.add.tween({
                    targets: character.number,
                    duration: 500*AR,
                    alpha: 1,
                });        
            }
        });
    } else {
        this.update_counter();
    }
}

Character.prototype.safe_kill = function() {
    this.life_number = 0;
    this.update_counter()
}

Character.prototype.update_counter = function() {
    this.number.setText(this.life_number); 
}