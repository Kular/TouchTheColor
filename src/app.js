var MainLayer = cc.Layer.extend({
    bgImg:null,
    ctor:function () {
        this._super();
        var size = cc.director.getWinSize();

        this.bgImg = cc.Sprite.create(res.BgImg_png);
        this.bgImg.attr({
            x: size.width / 2,
            y: size.height / 2,
        });
        this.addChild(this.bgImg, 0);

        return true;
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var mainLayer = new MainLayer();
        this.addChild(mainLayer);
        var statusLayer = new StatusLayer();
        this.addChild(statusLayer);
    }
});

