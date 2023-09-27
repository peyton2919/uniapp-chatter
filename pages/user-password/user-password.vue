<template>
	<!-- 修改用户密码 -->
	<view>
		<input class="uni-input" type="text" placeholder="输入旧密码"
				v-model="oldpwd"/>
		<input class="uni-input" type="text" placeholder="输入新密码"
				v-model="newpwd"/>
		<input class="uni-input" type="text" placeholder="确认新密码"
				v-model="renewpwd"/>
		
		<submit-button name="设置" :disabled="disabled"
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
				oldpwd:'',
				newpwd:'',
				renewpwd:'',
				
			}
		},
		computed:{
			disabled(){
				return this.oldpwd === '' || this.newpwd === ' ' || this.renewpwd === ''
			}
		},
		methods: {
			// 验证
			check(){
				if (this.newpwd !== this.renewpwd) {
					uni.showToast({
						title: '输入两次密码不一致',
						icon: 'none'
					});
					return false;
				}
				return true;
			},
			// 点击事件
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
