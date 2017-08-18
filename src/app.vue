<!--组件都写在vue文件里面， .vue文件都是组建-->
<!--const component1 = Vue("news",{
	在.vue文件中，文件的名字就相当于组件的名字
	在这个文件的内部直接写template模板就可以啦
	
})-->

<!--给模板中的内容添加样式-->
<style>
	
</style>

<!--组件的模板-->
<template>
	<div>

		<!--头部-->
		<mt-header title="vue">
			<router-link to="/home" slot="left" v-if="isTrue" @click='goback'>
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<!--中间-->
		<router-view></router-view>
		<!--底部-->
		<!--从mui获取的框架-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shoppingCar">
				<span class="mui-icon mui-icon-email"><span class="mui-badge" id="badge">0</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/call">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>
<!--组件的逻辑-->
<script>
	// 导入邻居组件
    import {Linju} from './components/tools/linju'
	Linju.$on('carInfo',function(number){
		var badge = document.getElementById("badge")
		let badgeNum = badge.innerText - 0
		badgeNum += number
		badge.innerText = badgeNum
	})
	// 想在这里面写js语句，必须导出
	export default {
		data(){
			return {
				isTrue: true
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		watch:{
			'$route': function(newValue , oldValue){
				console.log(newValue.path)
				if(newValue.path == '/home'){
					this.isTrue = false
				}else{
					this.isTrue = true
				}
			}
		}
	}
</script>
