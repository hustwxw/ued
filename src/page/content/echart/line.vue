<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedLineBasic.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedLineBasic')">示例代码</a>  

      <span class="ued-tag-basic">横向用法</span>
      <span v-html="map.uedLineHorizontal.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedLineHorizontal')">示例代码</a>     
    </div>
    <div class="row" v-if="map.uedLineBasic.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedLineBasic.html"></pre>
        optoin参数：<pre v-html="map.uedLineBasic.scriptText" v-if="map.uedLineBasic.scriptText"></pre>
      </div>      
    </div>
    <div class="row" v-if="map.uedLineHorizontal.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedLineHorizontal.html"></pre>
        optoin参数：<pre v-html="map.uedLineHorizontal.scriptText" v-if="map.uedLineHorizontal.scriptText"></pre>
      </div>      
    </div>
  </div>  
</transition>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"
import copy from "copy-to-clipboard"
import $ from "jquery"
import formatJson from "format-json"

export default{
  name: 'echart_bar',
  data(){
    return {
      map:{
        uedLineBasic: (function(){

          var option = {
                color: ['#3398DB'],
                tooltip: {
                    show: false
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    top: '15%',
                    containLabel: true
                },
                "tooltip": {
                    "show": true                  
                },
                xAxis: [{
                    type: 'category',
                    data: ['海南', '首都', '天津', '香港', '祥鹏', '西部', '福州', '北部湾', '乌航', '金鹏', '长安', '桂林'],
                    axisLabel: {
                        formatter: function(ele) {
                            return ele.split('').join('\n');
                        },
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular",
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#dddddd"
                        }
                    },
                }],
                yAxis: {
                    type: "value",
                    name: '直销额\n占比(%)',
                    nameTextStyle: {
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular"
                    },
                    axisLabel: {
                        fontSize: window.FONTSIZE * .2,
                        color: "#999999",
                        fontFamily: "PingFang Regular",
                        formatter: function(ele) {
                            return new Number(ele).toFixed(1)
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: 1.0
                },
                series: [{
                    name: '收入',
                    type: 'line',
                    barWidth: '60%',
                    data: [100, 520, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330].map(function(ele) {
                        return new Number(ele / 1000 * 1.5).toFixed(2);
                    }),
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: window.FONTSIZE * .2,
                        color: "#3a404c",
                        fontFamily: "PingFang Regular"
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#0091ff'
                            }, {
                                offset: 1,
                                color: '#00e4ff'
                            }]
                        )
                    }
                }]
          }

          return {
            flag : false,
            html : '<div class="block" id="basic"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('basic')).setOption(option);
            }
          }

        })(),

        uedLineHorizontal: (function(){

          var labelRight = {
              normal: {
                  position: 'right'
              }
          };
          var option = {
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {
                  top: 80,
                  bottom: 30
              },
              xAxis: {
                  type : 'value',
                  splitLine: {lineStyle:{type:'dashed'}},
              },
              yAxis: {
                  type : 'category',
                  axisLine: {show: false},
                  axisLabel: {show: false},
                  axisTick: {show: false},
                  splitLine: {show: false},
                  data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
              },
              series : [
                  {
                      name:'生活费',
                      type:'line',
                      stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              formatter: '{b}'
                          }
                      },
                      // itemStyle: {
                      //   color: function(args){
                      //     var colors = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
                      //     return colors[parseInt(Math.random()*colors.length)];
                      //   }
                      // },
                      data:[
                          {value: 0.07, label: labelRight},
                          {value: -0.09, label: labelRight},
                          0.2, 0.44,
                          {value: -0.23, label: labelRight},
                          0.08,
                          {value: -0.17, label: labelRight},
                          0.47,
                          {value: -0.36, label: labelRight},
                          0.18
                      ]
                  }
              ]
          };


          return {
            flag : false,
            html : '<div class="block" id="horizontal"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('horizontal')).setOption(option);
            }
          }

        })()
      }
    };
  },
  methods:{
    view(param){
      var _this = this;
      for(var p in this.map){
        (p != param) && (_this.map[p].flag = false);
      }
      (_this.map[param].flag)?(_this.map[param].flag = false):(_this.map[param].flag = true);
    },
    copy(event){
      var code = event.target.parentNode.getElementsByTagName('pre')[1].innerText;
      copy(code)
      alert("复制成功")
    }
  },
  mounted(){
    this.$emit("hideHeaderAndLeft",{show:true});
    
    for(var p in this.map){
      if(this.map[p].script){
        this.map[p].script();
      }
    }
  }
} 
</script>

<style>

</style>