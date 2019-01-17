<template>
    <el-container class="wrap">
        <el-header class="header" v-show="showHeader">
            <div class="logo"></div>
            <span class="webname">用户体验中心</span>
            <a href="./index.html" class="exit">退出&gt;&gt;</a>
        </el-header>
        <el-container>
            <el-aside class="aside" width="16%" v-show="showLeft">
              <ul class="menu_ul">
                <li @click="nav" v-bind:index="index" v-bind:hash="menu.hash" v-bind:class="{menu_li:true,first:menu.first,second:menu.second,third:menu.third,hover:menu.hover}" v-for="(menu,index) in menus">{{menu.name}}</li>
              </ul>
            </el-aside>
            <el-main>
                <router-view v-on:hideHeaderAndLeft="hideHeaderAndLeft"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

export default {
  name: 'App',
  data(){
        return {
            showHeader: false,
            showLeft: false,
            menus: [{
                name: '说明',
                first: true,
                second: false,
                third: false,
                hash : '#/desc/index',
                hover : true
            },{
                name: 'H5页面',
                first: true,
                second: false,
                third: false,
                hash : '#/H5/static',
                hover : false
            },{
                name: '重构页面脚手架',
                first: true,
                second: false,
                third: false,
                hash : '#/RefreshCss/index',
                hover : false
            }, {
                name: '第三方组件库',
                first: true,
                second: false,
                third: false,
                hover : false,
                hash:'#/third/elementui'
            }, {
                name: 'element ui',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/third/elementui'
            }, {
                name: '组件',
                first: true,
                second: false,
                third: false,
                hover : false
            }, {
                name: 'Basic',
                first: false,
                second: true,
                third: false,
                hover : false,
            }/*, {
                name: '配色 Color',
                first: false,
                second: false,
                third: true,
                hover : false
            }, {
                name: '布局 Layout',
                first: false,
                second: false,
                third: true,
                hover : false
            }, {
                name: '字体 Typography',
                first: false,
                second: false,
                third: true,
                hover : false
            }, {
                name: '图标 Icon',
                first: false,
                second: false,
                third: true,
                hover : false
            }*/, {
                name: '按钮 Button',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/basic/button'
            }, {
                name: '盒子/布局模型 Box',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/basic/box'
            }, {
                name: 'Dialog',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '弹窗 dialog',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/dialog/dialog'
            }, {
                name: 'Form',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '单选框 Radio',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/form/radio'
            }, {
                name: '复选框 Checkbox',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/form/checkbox'
            }, {
                name: '输入框 Input',
                first: false,
                second: false,
                third: true,
                hash : '#/form/input',
                hover : false
            }, {
                name: 'Table',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '普通表格 Table',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/table/normalTable'
            }, {
                name: '单选表格 TableRadio',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/table/radioTable'
            }, {
                name: '多选表格 checkTable',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/table/checkTable'
            }, {
                name: 'Tips',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '加载提示 Toast',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/tips/toast'
            }, {
                name: 'SVG',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: 'SVG动画',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/svg/animate'
            }, {
                name: 'Progress',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '进度条Progress',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/progress/progress'
            }, {
                name: '图表',
                first: false,
                second: true,
                third: false,
                hover : false
            }, {
                name: '柱状图',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/echart/bar'
            }, {
                name: '饼图',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/echart/pie'
            }, {
                name: '线图',
                first: false,
                second: false,
                third: true,
                hover : false,
                hash : '#/echart/line'
            }]
        }
  },
  methods:{
    hideHeaderAndLeft(data){
        if(data.hide){
            this.showHeader = false;
            this.showLeft = false;
        }
        if(data.show){
            this.showHeader = true;
            this.showLeft = true;
        }
    },
    nav(event){            
      var index = event.target.getAttribute('index');
      var menuData = this.menus[index];
      if(menuData.second == true){
        return false;
      }
      location.hash = event.target.getAttribute('hash') || "#/nofound";
      this.menus.forEach(function(ele,i){
        ele.hover = false;
      });
      menuData.hover = true;
      if(menuData.third == true){
        this.menus[3].hover = true;
      }
    }
  }
}
</script>

<style src="./assets/css/basic.css"></style>

<style src="./assets/css/framework.css"></style>

<style src="./assets/css/ued.css"></style>

<style scoped lang="less">
  .header{
    height:62px;
    background-color: #1E262F;
    line-height: 62px;
    color:white;
  }
  .aside{
    background-color: #2E3640;
    padding: 2.083% 0%;
    min-width: 190px;
  }
  .wrap{
    height:100%;
  }
  .menu_ul{
    height:auto;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu_li,.menu_li.first{
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    height:40px;
    width:100%;
    color:white;
    font-size:18px;
    cursor: pointer;
    padding:0% 14%;
    box-sizing: border-box;
    letter-spacing: -0.31px;
    font-weight:bold;
    transition:all .2s linear;
  }
  .menu_li.second{
    font-size: 16px;
    color: #B3BAC3;
    letter-spacing: -0.28px;
    padding:0% 19.6%;
    font-weight:lighter;
  }
  .menu_li.third{
    font-size: 14px;
    color: #F5F5F5;
    letter-spacing: -0.28px;
    padding:0% 19.6%;
    font-weight:lighter;
  }
  .menu_li.third:hover,.menu_li.third.hover{
    color: #43BCEF;
  }
  .menu_li.first:hover,.menu_li.first.hover{
    background-color: #0486FE;
  }
  .logo{
    background:url(./assets/images/logo.png) no-repeat center center;
    height:32px;
    width:111.2px;
    display: inline-block;
    margin-top:14px;
  }
  .webname{
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: -0.38px;
    line-height: 60px;
    display: inline-block;
    position: relative;
    top:-8px;    
  }
  .exit{
    float:right;
    display: inline-block;
    position: relative;
    /*top: -8px;*/
    font-size:14px;
    color:white;
    text-decoration: none;
    letter-spacing: -0.38px;
    line-height: 60px;
    height:60px;
    transition: all .3s ease-in-out;
    &:hover{
        color:lightgray;
    }
  }
</style>
