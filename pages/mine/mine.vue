<template>
	<view>
		<navigator url="/pages/login/login">
			<view class="flex align-center p-2" hover-class="bg-light">
				<image src="@/static/default.jpg" class="i-100 rounded-circle"></image>
				<view class="flex flex-column flex-1 px-2">
					<view class="font-lg font-weight-bold">昵称</view>
					<text class="font text-muted">总帖子 10  今日发贴 0</text>
				</view>
				<text class="iconfont icon-jinru"></text>
			</view>
		</navigator>
		
		<view class="flex align-center px-3 py-2">
			<view class="flex-1 flex flex-column align-center justify-center"
					v-for="(item,index) in myDataList" :key="index">
				<text class="font-lg font-weight-bold pb-1">{{item.num}}</text>
				<text class="font text-muted">{{item.name}}</text>
			</view>
		</view>
		
		<!-- 广告位 -->
		<view class="px-3 py-2">
			<image src="/static/demo/banner2.jpg" mode="aspectFill"
				class="h-170 w-100 rounded"></image>
		</view>
		
		<uni-list-item title="浏览历史" showExtraIcon showArrow clickable>
			<text slot="icon" class="iconfont icon-liulan"></text>
		</uni-list-item>
		<uni-list-item title="社区认证" showExtraIcon showArrow clickable>
			<text slot="icon" class="iconfont icon-huiyuanvip"></text>
		</uni-list-item>
		<uni-list-item title="审核帖子" showExtraIcon showArrow clickable>
			<text slot="icon" class="iconfont icon-keyboard"></text>
		</uni-list-item>
		
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	
	export default {
		components:{
			uniListItem
		},	
		data() {
			return {
				myDataList:[{name:"帖子",num:1},{name:"动态",num:2},{name:"评论",num:15},{name:"粉丝",num:10}]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/user-set/user-set',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
