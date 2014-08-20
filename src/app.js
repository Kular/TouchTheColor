var buttons = [];
var bTouched = false;

var MainLayer = cc.LayerColor.extend({
    hong_black: null,
    huang_black: null,
    lan_black: null,
    spriteSheet: null,
    big_ring: null,
    small_ring: null,
    listener: null,

    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {
        this._super();
        this.color = cc.color(200, 198, 224, 255); // set background color 
        var size = cc.director.getWinSize();

        this.hong_black = cc.Sprite.create("#hong_black.png");
        this.hong_black.attr({
            x: g_PosTop.x,
            y: g_PosTop.y,
            curPos: PosType.Top,
            type: ColorType.Red
        });
        this.addChild(this.hong_black);
        buttons.push(this.hong_black);

        this.huang_black = cc.Sprite.create("#huang_black.png");
        this.huang_black.attr({
            x: g_PosLeft.x,
            y: g_PosLeft.y,
            curPos: PosType.Left,
            type: ColorType.Yellow
        });
        this.addChild(this.huang_black);
        buttons.push(this.huang_black);

        this.lan_black = cc.Sprite.create("#lan_black.png");
        this.lan_black.attr({
            x: g_PosRight.x,
            y: g_PosRight.y,
            curPos: PosType.Right,
            type: ColorType.Blue
        });
        this.addChild(this.lan_black);
        buttons.push(this.lan_black);

        this.big_ring = cc.Sprite.create("#0_0.png");
        this.big_ring.attr({
            x: g_PosBig.x,
            y: g_PosBig.y,
        });
        this.addChild(this.big_ring);

        this.small_ring = cc.Sprite.create("#2_2.png");
        this.small_ring.attr({
            x: g_PosSmall.x,
            y: g_PosSmall.y,
            scale: 0.5
        });
        this.addChild(this.small_ring);
        
        listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var button = event.getCurrentTarget();
                var locationInNode = button.convertToNodeSpace(touch.getLocation());    
                var buttonSize = button.getContentSize();
                var rect = cc.rect(0, 0, buttonSize.width, buttonSize.height);
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    console.log("type: " + button.type);
                    if (bTouched) {
                        return true;
                    } else {
                        bTouched = true;
                    }
                    // big_ring's type ?= button.type
                    MainLayer.rotateButtons(buttons);     
                    var statusLayer = button.getParent().getParent().getChildByTag(TagOfLayer.StatusLayer);
                    statusLayer.incr();
                    return true;
                }
                return false;
            },

            onTouchMoved: function (touch, event) {
                return true;
            },
            onTouchEnded: function (touch, event) {
                return true;
            }
        });
        cc.eventManager.addListener(listener, this.hong_black);
        cc.eventManager.addListener(listener.clone(), this.lan_black);
        cc.eventManager.addListener(listener.clone(), this.huang_black);

        return true;
    },
    onExit: function () {
        this.listener.release();
        this._super();
    }

});

MainLayer.rotateButtons = function (buttons) {
    buttons.forEach(function (button) {
        button.curPos = (button.curPos + 1) % 3;
        var nextPos;
        switch (button.curPos) {
            case PosType.Top:
                nextPos = g_PosTop;
                break;
            case PosType.Left:
                nextPos = g_PosLeft;
                break;
            case PosType.Right:
                nextPos = g_PosRight;
                break;
        }

        button.runAction(
            cc.spawn(
                cc.moveTo(0.2, nextPos),
                cc.sequence(
                    cc.scaleTo(0.1, 0.5, 0.5),
                    cc.scaleTo(0.1, 1, 1),
                    cc.callFunc(function(){bTouched = false;}, this)
                )
            )
        );
    });
}

var MainScene = cc.Scene.extend({
    score: 0,
    onEnter:function () {
        this._super();
        cc.spriteFrameCache.addSpriteFrames(res.rings_plist);
        var mainLayer = new MainLayer();
        this.addChild(mainLayer, 0, TagOfLayer.MainLayer);
        var statusLayer = new StatusLayer();
        this.addChild(statusLayer, 0, TagOfLayer.StatusLayer);
    }
});

