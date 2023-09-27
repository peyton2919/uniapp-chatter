<template>
	<!-- 关于 页面 -->
	<view>
		<view class="flex flex-column align-center justify-center pt3 pb-3">
			<image src="/static/common/nothing.png" class="i-300 rounded-circle"></image>
			<text class="font text-muted mt-2">version 1.0.1</text>
		</view>
		<uni-list-iem title="新版本检测" showArrow></uni-list-iem>
		<uni-list-iem title="社区用户协议" showArrow></uni-list-iem>
	</view>
</template>

<script>
	import uniListIem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	export default {
		components:{
			uniListIem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
