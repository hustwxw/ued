(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / 11.25 + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var src = [

    '<script src="../js/lib/echarts.min.js"></script>',
    '<script src="../js/lib/jquery1.11.3.min.js"></script>',
    '<script src="../js/lib/underscore-min.js"></script>',
];

document.write(src.join(''));