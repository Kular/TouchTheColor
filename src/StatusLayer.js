var StatusLayer = cc.Layer.extend({
    labelScore: null,
    score: 0,
    coin: null,

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
            scale: 0.5
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
    },

    incr: function() {
        this.score += 1;
        this.labelScore.setString("x " + this.score);
    }
    
});
