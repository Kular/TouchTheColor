var StatusLayer = cc.Layer.extend({
    labelTimer: null,
    labelScore: null,
    score: 0,
    time: 60,

    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        var winSize = cc.director.getWinSize();
        this.labelTimer = cc.LabelTTF.create("倒计时: " + this.time + "秒", "Helvetica", 50);
        this.labelTimer.setColor(cc.color(0, 0, 0));
        this.labelTimer.attr({
            x: winSize.width / 2,
            y: winSize.height - 20,
            anchorX: 0.5,
            anchorY: 1
        });
        // this.addChild(this.labelTimer);

        this.labelScore = cc.LabelTTF.create("分数:\n" + this.score, "Helvetica", 50);
        this.labelScore.setColor(cc.color(0, 0, 0));
        this.labelScore.attr({
            x: winSize.width - 30,
            y: winSize.height - 300,
            anchorX: 1,
            anchorY: 1 
        });
        this.addChild(this.labelScore);
    },
    incr: function() {
        this.score += 1;
        this.labelScore.setString("分数:\n" + this.score);
    }
    
});
