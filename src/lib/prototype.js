/**
 * Array的原型扩展
 * @module Number
 */
/**
 * 数组遍历
 * @for Array
 * @method Number.prototype.each
 * @param {Function} op 回调操作函数，该函数回传每一个遍历的元素
 * @return {String}
 * @example
 	var a = [1,2,3,4];
 	a.each(function(ele){
		console.log(ele);
 	});
 */
Array.prototype.each = function(op) {
	var _this = this;
	var len = _this.length;
	for (var i = 0; i < len; i++) {
		var temp = op && op(i,_this[i]);
	}
};
/**
 * 删除指定位置的元素
 * @for Array
 * @method Number.prototype.del
 * @param {Number} index 索引
 * @return {Array} 返回删除的元素
 * @example
 	var a = [1,2,3,4];
 	a.del(1);
 */
Array.prototype.del = function(index) {
	if (typeof index == "undefined") {
		throw new Error('index is empty');
	} else {
		return this.splice(index, 1);
	}
}
/**
 * Date的原型扩展
 * @module Date
 */

/**
 * 时间格式化
 * @for Date
 * @method Date.prototype.format
 * @param sFmt {string} 格式化的字符串
    "%Y": 年
	"%m": 月
	"%d": 日
	"%H": 时
	"%M": 分
	"%S": 秒
 * @return {String}
 * @example 
     console.log(new Date().format('%Y-%m-%d %H:%M:%S');
     输出 2015-11-20 11:34:03
 */
Date.prototype.format = function(sFmt) {
    sFmt = sFmt || "%Y-%m-%d";//默认格式
    function LENFix(i, n) {
        var sRet = i.toString();
        while (sRet.length < n) {
            sRet = "0" + sRet;
        }
        return sRet;
    }
    var mapData = {
        "%Y": this.getFullYear(),
        "%m": LENFix(this.getMonth() + 1, 2),
        "%d": LENFix(this.getDate(), 2),
        "%H": LENFix(this.getHours(), 2),
        "%M": LENFix(this.getMinutes(), 2),
        "%S": LENFix(this.getSeconds(), 2)
    };
    return sFmt.replace(/%[YmdHMS]/g, function(sData) {
        return (mapData[sData]);
    });
};

/**
 * Math的原型扩展
 * @module Math
 */

/**
 * 指定范围（0~x）产生随机数
 * @for Math
 * @method Math.prototype.randomRange
 * @param range {Number} 在0~range-1之间产生随机数
 * @param isFirstZero {Boolean} 为true的时候，在0~range-1之间产生随机数；为false的时候，在1~range之间产生随机数
 * @return {Number}
 * @example 
     Math.randomRange(3);//随机产生1,2,3
     Math.randomRange(3,true);//随机产生0,1,2
 */
Math.randomRange = function(range,isFirstZero) {
    return parseInt(Math.random()*range)+((isFirstZero)?0:1);
};
/**
 * Number的原型扩展
 * @module Number
 */
/**
 * 格式化为两位数字
 * @for Number
 * @method Number.prototype.twoDigital
 * @return {String}
 */
Number.prototype.twoDigital = function() {
	var n = this.toString();
    return n < 10 ? '0' + n : n;
}
/**
 * String的原型扩展
 * @module String
 */

/**
 * 批量替换字符串
 * @for String
 * @method String.prototype.replaceAll
 * @param src {string} 要替换的子字符串
 * @param des {String} 要替换成的子字符串
 * @return {String}
 * @example 
     var a = 'hello,can you help me ?';
     a.replaceAll('you','me')
     输出hello, can me help me ?
 */
String.prototype.replaceAll = function(src, des) {
    return this.split(src).join(des);
};

/**
 * 用做过滤HTML标签里面的东东 比如这个例子里的<input value="XXX"> XXX就是要过滤的
 * @for String
 * @method String.prototype.escHtmlEp
 * @return {String}
 */
String.prototype.escHtmlEp = function() {
    return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r) {
        return "&#" + r.charCodeAt(0) + ";";
    });
};

/**
 * 用做过滤直接放到innerHtml里的,防止xss
 * @for String
 * @method String.prototype.escHtml
 * @return {String}
 */
String.prototype.escHtml = function() {
    return this.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r) {
        return "&#" + r.charCodeAt(0) + ";";
    }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g,
        "<br />"
    );
};

/**
 * 用做过滤直接放到HTML里js中的
 * @for String
 * @method String.prototype.escScript
 * @return {String}
 */
String.prototype.escScript = function() {
    return this.replace(/[\\"']/g, function(r) {
        return "\\" + r;
    }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
};

/**
 * 用做过滤直接URL参数里的 比如 http://a.b.com/abc_cgi?a=XXX XXX就是要过滤的
 * @for String
 * @method String.prototype.escUrl
 * @return {String}
 */
String.prototype.escUrl = function() {
    return escape(this).replace(/\+/g, "%2B");
};

/**
 * @for String
 * @method String.prototype.escMiniUrl
 * @return {String}
 */
String.prototype.escMiniUrl = function() {
    return this.replace(/%/g, "%25");
};

/**
 * 用做过滤直接放到&lt;a href="javascript:alert('XXX')"&gt;&lt;/a&gt;中的XXX
 * @for String
 * @method String.prototype.escHrefScript
 * @return {String}
 */
String.prototype.escHrefScript = function() {
    return this.escScript().escMiniUrl().escHtmlEp();
};

/**
 * 用做过滤直接放到正则表达式中的
 * @for String
 * @method String.prototype.escRegexp
 * @return {String}
 */
String.prototype.escRegexp = function() {
    return this.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a, b) {
        return "\\" + a;
    });
};

/**
 * 过滤开头和末尾的空格
 * @for String
 * @method String.prototype.trim
 * @return {String}
 */
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 过滤开头的空格
 * @for String
 * @method String.prototype.trimLeft
 * @return {String}
 */
String.prototype.trimLeft = function()
{
    return this.replace(/(^\s*)/g, "");
};

/**
 * 过滤末尾的空格
 * @for String
 * @method String.prototype.trimRight
 * @return {String}
 */
String.prototype.trimRight = function()
{
    return this.replace(/(\s*$)/g, "");
};

/**
 * 得到字符串的长度
 * @for String
 * @method String.prototype.getRealLen
 * @param isUTF8 {Boolean} 是否按照UTF8编码计算
 * @return {String}
 */
String.prototype.getRealLen = function(isUTF8) {
    var s = this;
    if (!isUTF8) {
        return s.replace(/[^\x00-\xFF]/g, "**").length;
    } else {
        var cc = s.replace(/[\x00-\xFF]/g, "");
        return (s.length - cc.length) + (encodeURI(cc).length / 3);
    }
};

/**
 * 截取字符串
 * @for String
 * @method String.prototype.cut
 * @param bitLen {Number} 截取的长度
 * @param tails {Number} 截取字符串后末尾添加的比如...
 * @return {String}
 */
String.prototype.cut = function(bitLen, tails) {
    var _this = this;
    var str = _this.toString();
    bitLen -= 0;
    tails = tails || '';
    if (isNaN(bitLen)) {
        return str;
    }
    var len = str.length,
        i = Math.min(Math.floor(bitLen / 2), len),
        cnt = str.slice(0, i).getRealLen();
    for (; i < len && cnt < bitLen; i++) {
        cnt += 1 + !/[\x00-\xFF]/.test(str.charAt(i));
    }
    return str.slice(0, cnt > bitLen ? i - 1 : i) + (i < len ? tails : '');
};

/**
 * 取得第一次满足条件的两段子字符串之间的字符串
 * @for String
 * @method String.prototype.between
 * @param sBegin {String} 起始子字符串
 * @param sEnd {String} 结束子字符串
 * @return {String}
 */
String.prototype.between = function(sBegin, sEnd) {
    var bp = this.indexOf(sBegin);
    if (bp === -1) {
        return ("");
    }
    bp += sBegin.length;
    var ep = this.indexOf(sEnd, bp);
    if (ep === -1) {
        return ("");
    }
    return this.substr(bp, ep - bp);
};