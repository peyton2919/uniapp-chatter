<template>
	<!-- 列表 加载更多 -->
	<view class="flex align-center justify-center py-2">
		<text class="font text-light-muted">{{str}}</text>
	</view>
</template>

<script>
	/**
	 * @description 上拉加载更多 组件
	 * @property {String} 加载状态 名称 ['上拉加载更多','加载中...','没有更多了']
	 */
	export default {
		props:{
			str:{
				type:String,
				default:'...'
			}
		}
	}
</script>

<style>
</style>