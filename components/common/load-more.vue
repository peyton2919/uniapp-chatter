<template>
	<!-- 列表 加载更多 -->
	<view class="flex align-center justify-center py-2">
		<text class="font text-light-muted">{{str}}</text>
	</view>
</template>

<script>
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