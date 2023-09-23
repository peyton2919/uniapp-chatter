<template>
	<!-- 话题导航页 -->
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollIntoView"
			scroll-with-animation style="height: 100rpx;"
			class="scroll-row">
			<view class="scroll-row-item px-3 py-2 font-md" 
			v-for="(item,index) in tabBars" :key="index" :id="'tab'+index"
			:class="tabIndex===index?'text-main font-lg font-weight-bold':''"
			@click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>
			
		<!--  circular 可循环滑动 -->
		<swiper class="swiper" :duration="150" :current="tabIndex" 
			:style="'height:'+scrollH+'px;'"
			@change="onChangeTab">
			<!-- @scrolltolower 下拉触底事件 -->
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y :style="'height:'+scrollH+'px;'"
					@scrolltolower="loadmore(index)">
					
					<!-- 判断列表有数据 -->
					<template v-if="item.list.length>0">
						<!--  列表 -->
						<block v-for="(item2,index2) in item.list" :key="index2">
						
							<topic-list :item="item2" :index="index2"></topic-list>
									
							<divider></divider>
						</block>
						
						<!-- 上拉加载 -->
						<load-more :str="item.loadmore"></load-more>
					</template>
					
					<!-- 判断列表没有数据 -->
					<template v-else>
						<no-thing str="什么都没有"></no-thing>
					</template>
				</scroll-view>
			</swiper-item>	
		</swiper>
		
	</view>
</template>

<script>
	const demo = [
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称1',desc:'话题描述1',today_count:0,dynamic_count:10},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称2',desc:'话题描述2',today_count:2,dynamic_count:20},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称3',desc:'话题描述3',today_count:3,dynamic_count:30},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称4',desc:'话题描述4',today_count:4,dynamic_count:40},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称5',desc:'话题描述5',today_count:5,dynamic_count:50}
	];
	
	import topicList from '@/components/dynamic/topic-list.vue';
	import loadMore from "@/components/common/load-more.vue"
	
	export default {
		components:{
			topicList,loadMore
		},
		data() {
			return {
				// 列表高度
				scrollH:500,
				scrollIntoView:"",
				// 顶部选项卡索引
				tabIndex:0,
				// 顶部选项卡
				tabBars:[{name:'关注'},{name:'推荐'},{name:'体育'},{name:'热点'},
					{name:'财经'},{name:'娱乐'},{name:'军事'},{name:'历史'},{name:'本地'}],
				newsList:[]
			}
		},
		onLoad() {
			// 获取 窗体高度信息
			let res = uni.getSystemInfo({
				success:res=>{
					// px
					this.scrollH = res.windowHeight-uni.upx2px(101)
				}
			});
			
			// 根据选项卡生成列表
			this.getData();
			
		},
		// 监听点击导航搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search',
			})
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add-input/add-input',
			});
		},
		methods: {
			// 获取数据
			getData(){
				var arr=[]
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj = {
						// 1.上拉加载更多 2. 加载中... 3. 没有更多了
						loadmore:"上拉加载更多",
						list:[]
					}
					if(i<3){
						obj.list = demo
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			// 监听滑动
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			// 切换选项卡
			changeTab(index){
				if(this.tabIndex === index){
					return;
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollIntoView='tab'+index
			},
			//上拉加载更多
			loadmore(index){

				// 拿到当前列表
				let item = this.newsList[index]
				// 判断是否处于可加载状态
				if(item.loadmore !== '上拉加载更多'){return;}
				
				// 修改当前列表加载状态
				item.loadmore='加载中...'
				setTimeout(()=>{
					item.list=[...item.list,...item.list]
					item.loadmore='上拉加载更多'
				},10000)
			}
		}
	}
</script>

<style>
	.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}
</style>

