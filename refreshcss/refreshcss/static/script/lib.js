(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / 7.5 + 'px';
            window.FONTSIZE = clientWidth / 7.5;
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var src = [

    '<script src="../script/echarts.min.js"></script>',
    '<script src="../script/jquery1.11.3.min.js"></script>',
    '<script src="../script/underscore-min.js"></script>',
    '<script src="../script/swiper.min.js"></script>',
];

document.write(src.join(''));