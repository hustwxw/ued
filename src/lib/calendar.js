(function() {

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