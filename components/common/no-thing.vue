<template>
	<!-- 没有数据默认页面 -->
	<view class="flex flex-column align-center justify-center pt-5">
		<image src="/static/common/nothing.png"
			style="width: 300rpx; height: 300rpx;"></image>
			<text class="font-md">{{str}}</text>
	</view>
</template>

<script>
	/**
	 * @description 没有数据 默认 组件
	 * @property {String} str 提示语
	 */
	export default {
		props:{
			str:{
				type:String,
				default:'没找到相应页'
			}
		}
	}
</script>

<style>
</style>