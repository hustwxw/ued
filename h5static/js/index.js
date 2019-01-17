(function() {
    //模板函数
    var getHtml = function() {
        return _.template.apply(this, arguments)(arguments[1]);
    };

    //干部品德水平渲染
    var renderCadreMoralLevel = function(data) {
        var series = [];
        var legends = [];
        for (var i = 0, len = data.seriesData.length; i < len; i++) {
            var opt = {
                type: 'line',
                name: data.seriesData[i].name,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: data.seriesData[i].color
                    }
                },
                data: data.seriesData[i].data
            };
            series.push(opt);
        }
        for (var i = 0, len = data.legendData.length; i < len; i++) {
            var opt = {
                name: data.legendData[i],
                icon: 'rect'
            };
            legends.push(opt);
        }

        var echart = echarts.init($("#cadreMoralLevel").get(0));
        var option = {
            tooltip: {
                trigger: 'axis',
                confine: true,
            },
            grid: {
                top: '35%',
                left: '2%',
                right: '2%',
                bottom: '5%',
                containLabel: true
            },
            legend: {
                data: legends,
                orient: 'vertical',
                itemHeight: 5,
                itemGap: 15,
                top: 2,
                left: 0
            },
            xAxis: {
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#B9C8DC'
                    }
                },
                type: 'category',

                data: data.xAxisData,
                axisLabel: {
                    textStyle: {
                        color: '#4F5A6E',
                        align: 'center'
                    },
                    interval: 0,
                }
            },
            yAxis: [{
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#B9C8DC'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#F2F2F2'
                    }
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#4F5A6E'
                    }
                },
                type: 'value',
                nameTextStyle: {
                    color: '#4F5A6E'
                }
            }],
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0],
                orient: 'horizontal',
                startValue: 0,
                endValue: 5,
                zoomOnMouseWheel: false
            }, ],
            series: series
        };
        echart.setOption(option);
    }

    // 管理干部生命周期
    var renderCadreLifeCircle = function(data) {
        var option = {
            title: {
                text: '\n管理干部生命周期\n',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                backgroundColor:"#f34932",
                formatter: function(params) {
                    // var tar;
                    // if (params[1].value != '-') {
                    //     tar = params[1];
                    // } else {
                    //     tar = params[0];
                    // }
                    // return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    return "<center>海航旅业集团有限公司<br/>投资银行管理部<br/>总经理 M3</center>"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: true
                },
                data: ["集团总部","产业集团","平台公司","成员企业"],
                show:true,
                axisTick:{
                    show: false
                },
                boundaryGap:true,
                axisLabel:{
                    show:true,
                    // 用fomatter输出，否则正常输出的话会带千分位逗号分隔符
                    formatter:function(value,index){
                        return value;
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 2014,
                max: 2018,
                splitNumber: 1,
                interval:1,
                splitLine: {
                    show: false
                },
                axisLabel:{
                    show:true,
                    // 用fomatter输出，否则正常输出的话会带千分位逗号分隔符
                    formatter:function(value,index){
                        return value;
                    }
                }
            },
            series: [{
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [2014, 2015, 2016, 2017],
                barWidth: 20
            }, {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                barWidth: 20,
                itemStyle:{
                    normal:{
                        color: function(params){
                            return {
                                "集团总部": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    // 0% 处的颜色   
                                    offset: 0,
                                    color: '#17cccf'
                                }, {
                                    // 100% 处的颜色
                                    offset: 1,
                                    color: '#4c99f9'
                                }], false),
                                "产业集团": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    // 0% 处的颜色   
                                    offset: 0,
                                    color: '#f56847'
                                }, {
                                    // 100% 处的颜色
                                    offset: 1,
                                    color: '#f23620'
                                }], false),
                                "平台公司":new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    // 0% 处的颜色   
                                    offset: 0,
                                    color: '#bd9a5a'
                                }, {
                                    // 100% 处的颜色
                                    offset: 1,
                                    color: '#b5b488'
                                }], false),
                                "成员企业":new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    // 0% 处的颜色   
                                    offset: 0,
                                    color: '#27de5f'
                                }, {
                                    // 100% 处的颜色
                                    offset: 1,
                                    color: '#1bf7a2'
                                }], false)
                            }[params.name]
                        }
                    }
                },
                data: [1, 1, 1, 1]
            }]
        };

        var echart = echarts.init($("#cadreLifCircle").get(0));
        echart.setOption(option);

    }

    var dataInit = function() {
        var data = {
            xAxisData: ['德', '能', '勤', '绩', '廉'],
            seriesData: [{
                name: "个人平均水平",
                color: "#F13721",
                data: [18, 19, 15, 10, 11]
            }, {
                name: "高级管理干部平均水平",
                color: "#FFD548",
                data: [19, 15, 10, 11, 8]
            }],
            legendData: ["个人平均水平", "高级管理干部平均水平"]
        };
        renderCadreMoralLevel(data);

        renderCadreLifeCircle();
    }

    var initUI = function() {
        //品德水平
        var mySwiper = new Swiper('#cadreMoral', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });
    }

    var init = function() {
        dataInit();
        initUI();
    };

    init();

})()