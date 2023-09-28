<template>
	<view class="p-2 flex align-center border-bottom border-light-secondary"
		hover-class="bg-light">
		<!-- 左边 -->
		<image :src="item.avatar" 
				class="i-100 rounded-circle mr-2"></image>
		<!-- 右边 -->
		<view class="flex flex-column flex-1">
			<text class="font-md text-dark">{{item.username}}</text>
			<uni-badge :text="item.age" size="normal" class="pt-2"
				:type="item.sex === 1 ?'error':'primary'"  >
				<text v-if="item.sex > 0" 
					class="iconfont font-sm"
					:class="item.sex === 1 ? 'icon-nv':'icon-nan'"></text>
			</uni-badge>
		</view>
		<view class="uni-icon uni-icon-checkbox-filled"
			:class="item.isFollow ? 'text-light-muted':'text-main'">
			
		</view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
	/**
	 * @description 用户列表组件
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
		}
	}
</script>

<style>
</style>