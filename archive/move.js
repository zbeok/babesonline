// wip
function move(event) {
    var k = event.keyCode,
        chrId = document.getElementById('sprite'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 38 && y>225) {
                    y=y-10;
                } else if (k == 40 && y<400) {
                    y=y+10;
                }
                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37 && x>-50) {
                    x=x-10;
                    document.getElementById("sprite").src="http://41.media.tumblr.com/7ee17e278fbd7f9737a75a7b3c7e04fa/tumblr_nzrwi7wdcq1tqt1h6o10_r1_100.png";
                } else if (k == 39 && x<400) {
                    x=x+10;
                    document.getElementById("sprite").src="http://40.media.tumblr.com/e3ef604aaeddabd1001bab22e832b294/tumblr_nzrwi7wdcq1tqt1h6o5_100.png";
                }
                
                return x;
            }
        };

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);