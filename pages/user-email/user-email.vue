<template>
	<!-- 绑定邮箱 -->
	<view>
		<input class="uni-input" type="text" value="" placeholder="请输入你要绑定的邮箱"
				v-model="email"/>
		<input class="uni-input" type="text" value="" placeholder="请输入密码"
				v-model="pwd"/>
	
		
		<submit-button name="完成" :disabled="disabled"
			@click="submit"></submit-button>
	</view>
</template>

<script>
	import submitButton from "@/components/common/submit-button.vue"
	
	export default {
		components:{
			submitButton
		},
		data() {
			return {
				email:'',
				pwd:''
			}
		},
		computed:{
			disabled(){
				return this.email === '' || this.pwd === ''
			}
		},
		methods: {
			// 
			check(){
				let rule = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if (!rule.test(this.email)) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon:"none"
					});
					return false;
				}
				return true;
			},
			submit(){
				if (!this.check()) {
					return;
				}
				console.log('提交成功');
			}
			
		}
	}
</script>

<style>

</style>
