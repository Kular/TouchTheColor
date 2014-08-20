var Rings = cc.Class.extend({
    list: [],
    
    ctor: function () {
        for (var i = 0; i < this.list.length; i++) {
            list.push(new TargetRing(i));
            this.addChild(list[i], 0, i);
        }
    },

    shuffle: function () {
        var c0 = this.getChildByTag(0);
        var c1 = this.getChildByTag(1);
        var c2 = this.getChildByTag(2);
        
        c0.runAction(
            cc.spawn(
                cc.scaleTo(0.2, 0.1, 0.1),
                cc.moveTo(0.2, cc.p(-39, g_PosBig.y)
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

        var newRing = new TargetRing(2);
        this.list.push(newRing);
        this.addChild(newRing);

        for (var i = 0; i < this.list.length; i++) {
            list[i].setTag(i);
        }
    },

    cleanup: function() {
        this.list.release();
    }
    

});
