var MainLayer = cc.LayerColor.extend({
    hong_black: null,
    huang_black: null,
    lan_black: null,
    spriteSheet: null,
    big_ring: null,
    small_ring: null,

    ctor: function () {
        this._super();
        this.color = cc.color(200, 198, 224, 255); // set background color to White
        var size = cc.director.getWinSize();

        cc.spriteFrameCache.addSpriteFrames(res.rings_plist);
        this.spriteSheet = cc.SpriteBatchNode.create(res.rings);
        this.addChild(this.spriteSheet);

        var buttons = [];

        this.hong_black = cc.Sprite.create("#hong_black.png");
        this.hong_black.attr({
            x: g_PosTop.x,
            y: g_PosTop.y,
            scale: 0.46
        });
        this.addChild(this.hong_black);
        buttons.push(this.hong_black);

        this.huang_black = cc.Sprite.create("#huang_black.png");
        this.huang_black.attr({
            x: g_PosLeft.x,
            y: g_PosLeft.y,
            scale: 0.46
        });
        this.addChild(this.huang_black);
        buttons.push(this.huang_black);

        this.lan_black = cc.Sprite.create("#lan_black.png");
        this.lan_black.attr({
            x: g_PosRight.x,
            y: g_PosRight.y,
            scale: 0.46
        });
        this.addChild(this.lan_black);
        buttons.push(this.lan_black);

        this.big_ring = cc.Sprite.create("#hong_red.png");
        this.big_ring.attr({
            x: g_PosBig.x,
            y: g_PosBig.y,
        });
        this.addChild(this.big_ring);

        this.small_ring = cc.Sprite.create("#lan_blue.png");
        this.small_ring.attr({
            x: g_PosSmall.x,
            y: g_PosSmall.y,
            scale: 0.5
        });
        this.addChild(this.small_ring);
        

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                console.log("x:" + touch.getLocation().x + " y: " + touch.getLocation().y);
                clockwiseTurn(buttons);
            },
            onTouchEnded: function (touch, event) {
                return true;
            },
            onTouchMoved: function (touch, event) {
                return true;
            }
        }, this);


        return true;
    },


    counterClockwiseTurn: function () {

    }

});


function clockwiseTurn (buttons) {
    console.log("length: " + buttons.length);
    buttons.forEach(function (button) {
        console.log("x: " + button.x); 
    });
} 
var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var mainLayer = new MainLayer();
        this.addChild(mainLayer);
        var statusLayer = new StatusLayer();
        this.addChild(statusLayer);
    }
});

