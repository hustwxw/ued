var City = (function() {

    var css = '.city_selector{display:block;min-width:300px;width:auto;height:auto;position:absolute;top:0;left:0;cursor:default;display:none;z-index:1024}.city_box{display:block;border:1px solid #EB3C47;font:12px/1.5 tahoma,arial,\5b8b\4f53;background-color:white;width:600px;border-radius:3px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.20);}.city_box .intel{margin:15px 0 5px 0;position:relative;display:none}.city_box .intel>div{display:inline-block}.city_box .intel span{display:inline-block;background-color:#e1effe;text-align:center;padding:5px 0;cursor:pointer;margin-left:10px}.city_box .intel span:hover{opacity:.8;filter:alpha(opacity=0.8)}.city_box .intel i{display:inline-block;vertical-align:middle;width:0;height:0;border-color:transparent transparent transparent transparent;border-style:dashed dashed solid dashed;top:20px;position:relative}.city_box .intel>div.sel i{border-color:#e1effe transparent transparent transparent}.city_box ul{border-bottom:1px solid #CCCCCC;height:28px;z-index:1024}.city_box ul li{list-style:none}.city_box ul li{display:inline-block;width:72px;text-align:center;position:relative;font-size:14px;color:#242A36;cursor:pointer}.city_box ul li.on{background-color:#EB3C47;color:#fff;line-height:29px;}.city_box .city_list>div{margin:20px 0 10px;height:auto}.city_box .city_list dl{}.city_box .city_list dl dt{float:left;width:70px;text-align:center;color:#EB3C47;font-weight:bold;text-indent:5px;font-family:"Lucida console","consolas","courier new";line-height:22px;font-size:14px;display:inline-block;vertical-align:top}.city_box .city_list dl dd{font-size:14px;display:block;margin-left:72px}.city_box .city_list dl dd a{margin-bottom:10px;min-width:72px;float:left;text-align: center;line-height:22px;display:inline-block;color:#000;text-decoration:none}.city_box .city_list dl dd a:hover{color:#EB3C47;}.city_box .city_list .city_area{display:none}.city_option{border:1px solid #EB3C47;display:none}.city_option ul{box-shadow:2px 2px 3px rgba(0,0,0,0.3);z-index:1024;background-color:#fff}.city_option li{cursor:pointer}.city_option li span{display:inline-block;width:48%}.city_option li:hover,.city_option li.on{background-color:#EB3C47;color:#fff;}.city_option li span{padding:5px 0;font-size:14px}.city_option li span.city_name{text-align:left;padding-left:2%}.city_option li span.nonedata{font-style:italic;width:90%;padding:10px}.city_option li span.city_code{text-align:right;padding-right:2%;font-style:italic}';
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

    window.GetCityByCode = function(code) {
        code = (code || "").toUpperCase();
        var result = $.grep(defaultCityData, function(ele, i) {
            return code == ele.code;
        });
        if (result.length != 0) {
            return result[0].city;
        } else {
            return null;
        }
    };
    window.GetCodeByCity = function(city) {
        city = (city || "").toUpperCase();
        var result = $.grep(defaultCityData, function(ele, i) {
            return city == ele.city;
        });
        if (result.length != 0) {
            return result[0].code;
        } else {
            return null;
        }
    };

    window.GetAirportByCode = function(code) {
        code = (code || "").toUpperCase();
        var result = $.grep(defaultCityData, function(ele, i) {
            return code == ele.code;
        });
        if (result.length != 0) {
            return result[0].name;
        } else {
            return null;
        }
    }

    var City = (function() {

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

    return City;

})()