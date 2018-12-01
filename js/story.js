Story = function() {
    this.cur_text = null;
}

Story.prototype.actions = {
    73: function(context) {
        new TransitionBlockingTo(context, function() {
            // change to prison
            story.prison = new Prison(context);
            background.scrolling = false;

            character.number.setDepth(1000);
            forward_button.setDepth(1000);

            story.decrease_speed = 6;
            new TransitionBlockingFrom(context);
        });
    },
    98: function(context) {
        // add cellmate
        story.cellmate = new Cellmate(context);
    },
    120: function(context) {
        // remove cellmate
        story.cellmate.sprite.destroy();
        story.cellmate = null;
    },
    123: function(context) {
        new TransitionBlockingTo(context, function(){
            story.prison.background.destroy();
            story.prison = null;
            story.decrease_speed = 1;
            background.background.destroy();
            // new background
            background = new BackgroundSeqment(context, 'background_life');
            character.sprite.setDepth(10000);
            new TransitionBlockingFrom(context);
        });
    },
    167: function(context) {
        new TransitionBlockingTo(context, function() {
            // change to hospital
            story.hospital = new Hospital(context);
            background.scrolling = false;

            character.number.setDepth(1000);
            forward_button.setDepth(1000);

            story.decrease_speed = 2;
            new TransitionBlockingFrom(context);
        });
    },

    200: function(context) {
        new TransitionBlockingTo(context, function() {
            // change to hospital
            background.scrolling = false;

            character.number.setDepth(1000);
            forward_button.setDepth(1000);

            story.decrease_speed = 2;
            background.background.destroy();
            new TransitionBlockingFrom(context);
        });
    },
    201: function(context) {
        new TransitionBlockingTo(context, function() { });        
    }
};

Story.prototype.texts = {
    2 : {t: 'It\'s winter 1951.\nYou were born to caring parents.', e : 3},
    6 : {t: 'They directed all their love to you.', e : 2}, // direct toward
    9 : {t: 'Maybe that\'s why there wasn\'t any left\nfor the relationship between them.', e : 3},
    13 : {t: "They didn't want to live together anymore.", e : 3},
    21 : {t: "You had a happy childhood.\nIt could be much worse.", e: 2},
    23 : {t: "You didn't have problems socializing\nwith other kids.", e: 2},
    25 : {t: "Nevertheless you stood out.\nYou were curious.", e: 2},
    28 : {t: "At the age of 12 you asked your parent\nwhat does the number above your head mean.", e: 2},
    30 : {t: "You were told to not talk nonsense.", e: 2},
    32 : {t: "This didn't stop you. You saw\nnumbers above the heads of your classmates.", e: 2},
    37 : {t: "The numbers varied vastly.", e: 2},
    // 52 : {t: "You always had a way with words.\nIt was easy for you to enter relationships.", e: 2},
    // 54 : {t: "You were manipulative, but were able\nto justify your behaviour every time.", e: 2},
    // 56 : {t: "In school they told you to beware of sociopaths.\n", e: 2},
    // 58 : {t: "Could it be? Of course not.\nA sociopath wouldn't self-reflect whether he is one.", e: 2},
    // 60 : {t: "You decided not to think too much about it.", e: 2},
    39 : {t: "What did they mean?\nWere you the only one who sees them?", e: 2},
    42 : {t: "They were always decreasing.\nThey dropped rapidly when you made\na life changing decision.", e: 3},
    // 46 : {t: "You were fascinated by this.", e: 2},
    48 : {t: "Months went by. It's 1969.", e: 3},
    51 : {t: "The era of normalization begins\nin Czechoslovakia.", e: 3},
    54 : {t: "You were very active in anti-regime oriented groups.", e: 2},
    58 : {t: "All was silent for several weeks.", e: 2},
    61 : {t: "One of your classmates found some antiregime\nessays you wrote the previous year.", e: 3},
    64 : {t: "It escalated soon.", e: 2},
    66 : {t: "You were summoned for questioning.", e: 2},
    68 : {t: "You were afraid.", e: 2},
    71 : {t: "It wasn't enough.\nYou went to prison for  .", e: 2},
    78 : {t: "You were assured that this is only temporary.", e: 2},
    82 : {t: "Days.", e: 2},
    86 : {t: "Weeks.", e: 3},
    94 : {t: "Months.", e: 3},
    98 : {t: "In january 1970 you were assigned a cellmate.", e: 2},
    100 : {t: "You couldn't see his number,\nbecause it was too dark.", e: 2},
    102 : {t: "He told you not to worry about it.", e: 2},
    104 : {t: "He explained that not many people\nare that perceptive of their lifes\nto notice the number.", e: 4},
    108 : {t: "He said that generally the more you\nlimit your life options, the lower\nthe number gets.", e: 4},
    116 : {t: "At that moment it dawned on you.\nYou became anxious.", e: 3},
    120 : {t: "A week later he disappeared.", e: 2},
    123 : {t: "A week after that you were released.", e: 2},
    129 : {t: "It took you a while to get\nused to regular life again.", e: 3},
    140 : {t: "You came up with a hypothesis that\nstaying home would stop decreasing\nthe number so rapidly.", e: 3},
    145 : {t: "An old friend of yours got into trouble.\nHe asked you for some money.\nIt was 2 years worth of salary.", e: 3},
    151 : {t: "You felt lonely.\nYou tried to find a solution.", e: 3},
    160 : {t: "You grew old.", e: 2},
    164 : {t: "You started having problems\nwith your lungs.", e: 2},
    167 : {t: "You spent the last year in a hospital.", e: 2},
    171 : {t: "Now you're reflecting your life.", e: 2},
    173 : {t: "You sought affection, yet were\nunable to provide it to other people.", e: 3},
    173 : {t: "You complained that nobody understands you,\nyet you haven't understood anyone yourself.", e: 3},
    173 : {t: "You tried to keep your number\nas high as possible.", e: 2},
    173 : {t: "You didn't have a family.", e: 2},
    173 : {t: "You didn't have a proper hobby.", e: 2},
    173 : {t: "You didn't travel.", e: 2},
    173 : {t: "You didn't like arts.", e: 2},
    173 : {t: "You were lonely.", e: 2},
    173 : {t: "You cared only about the number.", e: 2},
    173 : {t: "only the number", e: 2}, 
    173 : {t: "Was it worth it?", e: 100},
};

// You lie to 

Story.prototype.choices = {
    16: {t: 'You were old enoug. You had to decide.', r1: 'parent', v: [
        {t: 'Mommy', r2: 'mommy'},
        {t: 'Daddy', r2: 'daddy'}]
    },
    45: {t: 'You decide to', r1: 'classmates_numbers', v: [
        {t: 'ask them what do the numbers mean', r2: 'ask'},
        {t: 'try not to think about it too much', r2: 'dont_think'}]
    },
    // 50: {t: 'In your free time:', v: [
    //     {t: 'you enjoyed sports', r1: 'free_time', r2: 'sports'},
    //     {t: 'prefered the company of books', r1: 'free_time', r2: 'books'},
    //     {t: 'wrote naive poems', r1: 'free_time', r2: 'poems'},
    //     {t: 'spent time with your friends', r1: 'free_time', r2: 'friends'}]
    // },
    56: {t: "You", r1: 'invasion', v: [
        {t: "tried to sever all connections with these people", r2: 'sever'},
        {t: "became ever more active", r2: 'active'},
        {t: "did nothing. It would soon be over", r2: 'nothing'}]
    },
    70: {t: "They asked you why you wrote the essays.", r1: 'questioning', v: [
        {t: "You tried to explain that you were right.", r2: 'right'},
        {t: "You tried to apologize for everything.", r2: 'amends'},
        {t: "You tried to evoke compassion.", r2: 'compassion'}]
    },
    134: {t: "You chose to:", r1: 'life_what', v: [
        {t: "find a temporary job", r2: 'amends'},
        {t: "study a technical university\n    (will decrease your number)", r2: 'job'}]
    },
    136: {t: "At the same time you moved:", r1: 'moved', v: [
        {t: "to a flat in Prague", r2: 'city'},
        {t: "to a small village nearby", r2: 'village'}]
    },
    141: {t: "You decided", r1: 'illness', v: [
        {t: "to stay home.", r2: 'city'},
        {t: "to not worry.", r2: 'village'}]
    },
    149: {t: "You", r1: 'friend_money', v: [
        {t: "gave him the money", r2: 'city'},
        {t: "came up with an excuse", r2: 'village'}]
    },
    151: {t: "You", r1: 'lonely', v: [
        {t: "stayed alone", r2: 'alone'},
        {t: "married", r2: 'marry'},
        {t: "found a lover", r2: 'lover'}]
    },

}

Story.prototype.results = {};
Story.prototype.index = 0;
Story.prototype.scrolling = false;
Story.prototype.blocking = false;
Story.prototype.epsilon = 0.7;
Story.prototype.decrease_state = 0;
Story.prototype.decrease_speed = 1;

Story.prototype.forward = function(context) {
    this.index += 1/AR;
    // this.index += 1;

    text_min = arrayMin(Object.keys(this.texts));
    if(this.cur_text == null) {
        if(this.index >= text_min*100) {
            this.cur_text = this.texts[text_min];
            this.cur_text.e += text_min;
            delete this.texts[text_min];
            // console.log('creating ' + this.cur_text.t)
            this.cur_text_obj = context.add.text(400, 48, this.cur_text.t, STYLES.story_text); 
            this.cur_text_obj.alpha = 0;
            context.add.tween({
                targets: this.cur_text_obj,
                duration: 1000*AR,
                alpha: 1
            });
        } 
    } else {
        if(this.index >= (this.cur_text.e-this.epsilon)*100) {
            this.cur_text = null;
            context.add.tween({
                targets: this.cur_text_obj,
                duration: 1000*AR,
                alpha: 0,
                onComplete: function() {
                    story.cur_text_obj.destroy();
                }
            });
        }
    }

    choice_min = arrayMin(Object.keys(this.choices));
    if(this.cur_choice == null) {
        if(this.index >= choice_min*100) {
            this.cur_choice = new Choice(context, this.choices[choice_min]);
            delete this.choices[choice_min];
            this.blocking = true;
        } 
    }

    action_min = arrayMin(Object.keys(this.actions));
    if(this.index >= action_min*100) {
        this.actions[action_min](context);
        delete this.actions[action_min];
    } 


    this.decrease_state = (this.decrease_state + 1)%10;
    if(this.decrease_state == 0) character.safe_decrease(this.decrease_speed);
}

Story.prototype.choose = function(key, res) {
    this.results[key] = res;
    if(key == 'parent') {
        character.safe_decrease(6, true);
        if(res == 'mommy')
            this.texts[17] = {t: 'It didn\'t matter what you wanted.\nYou stayed with your father.', e: 2};
        else
            this.texts[17] = {t: 'It didn\'t matter what you wanted.\nYou stayed with your mother.', e: 2};
    } else if(key == 'classmates_numbers') {
        character.safe_decrease(6, true);
        if(res == 'ask')
            this.texts[46] = {t: "They told you they don't know\nwhat you're talking about.", e: 2};
        else
            this.texts[46] = {t: "You decided not to worry too much.\nThis granted you several months of mental peace.", e: 2};
    } else if(key == 'free_time') {
        character.safe_decrease(6, true);
    } else if(key == 'invasion') {
        character.safe_decrease(13, true);
    } else if(key == 'questioning') {
        character.safe_decrease(13, true);
    } else if(key == 'life_what') {
        character.safe_decrease(11, true);
    } else if(key == 'moved') {
        character.safe_decrease(11, true);
    } else if(key == 'illness') {
        character.safe_decrease(11, true);
    } else if(key == 'friend_money') {
        character.safe_decrease(11, true);
    } else if(key == 'lonely') {
        character.safe_decrease(11, true);
    }
}