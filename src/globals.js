var g_red = cc.color(255, 0, 0);
var g_yellow = cc.color(245, 171, 53);
var g_blue = cc.color(25, 181, 254);

var g_PosTop = cc.p(314, 373);
var g_PosLeft = cc.p(187, 149);
var g_PosRight = cc.p(453, 149);

var g_PosBig = cc.p(221, 724);
var g_PosSmall = cc.p(524, 839);

if (typeof ColorType == "undefined") {
    var ColorType = {
        Red: 0, 
        Yellow: 1,
        Blue: 2
    };
};

if (typeof PosType == "undefined") {
    var PosType = {
        Top: 0, 
        Left: 1,
        Right: 2
    };
};

if (typeof TagOfLayer == "undefined") {
    var TagOfLayer = {
        MainLayer: 0,
        StatusLayer: 1
    };
};

var g_margin = 2;
var g_width = 414;
