var returnObj = {};

//引入外部库
require('./prototype.js');
var _ = require('lodash');
var axios = require('axios');
import $ from "jquery";


//参数处理库
returnObj.param = (function() {
    /**
     * 用于URL等参数解析
     * @for hna.param
     * @method hna.param.param
     * @param sValPairs {String} url表达式
     * @param sElemSep {String} 参数分隔符
     * @param sPairSep {String} 复制分隔符
     * @example 
     	var p = new hna.param.param("a=1&b=2","&", "=");
     	输出p实际上就是{a:1,b:2}，所以p['a']就是1，p['b']就是2
     */
    var _param = function(sValPairs, sElemSep, sPairSep) {
        if (sValPairs) {
            var aElem = sValPairs.toString().split(sElemSep);
            for (var i = 0; i < aElem.length; ++i) {
                var aPair = aElem[i].split(sPairSep);
                var temp = (aPair.length > 1) && (this[aPair[0]] = unescape(aPair[1]));
            }
        }
    };

    /**
     * 获取一个表达式串中的参数
     * @for hna.param
     * @method hna.param.getParam
     * @param sValPairs {String} 表达式 例如"a=1&b=2"
     * @param sName {String} 要获取的参数名 "a"
     * @param sElemSep {String} 参数分割符 "&"
     * @param sPairSep {String} 赋值的分隔符 "="
     * @return {String} 参数值
     * @example 例如 var a = hna.param.getParam("a=1&b=2", "a", "&", "=");
     */
    var _getParam = function(sValPairs, sName, sElemSep, sPairSep) {
        var xParam = new _param(sValPairs, sElemSep, sPairSep);
        return xParam[sName] ? xParam[sName] : "";
    };

    /**
     * 设置一段参数
     * @for hna.param
     * @method hna.pram.setParam 
     * @param sValPairs {String} 原有的表达式 例如"a=1"
     * @param sName {String} 新加入的参数名 
     * @param sValue {String} 新参数的值
     * @return {String} 新的表达式"a=1&b=2"
     * @example 例如 var sParam = hna.param.setParam("a=1", "b", "2");
     */
    var _setParam = function(sValPairs, sName, sValue) {
        sValPairs = sValPairs.toString();
        sName = sName.toString();
        sValue = sValue.toString().escUrl();
        var r = new RegExp("(^|\\W)" + sName + "=[^&]*", "g");
        return (sValPairs.match(r)) ? sValPairs.replace(r, "$1" + sName + "=" + sValue) : sValPairs + (sValPairs ? "&" : "") + sName + "=" + sValue;
    };

    /**
     * 返回当前url的参数
     * @for hna.param
     * @method hna.pram.locationSearch 
     * @example 例如 var p = hna.param.locationSearch();
     */
    var locationSearch = function() {

        return new _param(location.search.substr(1), '&', '=');

    };

    /**
     * 返回当前url的hash
     * @for hna.param
     * @method hna.pram.locationHash 
     * @example 例如 var p = hna.param.locationHash();
     */
    var locationHash = function() {

        return new _param(location.hash.substr(1), '&', '=');

    };

    /**
     * 返回当前url的search和hash所有参数
     * @for hna.param
     * @method hna.pram.location 
     * @param search {Boolean} 如果为true，那么当hash和search有相同参数的时候以search为准，否则以hash为准。默认以search为准。
     * @example 
     	例如 http://www.a.com?ticket=1&t=2&debug=15#hash=1&t=232
     	
     	var p = hna.param.location(true);
     	p就是Object {hash: "1", t: "2", ticket: "1", debug: "15"}

     	var p = hna.param.location(false);
     	p就是Object {ticket: "1", t: "232", debug: "15", hash: "1"}
	
    	var p = hna.param.location();//默认等同于传递参数true
     	p就是Object {ticket: "1", t: "2", debug: "15", hash: "1"}
     */
    var _location = function(search) {

        if (typeof search === "undefined") {
            search = true;
        }

        if (!_.isBoolean(search)) {
            search = true;
        }

        var searchObj = locationSearch();
        var hashObj = locationHash()

        return (search === true) ? _.assign(hashObj, searchObj) : _.assign(searchObj, hashObj);

    }

    return {
        param: _param,
        getParam: _getParam,
        setParam: _setParam,
        locationSearch: locationSearch,
        locationHash: locationHash,
        location: _location
    }

})();

//网络库
returnObj.net = (function() {

    var config = {
        //设置超时时间
        timeout: 30000,
        //返回数据类型
        responseType: 'json',

        transformRequest: [function(data) {
            // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等
            return data;
        }],

        transformResponse: [function(data) {
            // 这里提前处理返回的数据
            return data;
        }],
    };

    var get = function(url, data, success, fail) {

        var temp = [];
        for (var p in data) {
            temp.push([p, data[p]].join('='))
        }

        url = url + '?' + temp.join('&');
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(url, {}, config).then(function(res) {
            success && success(res.data, res.status, res.request);
        }).catch(function(err) {
            fail && fail(err);
        });
    }

    var post = function(url, data, success, fail) {
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

        axios.post(url, data, config).then(function(res) {
            success && success(res.data, res.status, res.request);
        }).catch(function(err) {
            fail && fail(err);
        });
    }


    return {
        get: get,
        post: post
    };

})();

//cookie类
returnObj.cookie = {
    /**
     * 查询可用窗口
     * @for eking.cookie
     * @method eking.cookie.findWindow 
     * @param sDomain {String} 域名
     * @param {Window} oWin 窗口对象
     * @return {Window}
     */
    findWindow: function(sDomain, oWin) {
        if (!oWin) {
            if (window.location.hostname.indexOf(sDomain) >= 0) {
                return window;
            }
            return arguments.callee.apply(this, [sDomain, top]);
        }
        try {
            if (oWin.location.hostname.indexOf(sDomain) >= 0) {
                return oWin;
            }
        } catch (e) {}
        for (var i = 0; i < oWin.frames.length; ++i) {
            var oFind = arguments.callee.apply(this, [sDomain, oWin.frames[i]]);
            if (oFind) {
                return oFind;
            }
        }
        return null;
    },
    /**
     * 设置cookie
     * @for eking.cookie
     * @method eking.cookie.set 
     * @param sName {String} cookie的key
     * @param sValue {String} cookie的value
     * @param nExpireSec {Number} cookie的过期时间，单位是秒
     * @param sDomain {String} cookie的域名
     * @param sPath {String} cookie的路径
     * @return {Boolean}
     */
    set: function(sName, sValue, nExpireSec, sDomain, sPath) {
        sDomain = sDomain;
        sPath = sPath || "/";
        var sCookie = sName + "=" + escape(sValue) + ";";

        if ((document.cookie.length + sCookie.length) >= 4096) {
            return false;
        }

        if (nExpireSec) {
            var oDate = new Date();
            oDate.setTime(oDate.getTime() + parseInt(nExpireSec) * 1000);
            sCookie += "expires=" + oDate.toUTCString() + ";";
        }
        if (sDomain) {
            sCookie += "domain=" + sDomain + ";";
        }
        if (sPath) {
            sCookie += "path=" + sPath + ";";
        }
        var oWin = this.findWindow(sDomain);
        if (!oWin) {
            return false;
        }
        try {
            oWin.document.cookie = sCookie;
        } catch (e) {
            return false;
        }
        return true;
    },
    /**
     * 获取cookie
     * @for eking.cookie
     * @method eking.cookie.get 
     * @param sName {String} cookie的key
     * @param sDomain {String} cookie的域名
     * @return {String}
     */
    get: function(sName, sDomain) {
        sDomain = sDomain;
        var oWin = sDomain ? (this.findWindow(sDomain) || window) : window;
        return returnObj.param.getParam(oWin.document.cookie, sName, "; ", "=");
    }
};

returnObj.calendar = (function() {

    var basic_css = ".caleBar{position:relative}.calebox h3,.calebox table,.calebox tbody,.calebox td,.calebox th,.calebox tr{margin:0;padding:0}.calebox td{width:28px}.calebox table{border-collapse:collapse}.calebox table th{cursor:default}.calebox table td,.calebox table th{text-align:center;height:27px;line-height:27px;font-weight:400;font-size:12px}.calebox table th{height:24px;line-height:24px}.calebox table td.dark{color:#a9a9a9}.calebox table td.hover,.calebox table td[data-date]:hover{cursor:pointer}.calebox{position:absolute;top:0;left:0;z-index:900}.calebox{width:207px;height:auto;background:#fff}.calebox.double{width:414px;border-radius:3px;background-color:#fff;border:1px solid #eb3c47}.caleWrap{overflow:hidden;width:100%}.bd_l_1{border-left:1px solid #eb3c47;margin-left:-1px}.calebox .caHd{height:23px;line-height:23px;font-size:18px;position:relative}.calebox .caHd .btn_l,.calebox .caHd .btn_r{display:block;width:14px;height:16px;position:absolute;top:0;font-family:'宋体';color:#fff;text-decoration:none}.calebox .caHd .btn_l{left:20px}.calebox .caHd .btn_r{right:20px}.calebox .caHd .yearM{font-size:14px;font-weight:400;width:207px;text-align:center}.calebox .caHd .yearM span{cursor:pointer}.calebox .cale{width:207px;height:auto;overflow:hidden}.tb_cale td.dark:hover{background-color:#F8F8F8!important;color:#a9a9a9!important}.calebox .fl{float:left!important}.calebox .fr{float:right!important}.calebox .l5{left:5px!important}.calebox .l20{left:20px!important}.calebox .r10{right:10px!important}.calebox .r15{right:15px!important}.calebox .month_select_box,.calebox .year_select_box{height:98px;width:190px;position:absolute;top:0;left:0;background-color:#fff;border-radius:5px;display:none;padding:10px}.calebox .year_select_box{height:auto}.calebox .month_select_box ul,.calebox .year_select_box ul{list-style:none;padding:0;margin:0}.calebox .month_select_box li,.calebox .year_select_box li{width:25%;text-align:center;height:25px;line-height:25px;cursor:pointer;display:inline-block;vertical-align:middle;font-size:12px}.calebox .month_select_box li.month_close,.calebox .year_select_box li.year_close{width:100%;text-align:center;height:30px;line-height:30px;cursor:pointer;display:inline-block;vertical-align:middle;font-size:12px}.calebox .year_select_box li.year_close,.calebox .year_select_box li.year_close_next,.calebox .year_select_box li.year_close_prev{width:33%}";
    var skin_css = ".calebox table td.hover,.calebox table td[data-date]:hover{background:#eb3c47;color:#fff}.tb_cale td.dark:hover{background-color:#F8F8F8!important;color:#a9a9a9!important;cursor:default!important}.calebox table td{border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calebox table th{border-bottom:1px solid #EB3C47;color:#EB3C47}.calebox{box-shadow:2px 2px 5px #666}.calebox .caHd{background:#EB3C47;color:#fff}.month_bg{background:#f8f8f8}.calebox .month_select_box,.calebox .year_select_box{border:1px solid #eb3c47;box-shadow:2px 2px 5px #666}.calebox .month_select_box li:hover,.calebox .year_select_box li:hover{background-color:#eb3c47;color:#fff}.calebox .month_select_box li.dark,.calebox .year_select_box li.dark{color:#a9a9a9}.calebox .month_select_box li.dark:hover,.calebox .year_select_box li.dark:hover{background-color:#fff;cursor:default}.calebox .month_select_box li.month_close,.calebox .year_select_box li.year_close,.calebox .year_select_box li.year_close_next,.calebox .year_select_box li.year_close_prev{background-color:#fff;color:#eb3c47}.calebox .year_select_box li.year_close_next.dark,.calebox .year_select_box li.year_close_prev.dark{color:#a9a9a9;cursor:default}";
    $("head").append("<style>" + basic_css + "</style>");
    $("head").append("<style>" + skin_css + "</style>");

    //节假日数据
    var HOLIDAY = {
        "946656000000": "元旦",
        "978278400000": "元旦",
        "1009814400000": "元旦",
        "1041350400000": "元旦",
        "1072886400000": "元旦",
        "1104508800000": "元旦",
        "1136044800000": "元旦",
        "1167580800000": "元旦",
        "1199116800000": "元旦",
        "1230739200000": "元旦",
        "1262275200000": "元旦",
        "1293811200000": "元旦",
        "1325347200000": "元旦",
        "1356969600000": "元旦",
        "1388505600000": "元旦",
        "1420041600000": "元旦",
        "1451577600000": "元旦",
        "1483200000000": "元旦",
        "1514736000000": "元旦",
        "1546272000000": "元旦",
        "1577808000000": "元旦",
        "1609430400000": "元旦",
        "1640966400000": "元旦",
        "1672502400000": "元旦",
        "1704038400000": "元旦",
        "1735660800000": "元旦",
        "1767196800000": "元旦",
        "1798732800000": "元旦",
        "1830268800000": "元旦",
        "1861891200000": "元旦",
        "1893427200000": "元旦",
        "1924963200000": "元旦",
        "1956499200000": "元旦",
        "1988121600000": "元旦",
        "2019657600000": "元旦",
        "2051193600000": "元旦",
        "2082729600000": "元旦",
        "2114352000000": "元旦",
        "2145888000000": "元旦",
        "2177424000000": "元旦",
        "2208960000000": "元旦",
        "2240582400000": "元旦",
        "2272118400000": "元旦",
        "2303654400000": "元旦",
        "2335190400000": "元旦",
        "2366812800000": "元旦",
        "2398348800000": "元旦",
        "2429884800000": "元旦",
        "2461420800000": "元旦",
        "2493043200000": "元旦",
        "970329600000": "国庆",
        "1001865600000": "国庆",
        "1033401600000": "国庆",
        "1064937600000": "国庆",
        "1096560000000": "国庆",
        "1128096000000": "国庆",
        "1159632000000": "国庆",
        "1191168000000": "国庆",
        "1222790400000": "国庆",
        "1254326400000": "国庆",
        "1285862400000": "国庆",
        "1317398400000": "国庆",
        "1349020800000": "国庆",
        "1380556800000": "国庆",
        "1412092800000": "国庆",
        "1443628800000": "国庆",
        "1475251200000": "国庆",
        "1506787200000": "国庆",
        "1538323200000": "国庆",
        "1569859200000": "国庆",
        "1601481600000": "国庆",
        "1633017600000": "国庆",
        "1664553600000": "国庆",
        "1696089600000": "国庆",
        "1727712000000": "国庆",
        "1759248000000": "国庆",
        "1790784000000": "国庆",
        "1822320000000": "国庆",
        "1853942400000": "国庆",
        "1885478400000": "国庆",
        "1917014400000": "国庆",
        "1948550400000": "国庆",
        "1980172800000": "国庆",
        "2011708800000": "国庆",
        "2043244800000": "国庆",
        "2074780800000": "国庆",
        "2106403200000": "国庆",
        "2137939200000": "国庆",
        "2169475200000": "国庆",
        "2201011200000": "国庆",
        "2232633600000": "国庆",
        "2264169600000": "国庆",
        "2295705600000": "国庆",
        "2327241600000": "国庆",
        "2358864000000": "国庆",
        "2390400000000": "国庆",
        "2421936000000": "国庆",
        "2453472000000": "国庆",
        "2485094400000": "国庆",
        "2516630400000": "国庆",
        "957110400000": "劳动",
        "988646400000": "劳动",
        "1020182400000": "劳动",
        "1051718400000": "劳动",
        "1083340800000": "劳动",
        "1114876800000": "劳动",
        "1146412800000": "劳动",
        "1177948800000": "劳动",
        "1209571200000": "劳动",
        "1241107200000": "劳动",
        "1272643200000": "劳动",
        "1304179200000": "劳动",
        "1335801600000": "劳动",
        "1367337600000": "劳动",
        "1398873600000": "劳动",
        "1430409600000": "劳动",
        "1462032000000": "劳动",
        "1493568000000": "劳动",
        "1525104000000": "劳动",
        "1556640000000": "劳动",
        "1588262400000": "劳动",
        "1619798400000": "劳动",
        "1651334400000": "劳动",
        "1682870400000": "劳动",
        "1714492800000": "劳动",
        "1746028800000": "劳动",
        "1777564800000": "劳动",
        "1809100800000": "劳动",
        "1840723200000": "劳动",
        "1872259200000": "劳动",
        "1903795200000": "劳动",
        "1935331200000": "劳动",
        "1966953600000": "劳动",
        "1998489600000": "劳动",
        "2030025600000": "劳动",
        "2061561600000": "劳动",
        "2093184000000": "劳动",
        "2124720000000": "劳动",
        "2156256000000": "劳动",
        "2187792000000": "劳动",
        "2219414400000": "劳动",
        "2250950400000": "劳动",
        "2282486400000": "劳动",
        "2314022400000": "劳动",
        "2345644800000": "劳动",
        "2377180800000": "劳动",
        "2408716800000": "劳动",
        "2440252800000": "劳动",
        "2471875200000": "劳动",
        "2503411200000": "劳动",
        "1485532800000": "春节",
        "1518710400000": "春节",
        "1549296000000": "春节",
        "1578153600000": "春节",
        "1491235200000": "清明",
        "1522857600000": "清明",
        "1554393600000": "清明",
        "1586016000000": "清明",
        // "1491235200000":"清明","1522857600000":"清明","1554393600000":"清明","1586016000000":"清明"
    };

    var WEEK = ["日", "一", "二", "三", "四", "五", "六"];
    var MONTH = ["", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    var dateUtil = {
        format: function(date, sFmt) {
            function LENFix(i, n) {
                var sRet = i.toString();
                while (sRet.length < n) {
                    sRet = "0" + sRet;
                }
                return sRet;
            }
            var mapData = {
                "%Y": date.getFullYear(),
                "%m": LENFix(date.getMonth() + 1, 2),
                "%d": LENFix(date.getDate(), 2),
                "%H": LENFix(date.getHours(), 2),
                "%M": LENFix(date.getMinutes(), 2),
                "%S": LENFix(date.getSeconds(), 2)
            };
            return sFmt.replace(/%[YmdHMS]/g, function(sData) {
                return (mapData[sData]);
            });
        },
        nextDay: function(date, i) {
            return new Date(date.valueOf() + 86400000 * i);
        },
        toPrevMonth: function(date) {
            return new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        },
        toNextMonth: function(date) {
            return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
        },
        toPrevYear: function(date) {
            return new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
        },
        toNextYear: function(date) {
            return new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
        }
    };

    //模板编译方法
    var getHtml = function() {
        return _.template.apply(this, arguments)(arguments[1]);
    };

    //构造存储数据格式的方法
    var getStorageDate = function(date, _this) {
        // var min = _this.minDate.valueOf();
        // var max = _this.maxDate.valueOf();
        var min = new Date(_this.minDate).valueOf();
        var max = new Date(_this.maxDate).valueOf();
        return {
            dateObj: date,
            desc: dateUtil.format(date, _this.dateFormat),
            date: (_this.showHoliday) ? (HOLIDAY[date.valueOf()] || date.getDate()) : (date.getDate()),
            dark: !(date.valueOf() >= min && date.valueOf() <= max)
        };
    };

    var Calendar = function(opt) {
        var _this = this;
        _this.input = (typeof opt.input == "string") ? $(opt.input) : opt.input;
        _this.dom = null; //日历控件的dom
        _this.domHtml = [
            '<div class="calebox <%=(data.length == 2)?\"double\":\"\"%>" style="display:none">',
            '   <div class="caHd">',
            '       <a class="btn_l l5" style="display:none;" href="javascript:void(0)" data-prev-year>&lt;&lt;</a>',
            '       <a class="btn_l" href="javascript:void(0)" data-prev-month>&lt;</a>',
            '       <a class="btn_r" href="javascript:void(0)" data-next-month>&gt;</a>',
            '       <a class="btn_r r10" style="display:none;" href="javascript:void(0)" data-next-year>&gt;&gt;</a>',
            '       <h3 class="yearM fl"><span data-flag="current" data-change-month="<%=data[0].currentMonth%>" data-change-year="<%=data[0].year%>"><%=data[0].month%></span> <span><%=data[0].year%></span></h3>',
            '       <%if(data.length == 2){ %>',
            '            <h3 class="yearM fr"><span data-flag="next" data-change-month="<%=data[1].nextMonth%>" data-change-year="<%=data[1].year%>"><%=data[1].month%></span> <span><%=data[1].year%></span></h3>',
            '       <%}%>',
            '   </div>',
            '   <div class="cf">',
            '       <%for(var i=0,len=data.length;i<len;i++){%>',
            '       <div class="cale <%=(i == 1)?\"fr bd_l_1\":\"fl\"%> month_bg">',
            '           <table width="100%" class="tb_cale">',
            '               <tr>',
            '                   <%for(var j=0;j<data[i].weekDesc.length;j++){%>',
            '                       <th><%=data[i].weekDesc[j]%></th>',
            '                   <%}%>',
            '               </tr>',
            '               <%for(var m=0;m<data[i].dates.length;m++){%>',
            '                   <%var d = data[i].dates[m];%>',
            '                   <%if(m % 7 == 0){%><tr><%}%>',
            '                   <%if(d != null){%>',
            '                       <td data-date="<%=d.desc%>" data-timestamp="<%=d.dateObj.valueOf()%>" class="<%=(d.dark?\'dark\':\'\')%>"><%=d.date%></td>',
            '                   <%}else{%>',
            '                       <td></td>',
            '                   <%}%>',
            '                   <%if(m % 7 == 6){%></tr><%}%>',
            '               <%}%>',
            '           </table>',
            '       </div>',
            '       <%}%>',
            '   </div>',
            '   <div class="month_select_box" onselectstart="return false;"><ul></ul></div>',
            '   <div class="year_select_box" onselectstart="return false;"><ul></ul></div>',
            '</div>'
        ].join('');
        _this.isDoubleMonth = opt.isDoubleMonth || false;
        _this.date = opt.date || new Date();
        _this.defaultDate = opt.defaultDate || new Date();
        _this.lang = opt.lang || "zh-cn";
        _this._pos = {
            left: _this.input.offset().left,
            top: _this.input.offset().top + _this.input.outerHeight() + 2
        }; //位置信息
        _this.minDate = opt.minDate || "2010/01/01";
        _this.maxDate = opt.maxDate || "2020/01/01";
        _this.dateFormat = opt.dateFormat || "%Y-%m-%d";
        _this.showHoliday = opt.showHoliday || false;

        //样式处理
        _this.zIndex = opt.zIndex || false;

        //钩子函数
        _this.onSelectedDate = opt.onSelectedDate || function() {};
        _this.onChangeMonth = opt.onChangeMonth || function() {};
        _this.onChangeYear = opt.onChangeYear || function() {};
        _this.onFocus = opt.onFocus || function() {};
        _this.onEmptyInputBlur = opt.onEmptyInputBlur || function() {};

        _this.init();
    };

    var cp = Calendar.prototype;

    cp.isLeapYear = function(year) {
        return (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
    }

    cp.getDaysByYearAndMonth = function(year, month) {
        return [0, 31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    };

    cp._getData = function() {
        var _this = this;
        var data = [];
        var week = WEEK;
        var month = MONTH;

        /****一个月的日期，7*5的二维数组*****/
        var dates = [];
        for (var i = 0; i < 42; i++) {
            dates.push(null);
        }
        /****一个月的日期，7*5的二维数组*****/
        /****计算当月*****/
        var currentYear = _this.defaultDate.getFullYear();
        var currentMonth = _this.defaultDate.getMonth() + 1;
        var currentStart = new Date(currentYear, currentMonth - 1, 1);
        dates[currentStart.getDay()] = getStorageDate(currentStart, _this);
        //计算当月的总天数
        var totalDays = _this.getDaysByYearAndMonth(currentYear, currentMonth);
        for (var i = 1; i < totalDays; i++) {
            dates[currentStart.getDay() + i] = getStorageDate(dateUtil.nextDay(currentStart, i), _this);
        }
        /****计算当月*****/
        data.push({
            weekDesc: week,
            dates: dates,
            month: month[currentMonth],
            currentMonth: currentMonth,
            year: currentYear
        });
        //双月份
        if (_this.isDoubleMonth) {
            /****一个月的日期，7*5的二维数组*****/
            var nextDates = [];
            for (var i = 0; i < 42; i++) {
                nextDates.push(null);
            }
            /****一个月的日期，7*5的二维数组*****/
            /****计算下个月*****/
            var nextYear = (currentMonth == 12) ? (currentYear + 1) : currentYear;
            var nextMonth = (currentMonth == 12) ? 1 : (currentMonth + 1);
            // alert([nextYear,currentMonth])
            var nextStart = new Date(nextYear, nextMonth - 1, 1);
            nextDates[nextStart.getDay()] = getStorageDate(nextStart, _this);
            //计算当月的总天数
            var totalDays = _this.getDaysByYearAndMonth(nextYear, nextMonth);
            for (var i = 1; i < totalDays; i++) {
                nextDates[nextStart.getDay() + i] = getStorageDate(dateUtil.nextDay(nextStart, i), _this);
            }
            data.push({
                weekDesc: week,
                dates: nextDates,
                month: month[nextMonth],
                nextMonth: nextMonth,
                year: nextYear
            });
            /****计算下个月*****/
        }
        return data;
    };

    cp.render = function() {
        var _this = this;
        //移除旧的dom
        if (_this.dom != null) {
            _this.dom.remove();
        }
        _this.dom = $(getHtml(_this.domHtml, {
            data: _this._getData()
        }));
        $('body').append(_this.dom);
        if (_this.zIndex == true) {
            _this.dom.css({
                'z-index': '10240000'
            });
        }
        _this._addTag();
        _this._bindEvent();

        _this._highlighDate();
    };

    cp._highlighDate = function() {
        var _this = this;
        _this.dom.find("[data-date]").removeClass('hover');
        _this.dom.find("[data-date='" + dateUtil.format(_this.date, _this.dateFormat) + "']").addClass('hover');
    };

    cp._bindEvent = function() {
        var _this = this;
        _this.input.unbind();

        _this.input.on({
            "focus": function(e) {
                e.stopPropagation();
                $(".calebox").hide(); //存在多个日历对象的情况下先隐藏全部
                _this._pos = {
                    left: _this.input.offset().left,
                    top: _this.input.offset().top + _this.input.outerHeight() + 2
                };
                _this.dom.css(_this._pos).show();
                var _date = _this.date = _this.input.val() == '' ? new Date() : new Date(_this.input.val());
                _this.setSpanDate();
                //_this.setDate(_date);   
                _this.onFocus(_this.input);
            },
            "blur": function() {
                setTimeout(function() {
                    _this.onEmptyInputBlur(_this.input);
                }, 100);
                if (_this.input.val().trim() == "") {
                    return false;
                }
                var _f = _this.dateFormat;
                _f = _f.replace(/%[Ymd]/g, function(ele) {
                    return {
                        "%Y": "\\d{4}",
                        "%m": "\\d{2}",
                        "%d": "\\d{2}"
                    }[ele];
                });
                if (!new RegExp(_f).test(_this.input.val().trim())) {
                    _this.input.val("");
                    alert("输入格式有误，将撤销输入，请按照格式输入：" + _this.dateFormat.replace(/%[Ymd]/g, function(ele) {
                        return {
                            "%Y": "yyyy",
                            "%m": "mm",
                            "%d": "dd"
                        }[ele];
                    }));
                }
            },
            "keyup": function(e) {

            }
        });
        _this.dom.find("td[data-date]").on("click", function() {
            if ($(this).hasClass("dark")) {
                return false;
            }
            _this.input.val($(this).data("date"));
            _this.onSelectedDate($(this).data("date"), _this);
            _this.close();
        });
        //下一月
        _this.dom.find("[data-prev-month]").on("click", function() {
            _this.defaultDate = dateUtil.toPrevMonth(_this.defaultDate);
            _this.render();
            _this.dom.show().css(_this._pos);
        });
        //上一月
        _this.dom.find("[data-next-month]").on("click", function() {
            _this.defaultDate = dateUtil.toNextMonth(_this.defaultDate);
            _this.render();
            _this.dom.show().css(_this._pos);
        });
        //下一年
        _this.dom.find("[data-prev-year]").on("click", function() {
            _this.defaultDate = dateUtil.toPrevYear(_this.defaultDate);
            _this.render();
            _this.dom.show().css(_this._pos);
        });
        //上一年
        _this.dom.find("[data-next-year]").on("click", function() {
            _this.defaultDate = dateUtil.toNextYear(_this.defaultDate);
            _this.render();
            _this.dom.show().css(_this._pos);
        });

        //负责处理年份置灰不可选的函数
        var _yearDark = function(has1900, has2050) {
            var selbox = _this.dom.find(".year_select_box");
            var prev = selbox.parent().find(".year_close_prev");
            var next = selbox.parent().find(".year_close_next");
            //如果存在1900那就置灰               
            if (has1900) {
                prev.addClass("dark");
            } else {
                prev.removeClass("dark");
            }
            //如果存在2050那就置灰               
            if (has2050) {
                next.addClass("dark");
            } else {
                next.removeClass("dark");
            }
        };

        //改月份
        _this.dom.find("[data-change-month]").on("click", function() {
            var that = $(this);
            var month = that.data("change-month");
            var year = that.data("change-year");
            var flag = that.data('flag');
            //生成月份选择器
            _this.dom.find(".month_select_box").css({
                left: that.position().left - 70,
                top: that.position().top + that.outerHeight() + 10
            }).show().find('ul').html(getHtml('<%for(var i=1;i<data.length;i++){%><li data-month-index="<%=i%>" class="_date_selector"><%=data[i]%></li><%}%>', {
                data: MONTH
            }) + "<li class='month_close _date_selector'>关闭</li>").parent().find(".month_close").on("click", function() {
                _this.dom.find(".month_select_box").hide();
            });

            _this.dom.find('[data-month-index]').on('click', function() {
                var _month = $(this).data('month-index');
                _this.defaultDate = new Date(year, _month - 1, 1);
                if (flag == "next") { //如果改变的是双月份UI的下个月的话
                    _this.defaultDate = dateUtil.toPrevMonth(_this.defaultDate);
                }
                _this.render();
                _this.dom.show().css(_this._pos);
                _this.onChangeMonth(_month);
            });

            _this.dom.find(".year_select_box").hide();
        }).next().on("click", function() {
            //改年份
            var that = $(this);
            var month = that.prev().data("change-month");
            var year = that.prev().data("change-year");
            var flag = that.prev().data('flag');
            var yearArr = [];
            for (var i = year - 10; i <= year + 10; i++) {
                yearArr.push(i);
            }
            //生成年份选择器
            _this.dom.find(".year_select_box").css({
                left: that.position().left - 70,
                top: that.position().top + that.outerHeight() + 10
            }).show().find('ul').html(getHtml('<%for(var i=1;i<data.length;i++){%><li data-year-index="<%=data[i]%>" class="_date_selector <%=(data[i]<1900||data[i]>2050)?\'dark\':\'\'%>"><%=data[i]%></li><%}%>', {
                data: yearArr
            }) + "<li class='year_close_prev _date_selector'>上一页</li><li class='year_close _date_selector'>关闭</li><li class='year_close_next _date_selector'>下一页</li>").parent().find(".year_close").on("click", function() {
                _this.dom.find(".year_select_box").hide();
            }).parent().find(".year_close_prev").on('click', function() {
                var prev = $(this);
                //不可选状态直接返回
                if (prev.hasClass('dark')) {
                    return false;
                }
                var has1900 = false;
                var has2050 = false;
                $("[data-year-index]").each(function(i, ele) {
                    var val = $(ele).html() - 20;
                    $(ele).attr("data-year-index", val).html(val);
                    //小于1900年或者大于2050年的全部置为不可选
                    if (val < 1900 || val > 2050) {
                        $(ele).addClass("dark");
                    } else {
                        $(ele).removeClass("dark");
                    }
                    //如果存在1900那就做个标记
                    if (val == 1900) {
                        has1900 = true;
                    }
                    //如果存在2050那就做个标记
                    if (val == 2050) {
                        has2050 = true;
                    }
                });
                _yearDark(has1900, has2050);

            }).parent().find(".year_close_next").on('click', function() {
                var next = $(this);
                //不可选状态直接返回
                if (next.hasClass('dark')) {
                    return false;
                }
                var has1900 = false;
                var has2050 = false;
                $("[data-year-index]").each(function(i, ele) {
                    var val = $(ele).html() - 0 + 20;
                    $(ele).attr("data-year-index", val).html(val); //加法先强制转换成为数字
                    //小于1900年或者大于2050年的全部置为不可选
                    if (val < 1900 || val > 2050) {
                        $(ele).addClass("dark");
                    } else {
                        $(ele).removeClass("dark");
                    }
                    //如果存在1900那就做个标记
                    if (val == 1900) {
                        has1900 = true;
                    }
                    //如果存在2050那就做个标记
                    if (val == 2050) {
                        has2050 = true;
                    }
                });
                _yearDark(has1900, has2050);
            });

            _this.dom.find('[data-year-index]').on('click', function() {
                if ($(this).hasClass("dark")) {
                    return false;
                }
                var _year = $(this).data('year-index');
                _this.defaultDate = new Date(_year, month - 1, 1);
                if (flag == "next") { //如果改变的是双月份UI的下个月的话
                    _this.defaultDate = dateUtil.toPrevMonth(_this.defaultDate);
                }
                _this.render();
                _this.dom.show().css(_this._pos);
                _this.onChangeYear(_year);
            });

            _this.dom.find(".month_select_box").hide();

            _yearDark($.grep(yearArr, function(ele, i) {
                return ele == 1900
            }).length == 1, $.grep(yearArr, function(ele, i) {
                return ele == 2050
            }).length == 1);
        });
    };

    cp.close = function() {
        var _this = this;
        _this.dom.hide();
    }

    cp._addTag = function() {
        var _this = this;
        var _date_selector = "_date_selector";

        var _fn = function(dom) {
            var len = dom.children().length;
            for (var i = 0; i < len; i++) {
                var t = dom.children().eq(i);
                t.addClass(_date_selector);
                _fn(t);
            }
        };
        _fn(_this.dom);
        _this.input.addClass(_date_selector);
        _this.dom.addClass(_date_selector);

        $("body").on("click", function(e) {
            if (!$(e.target).hasClass(_date_selector)) {
                _this.close();
            }
        })
    }

    cp.getUtil = function() {
        var _this = this;
        return {
            isDoubleMonth: _this.isDoubleMonth
        }
    };

    cp.setDate = function(date) {
        var _this = this;
        // _this.defaultDate = date;
        _this.date = date;
        _this.defaultDate = date;
        _this._highlighDate();
        _this.render();
        _this.dom.show().css(_this._pos);
    };
    cp.setSpanDate = function() {
        var _this = this;
        if (_this.input.data("maxdate") && $(_this.input.data("maxdate")).val()) {
            _this.maxDate = $(_this.input.data("maxdate")).val();
        } else if (_this.input.data("mindate") && $(_this.input.data("mindate")).val()) {
            _this.minDate = $(_this.input.data("mindate")).val();
            _this.date = new Date(_this.minDate);
        }
        _this.setDate(_this.date);
    };
    cp.init = function() {
        var _this = this;
        _this.render();
    };

    return Calendar;

})();


returnObj.city = (function() {

    var css = '.city_selector{display:block;min-width:300px;width:auto;height:auto;position:absolute;top:0;left:0;cursor:default;display:none;z-index:1024}.city_box{display:block;border:1px solid #EB3C47;font:12px/1.5 tahoma,arial;background-color:white;width:600px;border-radius:3px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.20);}.city_box .intel{margin:15px 0 5px 0;position:relative;display:none}.city_box .intel>div{display:inline-block}.city_box .intel span{display:inline-block;background-color:#e1effe;text-align:center;padding:5px 0;cursor:pointer;margin-left:10px}.city_box .intel span:hover{opacity:.8;filter:alpha(opacity=0.8)}.city_box .intel i{display:inline-block;vertical-align:middle;width:0;height:0;border-color:transparent transparent transparent transparent;border-style:dashed dashed solid dashed;top:20px;position:relative}.city_box .intel>div.sel i{border-color:#e1effe transparent transparent transparent}.city_box ul{border-bottom:1px solid #CCCCCC;height:28px;z-index:1024}.city_box ul li{list-style:none}.city_box ul li{display:inline-block;width:72px;text-align:center;position:relative;font-size:14px;color:#242A36;cursor:pointer}.city_box ul li.on{background-color:#EB3C47;color:#fff;line-height:29px;}.city_box .city_list>div{margin:20px 0 10px;height:auto}.city_box .city_list dl{}.city_box .city_list dl dt{float:left;width:70px;text-align:center;color:#EB3C47;font-weight:bold;text-indent:5px;font-family:"Lucida console","consolas","courier new";line-height:22px;font-size:14px;display:inline-block;vertical-align:top}.city_box .city_list dl dd{font-size:14px;display:block;margin-left:72px}.city_box .city_list dl dd a{margin-bottom:10px;min-width:72px;float:left;text-align: center;line-height:22px;display:inline-block;color:#000;text-decoration:none}.city_box .city_list dl dd a:hover{color:#EB3C47;}.city_box .city_list .city_area{display:none}.city_option{border:1px solid #EB3C47;display:none}.city_option ul{box-shadow:2px 2px 3px rgba(0,0,0,0.3);z-index:1024;background-color:#fff}.city_option li{cursor:pointer}.city_option li span{display:inline-block;width:48%}.city_option li:hover,.city_option li.on{background-color:#EB3C47;color:#fff;}.city_option li span{padding:5px 0;font-size:14px}.city_option li span.city_name{text-align:left;padding-left:2%}.city_option li span.nonedata{font-style:italic;width:90%;padding:10px}.city_option li span.city_code{text-align:right;padding-right:2%;font-style:italic}';
    $("head").append("<style>" + css + "</style>");

    //模板编译方法
    var getHtml = function() {
        return _.template.apply(this, arguments)(arguments[1]);
    };

    var allCity = [
        "福州|fuzhou|FOC", "西安|xian|XIY", "哈尔滨|harbin|HRB", "呼和浩特|huhehaote|HET", "宁波|ningbo|NGB", "宜昌|yichang|YIH", "海拉尔|hailaer|HLD", "天津|tianjin|TSN", "珠海|zhuhai|ZUH", "海口|haikou|HAK", "太原|taiyuan|TYN", "昆明|kunming|KMG", "郑州|zhengzhou|CGO", "上海浦东|shanghaipudong|PVG", "南京|nanjing|NKG", "南通|nantong|NTG", "三亚|sanya|SYX", "青岛|qingdao|TAO", "长沙|changsha|CSX", "贵阳|guiyang|KWE", "银川|yinchuan|INC", "遵义市|zunyishi|ZYI", "舟山|zhoushan|HSN", "重庆|chongqing|CKG", "池州|chizhou|JUH", "临沂市|linyishi|LYI", "兰州|lanzhou|LHW", "柳州|liuzhou|LZH", "台州|taizhou|HYN", "襄阳|xiangfan|XFN", "桂林|guilin|KWL", "揭阳|jieyang|SWA", "南昌|nanchang|KHN", "泉州|quanzhou|JJN", "忻州|xinzhou|WUT", "石家庄|shijiazhuang|SJW"

        //新增8个热门城市
        , "南宁|nanning|NNG", "烟台|yantai|YNT", "郑州|zhengzhou|CGO", "襄阳|xiangfan|XFN", "济南|jinan|TNA", "合肥|hefei|HFE", "北京|beijing|PEK", "抚远|fuyuan|FYJ", "广州|guangzhou|CAN", "深圳|shenzhen|SZX", "杭州|hangzhou|HGH", "齐齐哈尔|qiqihaer|NDG",
        "牡丹江|mudanjiang|MDG",
        "佳木斯|jiamusi|JMU",
        "黑河市|heiheshi|HEK",
        "依兰市|yilanshi|YLN",
        "长春|zhangchun|CGQ",
        "延吉|yanji|YNJ",
        "吉林|jilin|JIL",
        "大连|dalian|DLC",
        "沈阳|shenyang|SHE",
        "锦州|jinzhou|JNZ",
        "丹东|dandong|DDG",
        "朝阳市|chaoyangshi|CHG",
        "鞍山市|anshanshi|IOB",
        "长海市|zhanghaishi|CNI",
        "包头|baotou|BAV",
        "乌兰浩特市|wulanhaoteshi|HLH",
        "张家界|zhangjiajie|DYG",
        "常德|changde|CGD",
        "衡阳市|hengyangshi|HNY",
        "怀化|huaihua|HJJ",
        "永州|yongzhou|LLF",
        "梅县市|meixianshi|MXZ",
        "汕头|shantou|SWA",
        "湛江市|zhanjiangshi|ZHA",
        "惠州|huizhou|HUZ",
        "佛山|foshan|ZCP",
        "兴宁|xingning|XIN",
        "北海|beihai|BHY",
        "梧州|wuzhou|YUZ",
        "义乌市|yiwushi|YIW",
        "衢州市|quzhoushi|JUZ",
        "徐州|xuzhou|XUZ",
        "连云港|lianyungang|LYG",
        "盐城市|yanchengshi|YNZ",
        "常州|changzhou|CZX",
        "无锡|wuxi|WUX",
        "上海虹桥|shanghaihongqiao|SHA",
        "厦门|xiamen|XMN",
        "晋江市|jinjiangshi|JJN",
        "武夷山|wuyishan|WUS",
        "连城市|lianchengshi|LCX",
        "丽江|lijiang|LJG",
        "西双版纳|xishuangbanna|JHG",
        "大理市|dalishi|DLU",
        "芒市|mangshi|LUM",
        "迪庆|diqing|DIG",
        "铜仁|tongren|TEN",
        "安顺|anshun|AVA",
        "兴义|xingyi|ACX",
        "汉中|hanzhong|HZG",
        "延安|yanan|ENY",
        "安康|ankang|AKA",
        "榆林|yulin|UYN",
        "敦煌市|dunhuangshi|DNH",
        "嘉峪关市|jiayuguanshi|JGN",
        "庆阳|qingyang|IQN",
        "酒泉|jiuquan|CHW",
        "西宁|xining|XNN",
        "格尔木市|geermushi|GOQ",
        "乌鲁木齐|wulumuqi|URC",
        "和田市|hetianshi|HTN",
        "伊宁市|yiningshi|YIN",
        "克拉玛依市|kelamayishi|KRY",
        "塔城市|tachengshi|TCG",
        "锡林浩特市|xilinhaoteshi|XIL",
        "赤峰市|chifengshi|CIF",
        "通辽市|tongliaoshi|TGO",
        "乌海市|wuhaishi|WUA",
        "鄂尔多斯市|eerduosishi|DSN",
        "北京南苑|beijingnanyuan|NAY",
        "秦皇岛|qinhuangdao|SHP",
        "大同|datong|DAT",
        "长治|zhangzhi|CIH",
        "运城|yuncheng|YCU",
        "洛阳|luoyang|LYA",
        "南阳|nanyang|NNY",
        "安阳|anyang|AYN",
        "武汉|wuhan|WUH",
        "荆州|jingzhou|SHS",
        "恩施|enshi|ENH",
        "百色|baise|AEB",
        "威海|weihai|WEH",
        "潍坊|weifang|WEF",
        "泗水|sishui|SUB",
        "济宁市|jiningshi|JNG",
        "东营|dongying|DOY",
        "九江|jiujiang|JIU",
        "景德镇|jingdezhen|JDZ",
        "赣州|ganzhou|KOW",
        "井冈山|jinggangshan|JGS",
        "黄山屯|huangshantun|TXN",
        "安庆|anqing|AQG",
        "阜阳|fuyang|FUG",
        "温州|wenzhou|WNZ",
        "思茅市|simaoshi|SYM",
        "保山市|baoshanshi|BSD",
        "昭通市|zhaotongshi|ZAT",
        "临沧|lincang|LNJ",
        "元谋|yuanmou|YUA",
        "拉萨|lasa|LXA",
        "昌都|changdou|BPX",
        "林芝|linzhi|LZY",
        "成都|chengdou|CTU",
        "绵阳|mianyang|MIG",
        "宜宾|yibin|YBP",
        "泸州|luzhou|LZO",
        "九寨沟|jiuzhaigou|JZH",
        "攀枝花|panzhihua|PZI",
        "西昌|xichang|XIC",
        "达县|daxian|DAX",
        "南充|nanchong|NAO",
        "广汉市|guanghanshi|GHN",
        "广元|guangyuan|GYS",
        "康定|kangding|KGT",
        "重庆万州|zhongqingwanzhou|WXN",
        "万县|wanxian|LIA",
        "阿勒泰市|aletaishi|AAT",
        "阿克苏市|akesushi|AKU",
        "库尔勒市|kuerleshi|KRL",
        "库车市|kucheshi|KCA",
        "喀什市|kashishi|KHG",
        "且末市|qiemoshi|IQM",
        "哈密市|hamishi|HMI",
        "富蕴市|fuyunshi|FYN",
        "那拉提|neilati|NLT",
        "满洲里|manzhouli|NZH"
    ];

    var formateCitys = function(allCity, hotSize) {
        var newCityData = [];
        $.each(allCity, function(i, v) {
            var city = v.split("|");
            var cityObj = {};

            cityObj.city = city[0];
            cityObj.pinyin = city[1];
            cityObj.code = city[2];
            cityObj.intl = false;

            if (i < hotSize) {
                cityObj.hot = true;
            }
            newCityData.push(cityObj);
        });
        return newCityData;
    };

    var defaultCityData = formateCitys(allCity, 36);

    function _members(context, opt) {
        var ct = context;
        ct.cityData = opt.cityData || defaultCityData;
        ct.domesticData = []; //国内城市数据
        ct.internationalData = []; //国际城市数据
        ct.hotData = []; //热门城市数据
        ct.selectData = null; //控件选中的城市
        ct.editTab = opt.editTab || []; //自定义的Tab标签
        ct.isDomestic = (typeof opt.isDomestic == "undefined") ? true : opt.isDomestic;; //当前状态是国内还是国际



        ct.input = (typeof opt.input == "string") ? $(opt.input) : opt.input; //输入框
        //转换数据
        ct._formatData();
        ct.tmpl = [
            "<div class='city_selector'>",
            "   <div class='city_box'>",
            "       <p style='color:#888888;display:none'>搜索支持汉字/拼音/三字码</p>",
            // "        <div class='intel'>",
            // "            <div data-flag='home' class='sel'><span>国内城市</span><i></i></div>",
            // "            <div data-flag='intel'><span>国际城市</span><i></i></div>",
            // "        </div>",
            "       <ul class='city_tab'>",
            "       </ul>",
            "       <div class='city_list'>",
            "           <div><dl><dt>A</dt><dd><a href='#'>adsf</a><a href='#'>adsf</a><a href='#'>adsf</a></dd></dl><dl><dt>A</dt><dd><a href='#'>adsf</a><a href='#'>adsf</a><a href='#'>adsf</a></dd></dl><dl><dt>A</dt><dd><a href='#'>adsf</a><a href='#'>adsf</a><a href='#'>adsf</a></dd></dl></div>",
            "       </div>",
            "   </div>",
            "   <div class='city_option'>",
            "       <ul>",
            "           ",
            "       </ul>",
            "   </div>",
            "</div>",
        ].join(""); //模板
        ct.city_selector = $(ct.tmpl); //模板变成的DOM
        ct.box = ct.city_selector.find(".city_box");
        ct.option = ct.city_selector.find(".city_option");
        // ct.areaTipWidth = opt.areaTipWidth || 200; //“国内城市”，“国际城市”的宽度
        ct.width = opt.width || 450; //选择框宽度
        ct.tab = opt.tab || []; //tab
        ct.isShowHot = (typeof opt.isShowHot == "undefined") ? true : opt.isShowHot; //是否展示热门城市        
        // ct.isShowAll = (typeof opt.isShowAll == "undefined") ? false : opt.isShowAll; //是否展示国际国内

        //钩子函数
        ct.onSelectCity = opt.onSelectCity || function() {}; //选择城市后的狗子回调函数
        ct.onInputFocus = opt.onInputFocus || function() {};
        ct.onInputBlur = opt.onInputBlur || function() {};
        ct.onInputKeyup = opt.onInputKeyup || function() {};

        // //计算小三角距离
        // var _w1 = 10;
        // var _w2 = ct.areaTipWidth;
        // ct.city_selector.find(".city_box .intel i").css({
        //     'border-width': _w1 + 'px',
        //     'left': "-" + (_w2 / 2 + _w1) + 'px'
        // });
        // ct.city_selector.find(".city_box .intel span").width(_w2);

        // //适配样式
        ct.city_selector.find(".city_box").width(ct.width);

        // //展示国际国内
        // if (ct.isShowAll) {
        //     ct.city_selector.find(".intel").show();
        // }

        //在input上绑定City对象
        ct.input.data("citySelector", ct);

    }

    /**
     * 城市类
     * @class City 
     * @constructor
     * @example
        var citydata = [
            {code : "AKU",name : "阿克苏机场",city : "阿克苏",pinyin : "aksu",intl : false , hot:true},
            {code : "AAT",name : "阿勒泰机场",city : "阿勒泰",pinyin : "altay",intl : false },
            {code : "AKA",name : "安康机场",city : "安康",pinyin : "ankang",intl : false },
            {code : "AQG",name : "安庆(天柱山)机场",city : "安庆",pinyin : "anqing",intl : false },
            {code : "AOG",name : "鞍山机场",city : "鞍山",pinyin : "anshan",intl : false }
        ];
        var city = new City({
            cityData : citydata,//城市数据
            input : $("#ip"),//绑定的dom
            isShowHot:true,//是否展示热门城市
            isShowAll:true,//是否展示所有城市
            tab:["ABCDE","FGHIJK","LMN","OPQ","RSTUVW","XYZ"],//城市控件tab选项
            //选择钩子函数
            onSelectCity:function(data){
                console.log(data);
            }
        });
    */
    var City = function(opt) {

        var _this = this;
        opt = opt || {};

        //处理成员属性
        _members(_this, opt);

        _this._init();

        _this._renderCity();

        _this._bindEvent();
    };

    var cp = City.prototype;

    cp._init = function() {
        var _this = this;

        _this.city_selector.css({
            'left': _this.input.offset().left,
            'top': _this.input.offset().top + _this.input.outerHeight(),
            'marginTop': '2px',
            'min-width': _this.input.outerWidth()
        });
        $("body").append(_this.city_selector);
    };

    cp._formatData = function() {
        //转换城市数据
        var _this = this;
        //国内
        var home = $.grep(_this.cityData, function(ele, i) {
            return ele.intl == false;
        });
        //国际
        var i18n = $.grep(_this.cityData, function(ele, i) {
            return ele.intl == true;
        });
        //热门
        var hot = $.grep(_this.cityData, function(ele, i) {
            return ele.hot == true && ele.intl == !_this.isDomestic;
        });

        function _inner(data) {
            var result = {};
            for (var i = 0, len = data.length; i < len; i++) {
                var letter = data[i].pinyin.charAt(0).toUpperCase();
                if (typeof result[letter] == "undefined") {
                    result[letter] = {
                        cities: []
                    };
                }
                result[letter].cities.push(data[i]);
            }
            return result;
        }

        function _innerHot(hot) {

            return hot;
        }

        _this.domesticData = _inner(home);
        _this.internationalData = _inner(i18n);
        _this.hotData = _innerHot(hot);

    };

    cp._renderCity = function() {
        var _this = this;

        _this.city_selector.find(".city_list").html("");
        _this.city_selector.find("ul.city_tab").html("");

        var mainData = (_this.isDomestic) ? _this.domesticData : _this.internationalData;
        var cityPanel = [];

        //生成tab     
        for (var i = 0, len = _this.tab.length; i < len; i++) {
            _this.city_selector.find("ul.city_tab").append("<li class='" + (i == 0 ? 'on' : '') + "'>" + _this.tab[i] + "</li>");

            //渲染城市列表
            var cities = [];
            for (var j = 0, jLen = _this.tab[i].length; j < jLen; j++) {
                cities.push({
                    index: _this.tab[i][j],
                    data: mainData[_this.tab[i][j]] || {
                        cities: []
                    }
                });
            }

            cityPanel.push(cities);
        }

        //处理热门tab
        if (_this.isShowHot) {
            _this.city_selector.find("ul.city_tab>li:eq(0)").removeClass("on").before("<li class='on'>热门</li>");
        }
        // console.log(cityPanel);
        var tmpl = "<div><dl><dt>A</dt><dd><a href='#'>adsf</a></dd></dl></div>";
        var tmpl = [
            '<%for(var i=0,len=data.length;i<len;i++){%>',
            '<div class="city_area">',
            '   <%for(var j=0,l=data[i].length;j<l;j++){%>',
            '       <%if(data[i][j].data.cities.length != 0){%>',
            '           <dl><dt><%=data[i][j].index%></dt><dd class="cf">',
            '           <%for(var k=0,m=data[i][j].data.cities.length;k<m;k++){%>',
            '               <a href="javascript:void(0)" data-city-href data-code="<%=data[i][j].data.cities[k].code%>"><%=data[i][j].data.cities[k].city%></a>',
            '           <%}%>',
            '           </dd></dl>',
            '       <%}%>',
            '   <%}%>',
            '</div>',
            '<%}%>'
        ].join('');

        var hotTmpl = [
            '<div class="city_area">',
            '   <dl><dt></dt><dd style="margin-left:0px;" class="cf">',
            '   <%for(var i=0,len=data.length;i<len;i++){%>',
            '       <a href="javascript:void(0)" data-city-href data-code="<%=data[i].code%>"><%=data[i].city%></a>',
            '   <%}%>',
            '   </dd></dl>',
            '</div>'
        ].join("");

        // console.log(_this.hotData)

        var html = getHtml(tmpl, {
            data: cityPanel
        });

        var hotHtml = getHtml(hotTmpl, {
            data: _this.hotData
        });

        _this.city_selector.find(".city_list").html(html);

        _this.city_selector.find(".city_list>.city_area:eq(0)").before(hotHtml);

        //处理自定义Tab

        if (_this.editTab.length != 0) {

            for (var p = 0; p < _this.editTab.length; p++) {

                _this.city_selector.find("ul.city_tab").append("<li class=''>" + _this.editTab[p].name + "</li>");
                var filter = _this.editTab[p].filter || function() {};
                var i18n = filter(_this.cityData) || [];
                console.log(i18n);
                var internationTmpl = [
                    '<div iiii class="city_area">',
                    '   <dl><dt></dt><dd>',
                    '   <%for(var i=0,len=data.length;i<len;i++){%>',
                    '       <a href="javascript:void(0)" data-city-href data-code="<%=data[i].code%>"><%=data[i].city%></a>',
                    '   <%}%>',
                    '   </dd></dl>',
                    '</div>'
                ].join("");

                var internationHtml = getHtml(internationTmpl, {
                    data: i18n
                })
                _this.city_selector.find(".city_list>.city_area:last").after(internationHtml);
            }
        }


        _this.city_selector.find("dd").width(_this.areaTipWidth * 2 + 50); //适配样式

        _this.city_selector.find(".city_area:eq(0)").show();

    }
    /**
     * 查询城市数据
     * @for City
     * @method City.search
     * @params key {String} 城市的三字码或拼音
     * @example 
            City.search("HAK");
    */

    cp.search = function(key) {
        // console.log(key);
        var _this = this;
        var dataSource = (_this.isDomestic) ? _this.domesticData : _this.internationalData;
        var dataSourceCities = [];
        for (var p in dataSource) {
            dataSourceCities = dataSourceCities.concat(dataSource[p].cities);
        }
        //查找搜索数据
        var result = $.grep(dataSourceCities, function(ele, i) {
            return (ele.code.toUpperCase().indexOf(key.toUpperCase()) == 0 || ele.city.toUpperCase().indexOf(key.toUpperCase()) == 0 || ele.pinyin.toUpperCase().indexOf(key.toUpperCase()) == 0) && (ele.intl == !_this.isDomestic);
        });
        // console.log(result);

        var tmpl = [
            '<%for(var i=0,len=data.length;i<len;i++){%>',
            '   <li class="_city_selector <%=(i==0)?"on":""%>" data-city-li><span class="city_name _city_selector"><%=data[i].city%></span><span class="city_code _city_selector"><%=data[i].code%></span></li>',
            '<%}%>'
        ].join('');

        var html = "";

        if (result.length == 0) {
            //没有找到
            html = "<li class='_city_selector'><span class='_city_selector nonedata'>抱歉没有找到数据" + (key.length > 6 ? '' : ("'" + key + "'")) + "</span></li>";
        } else {
            //找到
            html = getHtml(tmpl, {
                data: result
            });
        }

        _this.option.find('ul').html(html);
    };

    cp.noSameCity = function() {
        var _this = this;
        if (typeof _this.input.data('nosamecity') != undefined && _this.input.val()) {
            var hasSelectCity = _this.input.val();
            $.each(_this.cityData, function(i, v) {
                if (v.city == hasSelectCity) {
                    var removeCity = {
                        index: i,
                        city: _this.cityData.splice(i, 1)
                    }
                    _this.input.data("removeCity", removeCity);
                    return false;
                }
            });
        }
    };

    cp._bindEvent = function() {

        var _this = this;
        var dom = _this.city_selector;

        //input专属事件处理代码
        _this.input.on({
            "focus": function() {
                _this.city_selector.css({
                    'left': _this.input.offset().left,
                    'top': _this.input.offset().top + _this.input.outerHeight(),
                    'min-width': _this.input.outerWidth()
                });
                $(".city_selector").hide();
                if (_this.input.data("removeCity")) {
                    var removeCity = _this.input.data("removeCity");
                    _this.cityData.splice(removeCity.index, 0, removeCity.city[0])
                    _this.reRender();
                }

                _this.city_selector.show();
                if (_this.validate()) {
                    _this.box.show();
                }

                _this.onInputFocus && _this.onInputFocus();
            },
            "blur": function() {
                _this.onInputBlur && _this.onInputBlur();
            },
            "keyup": function(e) {
                //如果input的值为空，那么久显示box，否则显示option
                if (_this.input.val() == "") {
                    _this.box.show();
                    _this.option.hide();
                } else {
                    _this.box.hide();
                    _this.option.show();
                    if (e.keyCode == 40 || e.keyCode == 38) {
                        var cur = _this.option.find('li.on');
                        if (e.keyCode == 40) {
                            if (cur.next().length == 0) {
                                _this.option.find("li:eq(0)").addClass('on');
                            } else {
                                cur.next().addClass('on');
                            }
                        }
                        if (e.keyCode == 38) {
                            if (cur.prev().length == 0) {
                                _this.option.find("li:last").addClass('on');
                            } else {
                                cur.prev().addClass('on');
                            }
                        }
                        cur.removeClass('on');
                    } else if (e.keyCode == 13) {
                        var obj = {
                            city: _this.option.find("li.on>.city_name").html(),
                            code: _this.option.find("li.on>.city_code").html()
                        };

                        _this._setVal(obj);

                        _this.onSelectCity && _this.onSelectCity(obj);

                        _this.option.hide();
                    } else {
                        _this.search(_this.input.val());
                    }
                }

                _this.onInputKeyup && _this.onInputKeyup();
            }
        });

        // //切换国内国际
        // dom.find(".intel>div").on("click", function() {
        //     var that = this;
        //     if($(that).hasClass("sel")){
        //      return false;
        //     }
        //     var tag = $(that).attr("data-flag");
        //     dom.find(".intel>div").removeClass("sel");
        //     $(that).addClass("sel");

        //     _this.isDomestic = (tag == "home")?true:false;

        //     // _this.reRender();

        // }).eq(0).click();

        //tab
        dom.find("ul.city_tab>li").on("click", function() {
            if ($(this).hasClass("on")) {
                return false;
            }
            dom.find("ul.city_tab>li").removeClass("on");
            $(this).addClass("on");

            _this.city_selector.find(".city_area").hide().eq($(this).index()).show();
        });

        dom.delegate("[data-city-href]", "click", function() {
            var that = this;

            var obj = {
                city: $(that).html(),
                code: $(that).data('code')
            };

            _this._setVal(obj);

            _this.onSelectCity && _this.onSelectCity(obj);

            _this.city_selector.hide();
        });

        dom.delegate("[data-city-li]", "click", function() {
            var obj = {
                city: $(this).find(".city_name").html(),
                code: $(this).find(".city_code").html(),
            };

            _this._setVal(obj);

            _this.onSelectCity && _this.onSelectCity(obj);

            _this.option.hide();
        });

        _this.addTag();

        $("body").on("click", function(e) {
            if (!$(e.target).hasClass("_city_selector")) {
                _this.city_selector.hide();
            }
        })

    };

    cp.addTag = function() {
        var _this = this;
        var _city_selector = "_city_selector";

        var _fn = function(dom) {
            var len = dom.children().length;
            for (var i = 0; i < len; i++) {
                var t = dom.children().eq(i);
                t.addClass(_city_selector);
                _fn(t);
            }
        };

        _fn(_this.city_selector);
        _this.input.addClass(_city_selector);
    }


    cp._setVal = function(obj) {
        var _this = this;
        _this.input.val(obj.city); //外显城市名字
        _this.selectData = obj;
    };

    /**
     * 对外暴露的设置城市数据
     * @for City
     * @method City.setVal
     * @param obj {Object} 城市数据 {city:"城市名",code:"三字码"}
     * @example
        City.setVal({city:"上海浦东",code:"PVG"});
    */
    cp.setVal = function(obj) {
        var _this = this;
        _this.input.val(obj.city); //外显城市名字
        _this.selectData = obj;
    }

    /**
     * 获取选中的城市数据
     * @for City
     * @method City.getVal
     * @return {Object} 城市数据 {city:"城市名",code:"三字码"}
     * @example
        City.getVal();
    */
    cp.getVal = function() {
        var _this = this;
        var data = _this.input.val();
        var result = _this._find();
        if (data == "") {
            return _this.selectData || {
                code: "",
                city: ""
            };
        } else if (result.length == 0) {
            return {
                code: "",
                city: ""
            };
        } else {
            return {
                code: result[0].code,
                city: result[0].city
            };
        }
    };
    /**
     * 重新渲染城市选择器
     * @for City
     * @method City.reRender
     * @example
        City.reRender();
    */
    cp.reRender = function() {
        var _this = this;
        _this._formatData();
        _this._init();
        _this._renderCity();
        _this._bindEvent();
    };
    /**
     * 更换城市选择框是数据
     * @for City
     * @method City.changeCities
     * @params cities {Object} 城市数据数组
     * @example
        var cities = [
            {code : "AKU",name : "阿克苏机场",city : "阿克苏",pinyin : "aksu",intl : false , hot:true},
            {code : "AAT",name : "阿勒泰机场",city : "阿勒泰",pinyin : "altay",intl : false },
            {code : "AKA",name : "安康机场",city : "安康",pinyin : "ankang",intl : false },
            {code : "AQG",name : "安庆(天柱山)机场",city : "安庆",pinyin : "anqing",intl : false },
            {code : "AOG",name : "鞍山机场",city : "鞍山",pinyin : "anshan",intl : false }
        ];

        City.changeCities(cities);
    */
    cp.changeCities = function(cities) {
        var _this = this;
        _this.cityData = cities;
        _this.reRender();
    };

    /**
     * 校验输入框的输入数据
     * @for City
     * @method City.validate
     * @return {boolean} 返回是否存在城市的判断值
     * @example
        City.validate();
    */
    cp.validate = function() {
        var _this = this;
        return (_this._find().length != 0);
    }

    cp._find = function() {
        var _this = this;
        var data = _this.input.val();
        var dataSource = (_this.isDomestic) ? _this.domesticData : _this.internationalData;
        var dataSourceCities = [];
        for (var p in dataSource) {
            dataSourceCities = dataSourceCities.concat(dataSource[p].cities);
        }
        var result = $.grep(dataSourceCities, function(ele, i) {
            return ele.city === data;
        });
        return result;
    };
    cp.setDefaultCity = function(locationCity, defaultCity) {
        var _this = this;
        var city;
        $.each(_this.hotData, function(i, v) {
            if (v.city == defaultCity) {
                city = v;
                return false;
            }
        });
        $.each(_this.hotData, function(i, v) {
            if (v.city == locationCity) {
                city = v;
                return false;
            }
        });
        _this.setVal(city);
    };

    return City;

})();

export default returnObj;