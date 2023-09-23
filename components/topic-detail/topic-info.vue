<template>
	<view>
		<view class="position-relative">
			<image :src="obj.cover" mode="aspectFill"
				style="height: 300rpx;" class="w-100 filter"></image>
		</view>
		
		<view class="position-relative bg-white px-2 pb-2" style="z-index: 10;">
			<view class="flex">
				<image :src="obj.cover"
					style="height: 150rpx; width: 150rpx; margin-top: -75rpx;" 
					class="rounded mr-2"></image>
				
				<text class="font-md">#{{obj.title}}#</text>
			</view>
			
			<view class="flex align-center font text-secondary my-1">
				<text class="mr-2">动态: {{obj.dynamic_count}}</text>
				<text>今日: {{obj.today_count}}</text>
			</view>
			
			<view class="text-secondary font-md">{{obj.desc}}</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			obj:{
				type:Object
			}
		}
	}
</script>

<style>
</style>