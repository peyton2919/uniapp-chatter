<template>
	<!-- 消息列表页 包含弹出层 uni-popup-->
	<view>
		<template v-if="list.length > 0">
			<!-- 消息列表 -->
			<block v-for="(item,index) in list" :key="index">
				<msg-list :item="item" :index="index"></msg-list>
			</block>
		</template>
		
		<template v-else>
			<no-thing str="没找到相关数据..."></no-thing>
		</template>
		
		<!-- 弹出层 -->
		<uni-popup ref="popup" type="top" 
				class="w-100 pb-3 bg-white" >
			<view class="flex align-center justify-center border-bottom font-md py-2"
					hover-class="bg-light" 
					@click="popupEvent('friend')">
				<text class="iconfont icon-sousuo mr-2"></text>添加好友
			</view>
			
			<view class="flex align-center justify-center font-md py-2"
					hover-class="bg-light"
					@click="popupEvent('friend')">
				<text class="iconfont icon-shanchu mr-2"></text>清除列表
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo = [{
			avatar:'/static/default.jpg',
			username:'Judy',
			update_time:1695263814,
			data:'同步手机端程序文件',
			noread:12
		},{
			avatar:'/static/default.jpg',
			username:'张三',
			update_time:1695263814,
			data:'子组件无法更改',
			noread:2
		},{
			avatar:'/static/default.jpg',
			username:'李四',
			update_time:1695296214,
			data:'浏览器控制台中抛出警告',
			noread:5
		},{
			avatar:'/static/default.jpg',
			username:'王五',
			update_time:1695209760,
			data:'不满足类型要求',
			noread:23
		},{
			avatar:'/static/default.jpg',
			username:'张无忌',
			update_time:1692520560,
			data:'允许了子组件以某种不明显的方式影响父组件的状态',
			noread:8
		}];
	
	import msgList from "@/components/msg/msg-list.vue"
	import uniPopup from "@/components/uni-ui/uni-popup/uni-popup.vue"
	
	export default {
		components:{
			msgList,uniPopup
		},
		data() {
			return {
				list:[]
			}
		},
		onLoad() {
			this.list = demo
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.refresh()
		},
		// 监听原生导航栏按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:	// 点击左边
					uni.navigateTo({
						url:'/pages/user-list/user-list'
					})
					// 关闭弹出层
					this.$refs.popup.close()
					break;
				case 1:	// 点击右边
					// 弹出弹出层
					this.$refs.popup.open()
					break;
			}
		},
		methods: {
			// 下拉刷新
			refresh(){
				setTimeout(()=>{
					this.list = demo
					// 停止下拉刷新
					uni.stopPullDownRefresh()
				},2000)
			},
			// 弹出层选项点击事件
			popupEvent(e){
				switch(e){
					case 'friend':
						console.log('添加好友')
						break;
					case 'clear':
						console.log('清除列表')
						break;
				}
				this.$refs.popup.close()
			}
			
		}
	}
</script>

<style>

</style>
