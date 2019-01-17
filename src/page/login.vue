<template>
	<div class="login_wrap">
		<p class="title">登录</p>
		<el-form :label-position="labelPosition" label-width="80px">
			<el-form-item label="用户名">
		    	<el-input v-model="username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
		    	<el-input type="password" v-model="password"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="login">登录</el-button>
			    <el-button type="primary" @click="reset">重置</el-button>
			</el-form-item>
		</el-form>
		<p>推荐使用IE11+/chrome/firfox等浏览器访问本站</p>
	</div>
</template>

<script>
import eking from "@/lib/eking"
import sweet from "sweetalert"

export default{
	name: 'login',
	data(){
		return {
			labelPosition: 'right',
			username:'admin',
			password:'admin'
		};
	},
	methods:{
		login(){
			var _this = this;
			_this.$router.push({path:'/desc/index'})
			// return false;
			eking.net.get("login",{
				user : _this.username,
				password : _this.password
			},function(json){
				if(json.code == 0){
					// 记录用户名
					_this.$store.dispatch('setLogined',{
						username : _this.username
					});
					// 跳转页面
					_this.$router.push({path:'/desc/index'})
				}
			})
		},
		reset(){
			this.username = "";
			this.password = "";
		}
	},
	mounted(){
		this.$emit("hideHeaderAndLeft",{hide:true})		
	}
}	
</script>

<style scoped>
.login_wrap{
	display: flex;
	width:500px;
	height:300px;
	box-shadow: 2px 2px 2px #d5d5d5;
	background-color: #7ccfff;
	border-radius: 5px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0px auto;
}
.title{
	display: flex;
	width: 100%;
	height: 50px;
	font-size:16px;
	justify-content: center;
	align-items: center;
}
label{
	color:#999999;
}
</style>