<template>
	<div class="content">
		抱歉，页面还在开发中！
	</div>
</template>

<script>
	export default{
		name:'nofound',
		mounted(){
			this.$emit("hideHeaderAndLeft",{show:true});
		}
	}
</script>

<style scoped>
	.content{
		font-size: 20px;
		text-align: center;
		padding-top: 200px;
	}

</style>