<template>
<transition name="comein-fade">
  <div class="content">
    <div class="row">
      <span class="ued-tag-basic">基础用法</span>
      <span v-html="map.uedProgeressBasic.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressBasic')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressBasic.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressBasic.html"></pre>
        <pre v-text="map.uedProgeressBasic.scriptText" v-if="map.uedProgeressBasic.scriptText"></pre>
      </div>      
    </div>

    <div class="row">
      <span class="ued-tag-basic">无text用法</span>
      <span v-html="map.uedProgeressNotxt.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressNotxt')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressNotxt.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressNotxt.html"></pre>
        <pre v-text="map.uedProgeressNotxt.scriptText" v-if="map.uedProgeressNotxt.scriptText"></pre>
      </div>      
    </div>

    <div class="row">
      <span class="ued-tag-basic">变化用法（js控制）</span>
      <span v-html="map.uedProgeressDynamic.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressDynamic')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressDynamic.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressDynamic.html"></pre>
        <pre v-text="map.uedProgeressDynamic.scriptText" v-if="map.uedProgeressDynamic.scriptText"></pre>
      </div>      
    </div>

    <div class="row">
      <span class="ued-tag-basic">css3用法</span>
      <span v-html="map.uedProgeressCss3.html"></span>
      <a href="javascript:void(0)" class="view" @click="view('uedProgeressCss3')">示例代码</a>       
    </div>
    <div class="row" v-if="map.uedProgeressCss3.flag">
      <span class="ued-tag-basic"></span>
      <div class="code">
        <input type="button" class="copy" @click="copy" value="复制代码">
        <pre v-text="map.uedProgeressCss3.html"></pre>
        <pre v-text="map.uedProgeressCss3.scriptText" v-if="map.uedProgeressCss3.scriptText"></pre>
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

export default{
  name: 'progeress',
  data(){
    return {
      map:{
        uedProgeressBasic:{
          flag : false,
          html : ['<div class="ued-progress-basic animate-tran">\n',
                 '  <div class="ued-progress-bar animate-tran" style="width:40%"></div>\n',
                 '  <div class="ued-progress-text">40%</div>\n',
                 '</div>'].join(''),
          scriptText : ''
        },
        uedProgeressNotxt:{
          flag : false,
          html : ['<div class="ued-progress-basic ued-progress-notext animate-tran">\n',
                 '  <div class="ued-progress-bar animate-tran" style="width:80%"></div>\n',
                 '  <div class="ued-progress-text">80%</div>\n',
                 '</div>'].join(''),
          scriptText : ''
        },
        uedProgeressDynamic:{
          flag : false,
          html : ['<div class="ued-progress-basic animate-tran">\n',
                 '  <div class="ued-progress-bar animate-tran" style="width:0%" id="dynamic"></div>\n',
                 '  <div class="ued-progress-text">0%</div>\n',
                 '</div>'].join(''),
          scriptText : [
            '进度条运行测试的脚本\n',
            'var bar = $("#dynamic");\n',
            'var text = bar.next();\n',
            'var n = 0;\n',
            'var flag = 0;\n',
            'var handler = setInterval(() => {\n',
            '  bar.width(`${n}%`);\n',
            '  text.text(`${n}%`);\n',
            '  if(n === 100){\n',
            '    flag = -1;\n',
            '  }\n',
            '  if(n === 0){\n',
            '    flag = 1;\n',
            '  }\n',
            '  if(flag === 1){n++;}\n',
            '  if(flag === -1){n--;}\n',
            '}, 200);\n',
          ].join(''),
          script () {
            var bar = $("#dynamic");
            var text = bar.next();
            var n = 0;
            var flag = 0;
            var handler = setInterval(() => {
              bar.width(`${n}%`);
              text.text(`${n}%`);
              if(n === 100){
                flag = -1;
              }
              if(n === 0){
                flag = 1;
              }
              if(flag === 1){n++;}
              if(flag === -1){n--;}
            }, 200);
          }
        },    
        uedProgeressCss3:{
          flag : false,
          html : ['<div class="ued-progress-basic animate-tran ued-progress-notext">\n',
                 '  <div class="ued-progress-bar ued-progress-animate infinite"></div>\n',
                 '  <div class="ued-progress-text"></div>\n',
                 '</div>'].join(''),
          scriptText : ''
        }
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
      var code = event.target.parentNode.getElementsByTagName('pre')[0].innerText;
      copy(code)
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