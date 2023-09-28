<template>
	<view>
		<view class="flex align-center justify-between w-100 px-2 py-2">
			<text class="font-md font-weight-bold">热门分类</text>
			<view class="flex align-center font text-secondary animated px-2" hover-class="jello"
					@click="openMore">
				更多 <text class="iconfont icon-jinru"></text>
			</view>
		</view>
		
		<view class="flex align-center py-2 px-2 border-bottom">
			<view class="border rounded bg-light mx-1 px-1 animated"
				hover-class="jello"
				v-for="(item,index) in arr" :key="index"
				@click="openDetail(item)">
				{{item.name}}
			</view>
			
		</view>
	</view>
</template>

<script>
	/**
	 * @description 热门分类 组件
	 * @property {Array} arr 热门分类集合
	 */
	export default {
		props:{
			arr:{
				type:Array,
				default:[]
			}
		},
		methods:{
			openMore(){
				uni.navigateTo({
					url:'/pages/topic-nav/topic-nav'
				});
			},
			openDetail(e){
				console.log('打开话题分类页');
			}
		}
	}
</script>

<style>
</style>