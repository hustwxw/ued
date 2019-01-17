<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedPieRing.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieRing')">示例代码</a>  

      <span class="ued-tag-basic">南丁格尔图一</span>
      <span v-html="map.uedPieNDGE1.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieNDGE1')">示例代码</a>     
    </div>
    <div class="row" v-if="map.uedPieRing.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieRing.html"></pre>
        optoin参数：<pre v-html="map.uedPieRing.scriptText" v-if="map.uedPieRing.scriptText"></pre>
      </div>      
    </div>
    <div class="row" v-if="map.uedPieNDGE1.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieNDGE1.html"></pre>
        optoin参数：<pre v-html="map.uedPieNDGE1.scriptText" v-if="map.uedPieNDGE1.scriptText"></pre>
      </div>      
    </div>
    <div class="row">
      <span class="ued-tag-basic">南丁格尔图二</span>
      <span v-html="map.uedPieNDGE2.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieNDGE2')">示例代码</a>
      <span class="ued-tag-basic">环内文字</span>
      <span v-html="map.uedPieWord.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieWord')">示例代码</a>
    </div>
    <div class="row" v-if="map.uedPieNDGE2.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieNDGE2.html"></pre>
        optoin参数：<pre v-html="map.uedPieNDGE2.scriptText" v-if="map.uedPieNDGE2.scriptText"></pre>
      </div>      
    </div>
    <div class="row" v-if="map.uedPieWord.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieWord.html"></pre>
        optoin参数：<pre v-html="map.uedPieWord.scriptText" v-if="map.uedPieWord.scriptText"></pre>
      </div>      
    </div>

    <div class="row">
      <span class="ued-tag-basic">实心饼图</span>
      <span v-html="map.uedPieSolid.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedPieSolid')">示例代码</a>
    </div>
    <div class="row" v-if="map.uedPieSolid.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制option">
        <pre v-text="map.uedPieSolid.html"></pre>
        optoin参数：<pre v-html="map.uedPieSolid.scriptText" v-if="map.uedPieSolid.scriptText"></pre>
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
  name: 'echart_pie',
  data(){
    return {
      map:{
        uedPieRing: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
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

        uedPieNDGE1: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "roseType": "radius",
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
          }


          return {
            flag : false,
            html : '<div class="block" id="ndgr1"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('ndgr1')).setOption(option);
            }
          }

        })(),

        uedPieNDGE2: (function(){

          var option = {
              "legend": {
                  "show": false,
              },
              "title": {
                  "text": "总销售额",
                  "x": "center",
                  "y": "85%",
                  "textStyle": {
                      "fontSize":window.FONTSIZE * .24,
                      "color":"#999999"
                  }
              },
              "calculable": true,
              "startAngle": 100,
              "roseType": "area",
              "series": [{
                  "type": "pie",
                  "z": 0,
                  label: {
                      normal: {
                          position: "center"
                      }
                  },
                  // "roseType": "radius",
                  "center": ["50%", "45%"],
                  "radius": ["40%", "70%"],
                  "data": [{
                      "value": 5,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#ffc200'
                                  }, {
                                      offset: 1,
                                      color: '#ffb900'
                                  }]
                              )
                          }
                      },
                      z: 2
                  }, {
                      "value": 3,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#0091ff'
                                  }, {
                                      offset: 1,
                                      color: '#00e3ff'
                                  }]
                              )
                          }
                      }
                  }, {
                      "value": 1,
                      // "name": "占位",
                      "tooltip": {
                          "show": false
                      },
                      z: 1,
                      "itemStyle": {
                          "normal": {
                              "color": new echarts.graphic.LinearGradient(
                                  0, 0, 1, 0, [{
                                      offset: 0,
                                      color: '#932233'
                                  }, {
                                      offset: 1,
                                      color: '#ff0000'
                                  }]
                              )
                          }
                      }
                  }],
                  // "hoverAnimation": false
              }],
              "tooltip": {
                  "show": true
              }
          }


          return {
            flag : false,
            html : '<div class="block" id="ndgr2"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('ndgr2')).setOption(option);
            }
          }

        })(),

        uedPieWord: (function(){

          var option = {
                "legend": {
                    "show": false,
                },
                "title": {
                    "text": "{a|本周}{b|89.3%}",
                    "x": "center",
                    "y": "40%",
                    "textStyle": {
                        "rich": {
                            a: {
                                fontSize: 16,
                                color: "#666666",
                                padding: [0, 10, 0, 0],
                                fontFamily: "PingFang Regular"
                            },
                            b: {
                                fontSize: 16,
                                color: "#3a404c",
                                fontFamily: "PingFang Medium"
                            }
                        }
                    },
                    "subtext": "{a|同比}{b|-1.6%}",
                    "subtextStyle": {
                        "rich": {
                            a: {
                                fontSize: 16,
                                color: "#666666",
                                padding: [0, 10, 0, 0],
                                fontFamily: "PingFang Regular"
                            },
                            b: {
                                fontSize: 16,
                                color: "#ff0000",
                                fontFamily: "PingFang Medium"
                            }
                        }
                    },
                },
                "calculable": true,
                "startAngle": 100,
                "series": [{
                    "type": "pie",
                    "z": 0,
                    label: {
                        normal: {
                            position: "center"
                        }
                    },
                    "center": ["50%", "50%"],
                    "radius": ["70%", "85%"],
                    "data": [{
                        "value": 100,
                        // "name": "占位",
                        "tooltip": {
                            "show": false
                        },
                        "itemStyle": {
                            "normal": {
                                "color": "#f5f5f5"
                            }
                        },
                        z: 2
                    }, {
                        "value": 300,
                        // "name": "占位",
                        "tooltip": {
                            "show": false
                        },
                        z: 1,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#ff1b00'
                                    }, {
                                        offset: 1,
                                        color: '#ffb700'
                                    }]
                                )
                            }
                        }
                    }],
                    "hoverAnimation": false
                }],
                "tooltip": {
                    "show": true
                }
          }

          return {
            flag : false,
            html : '<div class="block" id="word"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('word')).setOption(option);
            }
          }

        })(),

        uedPieSolid: (function(){

          var option = {
                "legend": {
                    "show": false,
                },
                "grid": {},
                "title": {
                    "x": "center",
                    "y": "38%",
                    "text": "13,205.8",
                    "show": true,
                    "textStyle": {
                        "fontSize": 30,
                        "fontFamily": "PingFang Bold",
                        "color": "#ffffff"
                    },
                    "subtext": "万元",
                    "subtextStyle": {
                        "fontSize": 20,
                        "fontFamily": "PingFang Regular",
                        "color": "#ffffff",
                        "fontWeight": "bold"
                    }
                },
                "calculable": true,
                "startAngle": 100,
                "series": [{
                    "type": "pie",
                    "z": 0,
                    label: {
                        normal: {
                            position: "center"
                        }
                    },
                    "center": ["50%", "50%"],
                    "radius": ["0%", "80%"],
                    "data": [{
                        "value": 100,
                        // "name": "占位",
                        "tooltip": {
                            "show": false
                        },
                        "label": {
                            // "formatter": '年度计划执行率',
                            textStyle: {
                                "fontSize": 12,
                                "color": "#84878e"
                            }
                        },
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#ff1b00'
                                    }, {
                                        offset: 1,
                                        color: '#ffb700'
                                    }]
                                )
                            }
                        }
                    }],
                    "hoverAnimation": false
                }],
                "tooltip": {
                    "show": true
                }
            }

          return {
            flag : false,
            html : '<div class="block" id="solid"></div>',
            scriptText : formatJson.plain(option),
            script () {
              echarts.init(document.getElementById('solid')).setOption(option);
            }
          }

        })(),
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