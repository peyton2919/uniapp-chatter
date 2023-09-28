<template>
	
	<view class="flex align-center p-2 border-bottom border-light-secondary"
			hover-class="bg-light"
			@click="open">
		<image :src="item.avatar" class="i-80 rounded-circle mr-2"></image>
		<view class="flex flex-column flex-1 px-2">
			<view class="flex align-center justify-between py-1">
				<text class="font-md">{{item.username}}</text>
				<text class="font text-secondary">{{item.update_time | formatTime}}</text>
			</view>
			<view class="flex align-center justify-between py-1">
				<text  class="text-secondary text-ellipsis" style="max-width: 500rpx;">{{item.data}}</text>
				<uni-badge :text="item.noread" type="error" size="normal"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
	import $T from "@/common/js/time.js"
	
	/**
	 * @description 消息列表 组件
	 * @property {Object} item 要展示对象
	 * @property {Number} index 索引
	 */
	export default {
		components:{
			uniBadge
		},
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
		// 过滤器
		filters:{
			formatTime(v){
				return $T.gettime(v)
			}
		},
		methods:{
			// 打开聊天页
			open(){
				uni.navigateTo({
					url: '/pages/user-chat/user-chat',
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