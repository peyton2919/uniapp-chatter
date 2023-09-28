<template>
	<!-- 列表 -->
	<view class="p-2">
		<!-- 头像昵称 | 关注按钮 -->
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="item.userpic" class="rounded-circle mr-2"
					style="width: 65rpx; height: 65rpx;" lazy-load
					@click.stop="openSpace"></image>
			
				<view>
					<view class="font" style="line-height: 1.5;">{{item.username}}</view>
					<text class="font-sm text-light-muted">{{item.createtime}}</text>
				</view>
				
			</view>
			<!-- 按钮 -->
			<view class="flex align-center justify-center rounded bg-main text-white px-2 py-1 animated faster"
					v-if="!item.isfollow" hover-class="jello"
					@click="doFollow">
				关注
			</view>
		</view>
		
		<!-- 标题 -->
		<view class="font-md my-1"
				@click="openDetail">
			{{item.title}}
		</view>
		
		<!-- 帖子详情 -->
		<slot>
			<!-- 图片 -->
			<image v-if="item.titlepic" :src="item.titlepic"  
				class="rounded w-100" style="height: 350rpx;"
				@click="openDetail"></image>
		</slot>
		
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<!-- 顶 -->
			<view class="flex align-center justify-center flex-1 animated faster"
					hover-class="jello text-main"
					:class="item.support.type === 'support'?'support-active':''"
					@click="doSupport('support')">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.supportcount>0?item.support.supportcount:'支持'}}</text>
			</view>
			
			<!-- 踩 -->
			<view class="flex align-center justify-center flex-1 animated faster"
					hover-class="jello text-main"
					:class="item.support.type === 'unsupport'?'support-active':''"
					@click="doSupport('unsupport')">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupportcount>0?item.support.unsupportcount:'反对'}}</text>
			</view>
			
			<!-- 评论 -->
			<view class="flex align-center justify-center flex-1 animated faster"
					hover-class="jello text-main"
					@click="doComment">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.commentcount>0?item.commentcount:'评论'}}</text>
			</view>
			
			<!-- 分享 -->
			<view class="flex align-center justify-center flex-1 animated faster"
					hover-class="jello text-main"
					@click="doShare">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.sharenum>0?item.sharenum:'分享'}}</text>
			</view>
		</view>	
	</view>
</template>

<script>
	/**
	 * @description 帖子列表 组件
	 * @property {Object} item 要展示对象
	 * @property {Number} index 索引
	 * @property {Boolean} single 用来判断 (详情[true] | 列表[false]) 默认为: 列表[false]
	 * @event {Function} doFollow  点击关注 事件
	 * @event {Function} doSupport  点击顶/踩 事件 
	 * @event {Function} doComment  点击评论 事件 
	 * @event {Function} doShare  点击分享 事件 
	 */
	export default{
		props:{
			item:{
				type:Object,
				required:true
			},
			index:{
				type:Number,
				default:-1
			},
			// 用来判断 (详情 | 列表) 默认为: 列表
			single:{
				type:Boolean,
				default:false
			}
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			// 打开个人空间
			openSpace(){
				uni.navigateTo({
					url: '/pages/user-space/user-space',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 关注
			doFollow(){
				// 通知父组件
				this.$emit('doFollow',this.index);
			},
			// 进入详情页
			openDetail(){
				// 处于详情页 -> 返回;
				if (this.single) {return;}
				uni.navigateTo({
					url: '/pages/detail/detail?detail='+JSON.stringify(this.item),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 顶 踩操作
			doSupport(type){
				// 通知父组件
				this.$emit('doSupport',{
					type:type,
					index:this.index
					});
			},
			// 评论
			doComment(){
				// 处于列表页面
				if(!this.single){
					return this.openDetail()
				}
				this.$emit('doComment')
			},
			// 分享
			doShare(){
				// 处于列表页面
				if(!this.single){
					return this.openDetail()
				}
				this.$emit('doShare')
			},
		}
	}
</script>

<style>
	.support-active{
		color: #ff4a6a;
	}
</style>