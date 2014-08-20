var Ring = cc.Sprite.extend({
    ctor: function (num) {
        var character = Math.floor(Math.random() * 9) % 3;
        var colorType = Math.floor(Math.random() * 9) % 3;
        var filename = "#" + character + "_" + colorType + ".png";
        var pos;
        var sc;
        switch (num) {
            case 0:
                pos = g_PosBig;
                sc = 1.0;
                break;
            case 1:
                pos = g_PosSmall;
                sc = 0.5;
                break;
            case 2:
                pos = g_PosTiny;
                sc = 0.1;
                break;
        }
        this._super(filename);
        this.attr({
            x: pos.x,
            y: pos.y,
            scale: sc,
            anchorX: 0.5,
            anchorY: 0.5,
            tag: num,
            type: colorType
        });
    },

});
