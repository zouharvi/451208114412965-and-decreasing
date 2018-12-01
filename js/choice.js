Choice = function(context, a) {
    this.group = [];
    this.group_d = context.add.group();

    this.question = context.add.text(400, 48, a.t, STYLES.story_text); 
    this.question.alpha = 0;
    context.add.tween({
        targets: this.question,
        duration: 1000*AR,
        alpha: 1
    });
    this.group_d.add(this.question);

    
    for(i in a.v) {
        let o = a.v[i];
        let choice_text = context.add.text(400, 80+i*25, '  ' + o.t, STYLES.story_text_resp);
        choice_text.setInteractive({ cursor: 'pointer' });
        choice_text.choice_i = i;
        choice_text.choice_r2 = o.r2;
        choice_text.on('pointerdown', function (pointer) {
            if(story.cur_choice.dying)
                return;
            
            story.cur_choice.choice_i = this.choice_i;
            // story.results[this.choice_r1] = this.choice_r2;
            story.choose(a.r1, this.choice_r2);
            story.cur_choice.fade(context);
        }); 
        choice_text.alpha = 0;
        
        context.add.tween({
            targets: choice_text,
            duration: 1000*AR,
            alpha: 1
        });

        this.group.push(choice_text);
        this.group_d.add(choice_text);
    }
}

Choice.prototype.fade = function(context) {
    if(story.cur_choice.dying)
        return;

    context.add.tween({
        targets: this.question,
        duration: 1000*AR,
        alpha: 0,
        onComplete: function() {
            story.cur_choice.group_d.destroy();
            story.cur_choice = null;
            story.blocking = false;
        }
    });
    
    
    // TODO: slower fade on selected?
    for(let i in this.group) {
        context.add.tween({
            targets: this.group[i],
            duration: (i == this.choice_i) ? 1500*AR : 1000*AR,
            alpha: 0,
        });
    }
    
    story.cur_choice.dying = true;
} 