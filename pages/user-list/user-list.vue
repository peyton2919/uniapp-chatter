<template>
	<!-- 用户列表详情 -->
	<view>
		<!-- tab -->
		<view class="flex align-center h-100">
			<view class="flex align-end justify-center flex-1"
					:class="index === tabIndex ?'font-lg font-weight-bold text-main':'font-md text-dark'"
					v-for="(item,index) in tabBars" :key="index"
					@click="changeTab(index)">
				{{item.name}} 
				<text v-if="item.num > 0" class="ml-2 font">{{item.num}}</text>				
			</view>
			
		</view>
		
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
							
							<!-- 列表样式 -->
							<user-list :item="item2" :index="index2"></user-list>
							
						</block>
						
						<!-- 上拉加载 -->
						<load-more v-if="item.list.length > 10" :str="item.loadmore"></load-more>
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
		{avatar:"/static/default.jpg",username:"Judy",sex:1,age:18,isFollow:true},
		{avatar:"/static/default.jpg",username:"张三",sex:2,age:25,isFollow:false},
		{avatar:"/static/default.jpg",username:"李四",sex:2,age:32,isFollow:true},
		{avatar:"/static/default.jpg",username:"王五",sex:2,age:21,isFollow:false},
		{avatar:"/static/default.jpg",username:"张敏",sex:1,age:15,isFollow:true}
	];
	
	import loadMore from "@/components/common/load-more.vue"
	import userList from "@/components/user-list/user-list.vue"
	
	export default {
		components:{
			loadMore,userList
		},
		data() {
			return {
				// 列表高度
				scrollH:500,
				tabIndex:0,
				tabBars:[{name:'互关',num:0},{name:'关注',num:3},{name:'粉丝',num:23}],
				newsList:[]
			}
		},
		onLoad() {
			// 获取 窗体高度信息
			let res = uni.getSystemInfo({
				success:res=>{
					// px
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			});
			// 根据选项卡生成列表
			this.getData();
		},
		// 监听点击输入框事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search?type=user',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		onNavigationBarButtonTap() {
			uni.navigateBack({
				delta: 1
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
					if(i<2){
						obj.list = demo
					}
					arr.push(obj)
				}
				this.newsList = arr
			},
			// tab 切换
			changeTab(e){
				this.tabIndex = e
			},
			// 监听滑动
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			//上拉加载更多
			loadmore(e){
			
				// 拿到当前列表
				let item = this.newsList[e]
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

</style>
