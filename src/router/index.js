import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const desc = r => require.ensure([], () => r(require('@/page/desc/desc')), 'desc_input');
const nofound = r => require.ensure([], () => r(require('@/page/nofound')), 'nofound_page');

const h5static = r => require.ensure([], () => r(require('@/page/content/H5/static')), 'h5static');

const refreshcss = r => require.ensure([], () => r(require('@/page/content/refreshcss/index')), 'refreshcss_index');


const form_input = r => require.ensure([], () => r(require('@/page/content/form/input')), 'content_form_input');
const form_radio = r => require.ensure([], () => r(require('@/page/content/form/radio')), 'content_form_radio');
const form_checkbox = r => require.ensure([], () => r(require('@/page/content/form/checkbox')), 'content_form_checkbox');
const basic_button = r => require.ensure([], () => r(require('@/page/content/basic/button')), 'content_basic_button');
const basic_box = r => require.ensure([], () => r(require('@/page/content/basic/box')), 'content_basic_box');
const tips_toast = r => require.ensure([], () => r(require('@/page/content/tips/toast')), 'content_tips_toast');

const normal_table = r => require.ensure([], () => r(require('@/page/content/table/normalTable')), 'content_table_normalTable');
const radio_table = r => require.ensure([], () => r(require('@/page/content/table/radioTable')), 'content_table_radioTable');
const check_table = r => require.ensure([], () => r(require('@/page/content/table/checkTable')), 'content_table_checkTable');

const svg_animate = r => require.ensure([], () => r(require('@/page/content/svg/animate')), 'content_svg_animate');

const dialog_dialog = r => require.ensure([], () => r(require('@/page/content/dialog/dialog')), 'content_dialog_dialog');
const element_uipage = r => require.ensure([], () => r(require('@/page/content/third/elementui')), 'content_third_elementui');

const echart_bar = r => require.ensure([], () => r(require('@/page/content/echart/bar')), 'content_echart_bar');
const echart_pie = r => require.ensure([], () => r(require('@/page/content/echart/pie')), 'content_echart_pie');
const echart_line = r => require.ensure([], () => r(require('@/page/content/echart/line')), 'content_echart_line');

const progress = r => require.ensure([], () => r(require('@/page/content/progress/progress')), 'content_progress_progress');

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/basic/button',
    name: 'basic_button',
    component: basic_button
  }, {
    path: '/basic/box',
    name: 'basic_box',
    component: basic_box
  }, {
    path: '/form/input',
    name: 'form_input',
    component: form_input
  }, {
    path: '/form/radio',
    name: 'form_radio',
    component: form_radio
  }, {
    path: '/form/checkbox',
    name: 'form_checkbox',
    component: form_checkbox
  }, {
    path: '/desc/index',
    name: 'desc',
    component: desc
  }, {
    path: '/tips/toast',
    name: 'toast',
    component: tips_toast
  }, {
    path: '/nofound',
    name: 'nofound',
    component: nofound
  }, {
    path: '/H5/static',
    name: 'H5static',
    component: h5static
  }, {
    path: '/table/normalTable',
    name: 'normal_table',
    component: normal_table
  }, {
    path: '/table/radioTable',
    name: 'radio_table',
    component: radio_table
  }, {
    path: '/table/checkTable',
    name: 'check_table',
    component: check_table
  }, {
    path: '/svg/animate',
    name: 'svg_animate',
    component: svg_animate
  }, {
    path: '/RefreshCss/index',
    name: 'refresh_index',
    component: refreshcss
  }, {
    path: '/dialog/dialog',
    name: 'dialog_dialog',
    component: dialog_dialog
  }, {
    path: '/third/elementui',
    name: 'element_uipage',
    component: element_uipage
  }, {
    path: '/progress/progress',
    name: 'progress_progress',
    component: progress
  }, {
    path: '/echart/line',
    name: 'echart_line',
    component: echart_line
  }, {
    path: '/echart/bar',
    name: 'echart_bar',
    component: echart_bar
  }, {
    path: '/echart/pie',
    name: 'echart_pie',
    component: echart_pie
  }]
})