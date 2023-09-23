<template>
	<!-- 动态页 包含 nav-bar,swiper,scroll-view -->
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar :border="false" :fixed="true" :statusBar="true" 
				@clickRight="openAddInput">
			<view class="flex align-center justify-center font-weight-bold w-100">
				<!-- <view class="font-lg text-main mx-2">关注</view> -->
				<view :class="tabIndex === index?'font-lg text-main':'font-md text-light-muted'"
					class="mx-2" v-for="(item,index) in tabBars" :id="index"
					@click="changeTab(index)">{{item.name}}</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon"></text>
		</uni-nav-bar>
		
		<!-- 关注 -->
		<!--  circular 可循环滑动 -->
		<swiper :current="tabIndex" :duration="150" :style="'height:'+scrollH+'px;'"
			@change="onChangeTab">
			<!-- @scrolltolower 下拉触底事件 -->
			<swiper-item>
				
				<scroll-view scroll-y :style="'height:'+scrollH+'px;'"
						@scrolltolower="loadmoreEvent">
					<block v-for="(item,index) in list" :key="index">
						<common-list :item="item" :index="index"
								 @doSupport="doSupport"></common-list>
						<divider></divider>
					</block>
					<load-more :str="loadmore"></load-more>
				</scroll-view>
			</swiper-item>
			
			<!-- 话题 -->
			<swiper-item>
				
				<scroll-view scroll-y :style="'height:'+scrollH+'px;'"
						@scrolltolower="loadmoreEvent">
					<!-- 热闹分类 -->
					<hot-cate :arr="hotCate" ></hot-cate>
					
					<!-- 搜索框 -->
					<view class="p-2">
						<view class="flex align-center justify-center bg-light rounded py-2 text-secondary">
							<text class="iconfont icon-sousuo mr-2"></text>
							搜索话题
						</view>
					</view>
					
					<!-- 轮播图 -->
					<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
							class="px-2 pb-2">
						<swiper-item>
							<image src="/static/demo/banner2.jpg"
								style="height: 300rpx;" class="w-100 rounded"></image>
						</swiper-item>
					</swiper>
					<divider></divider>
					
					<!-- 最近更新 -->
					<view class="p-2 font-md">最近更新</view>
					<!-- 话题列表 -->
					<block v-for="(item,index) in topicList" :id="index">
						<topic-list :item="item" :index="index"></topic-list>
					</block>

				</scroll-view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	const demo = [
		{
			username:"昵称1",
			userpic:"/static/default.jpg",
			createtime:"2023-09-20 下午15:30",
			isfollow:true,
			title:"我是标题",
			titlepic:"/static/demo/datapic/11.jpg",
			support:{
				type:"support",
				supportcount:1,
				unsupportcount:3
			},
			commentcount:2,
			sharenum:5
		},
		{
			username:"昵称2",
			userpic:"/static/default.jpg",
			createtime:"2023-09-20 下午15:30",
			isfollow:true,
			title:"我是标题",
			titlepic:"/static/demo/datapic/11.jpg",
			support:{
				type:"unsupport",
				supportcount:41,
				unsupportcount:3
			},
			commentcount:12,
			sharenum:9
		},
		{
			username:"昵称3",
			userpic:"/static/default.jpg",
			createtime:"2023-09-21 下午15:35",
			isfollow:true,
			title:"我是标题",
			titlepic:"/static/demo/datapic/11.jpg",
			support:{
				type:"",
				supportcount:0,
				unsupportcount:0
			},
			commentcount:0,
			sharenum:0
		}
	]
	
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/load-more.vue"
	import hotCate from "@/components/dynamic/hot-cate.vue"
	import topicList from "@/components/dynamic/topic-list.vue"
	
	export default {
		components:{
			uniNavBar,commonList,loadMore,hotCate,topicList,
		},
		data() {
			return {
				// 窗体高度
				scrollH:500,
				// 默认选中
				tabIndex:0,
				tabBars:[{name:'关注'},{name:'话题'}],
				// 列表
				list:[],
				// 1.上拉加载更多 2. 加载中... 3. 没有更多了
				loadmore:'上拉加载更多',
				hotCate:[{name:'关注'},{name:'推荐'},{name:'体育'},
							{name:'热点'},{name:'财经'},{name:'娱乐'},],
				topicList:[{
					cover:'/static/demo/topicpic/1.jpeg',
					title:'话题名称1',
					desc:'话题描述1',
					today_count:'0',
					dynamic_count:'10'
				},{
					cover:'/static/demo/topicpic/1.jpeg',
					title:'话题名称2',
					desc:'话题描述2',
					today_count:'2',
					dynamic_count:'20'
				},{
					cover:'/static/demo/topicpic/1.jpeg',
					title:'话题名称3',
					desc:'话题描述3',
					today_count:'3',
					dynamic_count:'30'
				},{
					cover:'/static/demo/topicpic/1.jpeg',
					title:'话题名称4',
					desc:'话题描述4',
					today_count:'4',
					dynamic_count:'40'
				},{
					cover:'/static/demo/topicpic/1.jpeg',
					title:'话题名称5',
					desc:'话题描述5',
					today_count:'5',
					dynamic_count:'50'
				}]
			}
		},
		onLoad() {
			// 获取 窗体高度信息
			let res = uni.getSystemInfo({
				success:res=>{
					// px
					this.scrollH = res.windowHeight - res.statusBarHeight - 44
				}
			});
			// 加载测试数据
			this.list = demo
		},
		methods: {
			// 打开发布页
			openAddInput(){
				uni.navigateTo({
					url:"/pages/add-input/add-input"
				})
			},
			// 切换选项卡
			changeTab(e){
				this.tabIndex = e
			},
			// 监听滑动
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			//顶踩操作
			doSupport(e){
				// 用户
				let item = this.list[e.index]
				let msg = e.type === 'support'? '顶':'踩'
				// 判断之前是否已经顶踩
				// 之前没有操作过
				if(item.support.type === ''){
					item.support[e.type+'count']++
				}else if(item.support.type === 'support' && e.type === 'unsupport'){// 之前顶了
					// 顶 -1 ； 踩 +1
					item.support.supportcount--;
					item.support.unsupportcount++;
				}else if(item.support.type === 'unsupport' && e.type === 'support'){// 之前踩了
					// 顶 +1 ； 踩 -1
					item.support.supportcount++;
					item.support.unsupportcount--;
				}
				item.support.type = e.type	
				uni.showToast({
					title: msg + ' -> 成功'
				});
			},
			// 上拉加载
			loadmoreEvent(){
				// 验证当前是否处于可加载状态
				if(this.loadmore !== '上拉加载更多'){return;}
				// 设置加载状态
				this.loadmore = '加载中...'
				setTimeout(()=>{
					// 加载数据
					this.list =[...this.list,...this.list]
					// 设置加载状态
					this.loadmore = '上拉加载更多'
				},2000)
			}
		}
	}
</script>

<style>

</style>
