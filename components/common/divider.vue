<template>
	<!-- 分割线 -->
	<view :style="`height: ${dividerH}rpx;background-color: #${dividerBC};`"></view>
</template>

<script>
	/**
	 * @description 分割线 组件 
	 * @property {Number,String} dividerH 分割线高度 默认 15 rpx
	 * @property {String} dividerBC 分割线背景颜色 默认 f5f5f4[直接6位16进数据]
	 */
	export default {
		props:{
			dividerH:{
				type:[Number,String],
				default:15
			},
			dividerBC:{
				type:String,
				default:'f5f5f4'
			}
		}
	}
</script>

<style>
</style>