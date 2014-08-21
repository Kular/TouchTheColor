var BackgroundLayer = cc.LayerColor.extend({
    list: [],

    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        this._super();
        this.color = cc.color(200, 198, 224, 255); // set background color 
        for (var i = 0; i < 3; i++) {
            this.list.push(new Ring(i));
            this.addChild(this.list[i], 0, i);
        }
    },
    
    getTargetColorType: function () {
        return this.list[0].type;
    },

    shuffle: function () {
        var c0 = this.getChildByTag(0);
        var c1 = this.getChildByTag(1);
        var c2 = this.getChildByTag(2);
        
        c0.runAction(
            cc.spawn(
                cc.scaleTo(0.2, 0, 0),
                cc.moveTo(0.2, cc.p(-40, g_PosBig.y))
            )
        );

        c1.runAction(
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.moveTo(0.2, g_PosBig)
            )
        );

        c2.runAction(
            cc.spawn(
                cc.scaleTo(0.2, 0.5, 0.5),
                cc.moveTo(0.2, g_PosSmall)
            )
        );


        // fill the list, reset tags
        this.removeChildByTag(0);
        this.list.shift();

        var newRing = new Ring(2);
        this.list.push(newRing);
        this.addChild(newRing);

        for (var i = 0; i < this.list.length; i++) {
            this.list[i].setTag(i);
        }

        cc.audioEngine.playEffect(res.ding_mp3);
    },


});
