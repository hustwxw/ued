<template>
  <transition name="comein-fade">
    <div class="content">
      <div class="c-row">
        <p class="title">官方地址链接</p>
        <div>
          <a href="http://element-cn.eleme.io/#/zh-CN/component/installation" target="_blank">http://element-cn.eleme.io/#/zh-CN/component/installation</a>
        </div>
      </div>
      <div class="c-row">
        <p class="title">element UI 安装</p>
        <div>
          <p>npm install element-ui -s</p>
          <p>( 备注：此安装方式仅适用于vue框架下安装，其他框架的具体引入方式参考官网 )</p>
        </div>
      </div>
      <div class="row">
        <span class="ued-tag-basic">输入框</span>
        <span>
				<el-input placeholder="设定最大输入长度输入框" v-model="model" :clearable="true" :maxlength="50"/>
			</span>
        <a href="javascript:void(0)" class="view" @click="view('elementInput')">示例代码</a>
      </div>
      <div class="row" v-if="map.elementInput.flag">
        <span class="ued-tag-basic"></span>
        <div class="code">
          <input type="button" class="copy" @click="copy" value="复制代码">
          <pre v-text="map.elementInput.html.join('\n')"></pre>
          <pre v-text="map.elementInput.scriptText" v-if="map.elementInput.scriptText"></pre>
        </div>
      </div>
      <div class="row">
        <span class="ued-tag-basic">文本域输入框</span>
        <span>
				<el-input type="textarea" :maxlength="200" :autosize="{ minRows: 2, maxRows: 4}" placeholder="文本域textarea" v-model="model" :clearable="true"/>
			</span>
        <a href="javascript:void(0)" class="view" @click="view('elementTextarea')">示例代码</a>
      </div>
      <div class="row" v-if="map.elementTextarea.flag">
        <span class="ued-tag-basic"></span>
        <div class="code">
          <input type="button" class="copy" @click="copy" value="复制代码">
          <pre v-text="map.elementTextarea.html.join('\n')"></pre>
          <pre v-text="map.elementTextarea.scriptText" v-if="map.elementTextarea.scriptText"></pre>
        </div>
      </div>
      <div class="row">
        <span class="ued-tag-basic">计数器</span>
        <span>
				<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" ></el-input-number>
			</span>
        <a href="javascript:void(0)" class="view" @click="view('elementInputnum')">示例代码</a>
      </div>
      <div class="row" v-if="map.elementInputnum.flag">
        <span class="ued-tag-basic"></span>
        <div class="code">
          <input type="button" class="copy" @click="copy" value="复制代码">
          <pre v-text="map.elementInputnum.html.join('\n')"></pre>
          <pre v-text="map.elementInputnum.scriptText" v-if="map.elementInputnum.scriptText"></pre>
        </div>
      </div>
      <div class="row">
        <span class="ued-tag-basic">下拉框</span>
        <span>
			<el-select v-model="val" placeholder="请选择" :clearable="true">
			    <el-option
			      v-for="item in dataArr"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</span>
        <a href="javascript:void(0)" class="view" @click="view('elementSelect')">示例代码</a>
      </div>
      <div class="row" v-if="map.elementSelect.flag">
        <span class="ued-tag-basic"></span>
        <div class="code">
          <input type="button" class="copy" @click="copy" value="复制代码">
          <pre v-text="map.elementSelect.html.join('\n')"></pre>
          <pre v-text="map.elementSelect.scriptText" v-if="map.elementSelect.scriptText"></pre>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import sweet from "sweetalert"
import copy from "copy-to-clipboard"

export default {
  name: 'formCheckbox',
  data() {
    return {
      model: "",
      num: 1,
      val: "",
      dataArr: [{
      	value: "test1",
      	label: "test1"
      },{
      	value: "test2",
      	label: "test2"
      },{
      	value: "test3",
      	label: "test3"
      }],
      map: {
        elementInput: {
          flag: false,
          html: [
            '<!-- clearable: 可清除属性 boolean; maxlength: 输入框最大的输入长度 number; -->',
            '<el-input placeholder="设定最大输入长度输入框" v-model="model" :clearable="true" :maxlength="50"/>'
          ],
          scriptText: [
            'export default{',
            '	data() {',
            '		return {',
            '        	model: "",',
            '      	};',
            '    }',
            '}'
          ].join("\n")
        },
        elementTextarea: {
          flag: false,
          html: [
            '<!-- clearable: 可清除属性 boolean; maxlength: 输入框最大的输入长度 number; autosize: 自适应内容高度，只对 type="textarea" 有效 -->',
            '<el-input type="textarea" :maxlength="200" :autosize="{ minRows: 2, maxRows: 4}" placeholder="文本域textarea" v-model="model" :clearable="true"/>'
          ],
          scriptText: [
            'export default{',
            '	data() {',
            '		return {',
            '        	model: "",',
            '      	};',
            '    }',
            '}'
          ].join("\n")
        },
        elementInputnum: {
          flag: false,
          html: [
            '<!-- min: 最小值 number; max: 最大值 number -->',
            '<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" ></el-input-number>'
          ],
          scriptText: [
            'export default{',
            '	data() {',
            '		return {',
            '        	num: "",',
            '      	};',
            '    }',
            '	methods: {',
            '      handleChange(value) {',
            '        console.log(value);',
            '      }',
            '    }',
            '}'
          ].join("\n")
        },
        elementSelect: {
          flag: false,
          html: [
            '<el-select v-model="val" placeholder="请选择" :clearable="true">',
			'    <el-option',
			'      v-for="item in dataArr"',
			'      :key="item.value"',
			'      :label="item.label"',
			'      :value="item.value">',
			'    </el-option>',
			'</el-select>'
          ],
          scriptText: [
            'export default{',
            '	data() {',
            '		return {',
            '        	val: "",',
            '			dataArr: [{',
			'		      	value: "test1",',
			'		      	label: "test1"',
			'		    },{',
			'		      	value: "test2",',
			'		      	label: "test2"',
			'		    },{',
			'		      	value: "test3",',
			'		      	label: "test3"',
			'		    }]',
            '      	};',
            '    }',
            '	methods: {',
            '      handleChange(value) {',
            '        console.log(value);',
            '      }',
            '    }',
            '}'
          ].join("\n")
        }
      }
    };
  },
  methods: {
    view(param) {
      var _this = this;
      for (var p in this.map) {
        (p != param) && (_this.map[p].flag = false);
      }
      (_this.map[param].flag) ? (_this.map[param].flag = false) : (_this.map[param].flag = true);
    },
    handleChange(value) {
      console.log(value);
    },
    copy(event) {
      var code = event.target.parentNode.getElementsByTagName('pre')[0].innerText;
      copy(code)
    }
  },
  mounted() {
    this.$emit("hideHeaderAndLeft", { show: true });

    for (var p in this.map) {
      if (this.map[p].script) {
        this.map[p].script();
      }
    }
  }
}

</script>
<style scoped>
.c-row {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.c-row .title {
  font-size: 16px;
  padding-bottom: 10px;
  color: #333;
}

.c-row a {
  color: blue;
}

.c-row>div {
  border: 1px solid #ddd;
  padding: 20px;
  min-width: 40%;
  font-size: 14px;
  box-sizing: border-box;
}

.c-row>div p {
  margin-bottom: 5px;
}

</style>
