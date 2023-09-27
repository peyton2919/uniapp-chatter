<template>
	<!-- 提交按钮 -->
	<view class="py-2 px-3" >
		<button class="bg-main text-white left-0 right-0 bottom-0" 
			style="border-radius: 50rpx; border: 0;" type="primary" :disabled="disabled"
			:class="disabled ? 'bg-main-disabled-gray':''"
			@click="submit">
			{{name}}
		</button>
	</view>
</template>

<script>
	export default {
		props:{
			name:{
				type:String,
				default:'提交'   // 退出登录
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			// 点击事件
			submit(){
				this.$emit('click')
			}
		}
	}
</script>

<style>
</style>