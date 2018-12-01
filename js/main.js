var config = {
    type: Phaser.AUTO,
    width: 850,
    height: 300,
    scene: [{
        key: 'boot',
        preload: boot_preload,
        create: boot_create
    },
    {
        key: 'game',
        create: game_create,
        update: game_update
    }],
};

var game = new Phaser.Game(config);
var AR = 0.8;

function boot_preload() {
    // SHRUG

    let js_load = ['character', 'background_segment', 'game', 'story', 'choice', 'single/prison', 'single/cellmate'];

    for (let i in js_load)
        this.load.script('js/' + js_load[i]);

    let img_load = ['background_birth', 'prison', 'cellmate'];
    for (let i in img_load)
        this.load.image(img_load[i], 'src/' + img_load[i] + '.png');


    let spritesheet_load = [{name: 'walk_spritesheet', params: {frameWidth: 100}}];
    for (let i in spritesheet_load)
        this.load.spritesheet(spritesheet_load[i].name, 'src/' + spritesheet_load[i].name + '.png', spritesheet_load[i].params);
    

    let loading_value = META.name_int + js_load.length + img_load.length;
    let loading_text = this.loading_text = this.add.text(20, 30, loading_value, STYLES.loading);
    this.author_text = this.add.text(20, 70, 'a tiny game by Vilda', STYLES.loading_author);

    // I am ready button
    this.load.on('fileprogress', function (file) {
        loading_value -= 1;
        loading_text.setText(loading_value);
    });

}

function boot_create() {
    let context = this;
    this.add.tween({
        targets: this.author_text,
        duration: 1000*AR,
        alpha: 0
    })
    let ready_button = this.add.text(600, 263, "I'm ready", STYLES.loading_ready).setInteractive({ cursor: 'pointer' });
    ready_button.alpha = 0;
    ready_button.on('pointerdown', function (pointer) {
        context.add.tween({
            targets: [ready_button, context.loading_text],
            duration: 1000*AR,
            alpha: 0,
            onComplete: function() {
                game.scene.start('game');
            }
        })
    });
    this.add.tween({
        targets: ready_button,
        delay: 1200*AR,
        duration: 1000*AR,
        alpha: 1
    })
}

var character, background, story;
var forward_button;

function game_create() {
    background = new BackgroundSeqment(this, 'background_birth');
    character = new Character(this, 0);
    forward_button = this.add.text(600, 263, "forward", STYLES.game_option).setInteractive({ cursor: 'pointer' });
    forward_button.on('pointerdown', function(pointer) {
        if(!story.blocking) {
            story.scrolling = true;
            character.start_walk();
        }
    });
    forward_button.on('pointerup', function(pointer) {
        story.scrolling = false;
        character.stop_walk();
     });
    story = new Story();
    new TransitionBlockingFrom(this);
}

function game_update() {
    if(story.scrolling && !story.blocking) {
        background.try_scroll();
        story.forward(this);
    }
    if(story.blocking) {
        story.scrolling = false;    
        character.stop_walk();
    }
}