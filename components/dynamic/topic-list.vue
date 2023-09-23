<template>
	<!-- 话题列表 -->
	<view class="flex align-center p-2" @click="openTopicDetial">
		<image :src="item.cover" 
			class="rounded mr-2"
			style="height: 150rpx; width: 150rpx;"></image>
		<view class="flex flex-column flex-1">
			<text class="font-md text-dark py-1">#{{item.title}}#</text>
			<text class="font text-secondary py-1">{{item.desc}}</text>
			<view class="flex align-center font text-secondary py-1">
				<text class="mr-2">动态: {{item.dynamic_count}}</text>
				<text>今日: {{item.today_count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				required:true
			},
			index:{
				type:Number,
				default:0
			}
		},
		methods:{
			openTopicDetial(){
				uni.navigateTo({
					url: '/pages/topic-detail/topic-detail?detail='+JSON.stringify(this.item),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
</style>