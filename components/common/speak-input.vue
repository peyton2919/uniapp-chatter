<template>
	<!-- 底部发言栏 -->
	<view class="fixed-bottom h-100 flex align-center border-top bg-white">
		<input type="text" class="flex-1 rounded bg-light ml-2"
				style="padding: 5rpx; z-index: 99;" placeholder="文明发言"
				v-model="content" :adjust-position="false"
				@confirm="submit"/>
				
		<view class="iconfont icon-fabu i-100 flex align-center justify-center font-lg animated"
				hover-class="jello text-main"
				@click="submit"></view>
	</view>
</template>

<script>
	/**
	 * @description 底部发言框
	 */
	export default {
		data(){
			return{
				content:""
			}
		},
		methods:{
			// 发送
			submit(){
				
				if(this.content === ''){
					return uni.showToast({
						title: '消息不能为空!',
						icon:'none'
					});
				}
				this.$emit('submit',this.content)
				
				// 清空输入框
				this.content=''
				
			},
		}
	}
</script>

<style>
</style>