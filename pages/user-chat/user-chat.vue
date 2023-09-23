<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px'">
			
			<!-- 左边 -->
			<view class="flex align-start px-2 my-2">
				<image src="/static/default.jpg" class="i-100 rounded-circle"></image>
				<view class="bg-light p-2 rounded mx-2" style="min-width: 200rpx; max-width: 400rpx;">
					你好
				</view>
			</view>
			
			<!-- 右边 -->
			<view class="flex align-start px-2 my-2" style="flex-direction: row-reverse;">
				<image src="/static/default.jpg" class="i-100 rounded-circle"></image>
				<view class="bg-light p-2 rounded mx-2" style="min-width: 200rpx; max-width: 400rpx;">
					你好
				</view>
			</view>
		</scroll-view>
		
		<!-- 底部操作条 -->
		<view class="fixed-bottom h-100 flex align-center border-top bg-white">
			<input type="text" class="flex-1 rounded bg-light ml-2"
					style="padding: 5rpx;" placeholder="文明发言"/>
			<view class="iconfont icon-fabu i-100 flex align-center justify-center font-lg animated"
					hover-class="jello text-main"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollH:500,
				list:[
					{user_id:1,avatar:"",username:"",data:"你好",type:"text",create_time:1695438918}
				]
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
