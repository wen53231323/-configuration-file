var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤C❤","❤ヾ(^∀^)ﾉ ❤","❤python❤","❤٩(๑❛ᴗ❛๑)۶ ❤","❤java❤","❤( • ̀ω•́ )✧ ❤","❤C#❤","❤┗(•ω•;)┛❤","❤C++❤","❤(＾＿－)❤","❤SQL❤","❤(^_−)☆❤","❤javascrpit❤","❤ヾ(@^▽^@)ノ❤");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        2500,
        function() {
            $i.remove();
        });
    });
});