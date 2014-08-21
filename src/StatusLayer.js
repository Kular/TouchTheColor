var StatusLayer = cc.Layer.extend({
    labelScore: null,
    labelHealth: null,
    score: 0,
    health: 3,
    heart: null,
    coin: null,
    timer: null,

    ctor: function () {
        this._super();
        this.init();
    },

    init: function () {
        var winSize = cc.director.getWinSize();

        this.coin = cc.Sprite.create("#coin.png");
        this.coin.attr({
            x: winSize.width - 140,
            y: winSize.height - 300,
            anchorX: 1,
            anchorY: 1,
        });
        this.addChild(this.coin);

        this.labelScore = cc.LabelTTF.create("x " + this.score, "Helvetica", 40);
        this.labelScore.setColor(cc.color(0, 0, 0));
        this.labelScore.attr({
            x: this.coin.x + 10,
            y: this.coin.y,
            anchorX: 0,
            anchorY: 1 
        });
        this.addChild(this.labelScore);

        this.heart = cc.Sprite.create("#heart.png");
        this.heart.attr({
            x: this.coin.x,
            y: this.coin.y - 70,
            anchorX: 1,
            anchorY: 1,
        });
        this.addChild(this.heart);
        
        this.labelHealth = cc.LabelTTF.create("x " + this.health, "Helvetica", 40);
        this.labelHealth.setColor(cc.color(0, 0, 0));
        this.labelHealth.attr({
            x: this.heart.x + 10,
            y: this.heart.y,
            anchorX: 0, 
            anchorY: 1
        });
        this.addChild(this.labelHealth);

        this.timer = cc.ProgressTimer.create(cc.Sprite.create("#donuts.png"));
        this.timer.attr({
            x: g_PosBig.x,
            y: g_PosBig.y,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.timer.type = cc.ProgressTimer.TYPE_RADIAL;
        this.addChild(this.timer);
        this.timer.percentage = 0;
        this.scheduleUpdate();

    },
    
    update: function (dt) {
        if (this.timer.percentage >= 100) {
            var hp = this.decr();
            if (hp < 1) {
                this.gameOver();
            } else {
                this.timer.percentage = 0;
            }
        } else {
            this.timer.percentage += 1.0;
        }
    },

    incr: function() {
        this.score += 1;
        this.labelScore.setString("x " + this.score);
        this.timer.percentage = 0;
    },

    decr: function () {
        this.health -= 1;
        this.labelHealth.setString("x " + this.health);
        cc.audioEngine.playEffect(res.bubu_mp3);
        return this.health;
    },

    gameOver: function () {
        this.unscheduleUpdate();
        var labelGameOver = cc.LabelTTF.create("Game Over!", "Helvetica", 70);
        labelGameOver.setColor(cc.color(255, 0, 0));
        
        var winSize = cc.director.getWinSize();
        labelGameOver.attr({
            x: winSize.width/2,
            y: winSize.height/2,
            anchorX: 0.5,
            anchorY: 0.5
        });
        this.addChild(labelGameOver);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                cc.director.runScene(new MainScene());
            }
        }, this);
        
        cc.audioEngine.playEffect(res.haha_mp3);
    }
    
});
