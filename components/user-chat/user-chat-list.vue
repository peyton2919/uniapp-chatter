<template>
	
	<view>
		<view class="py-1 flex align-center justify-center font-sm text-light-muted"
				 v-if="shortTime">
			{{shortTime}}
		</view>
		
		<!-- 消息气泡 -->
		<view class="flex align-start px-2 my-2"
				:style="isSelf?'flex-direction: row-reverse;':''">
			<image :src="item.avatar" class="i-100 rounded-circle"></image>
			<view class="bg-light p-2 rounded mx-2" style=" max-width: 400rpx;">
				{{item.data}}
			</view>
		</view>
	</view>
	
</template>

<script>
	// 模拟当前登录用户的 userid
	const uid = 1;
	
	import $T from "@/common/js/time.js"
	/**
	 * @description 用户聊天列表 组件
	 * @property {Object} item 要展示对象
	 * @property {Number} index 索引
	 * @property {Number| String} pretime 上条信息时间 [时间戳]
	 */
	export default {
		props:{
			item:{
				type:Object,
				required:true
			},
			index:{
				type:Number,
				default:0
			},
			// 上条信息时间
			pretime:{
				type:[Number,String],
				default:0
			}
		},
		computed:{
			// 是否是登录用户本人
			isSelf(){
				return uid === this.item.user_id
			},
			// 转化时间
			shortTime(){
				return $T.getChatTime(this.item.create_time,this.pretime)
			}
		}
	}
</script>

<style>
</style>