<template>
	<!-- 首页 包含 scroll-view,swiper, -->
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollIntoView"
			scroll-with-animation style="height: 100rpx; z-index: 999;"
			class="scroll-row bg-white position-absolute">
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
							<common-list :item="item2" :index="index2"
									@doFollow="doFollow" @doSupport="doSupport"></common-list>
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
		{username:"昵称1",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"support",supportcount:1,unsupportcount:3},commentcount:2,sharenum:5},
		{username:"昵称2",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:false,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"unsupport",supportcount:41,unsupportcount:3},commentcount:12,sharenum:9},
		{username:"昵称3",userpic:"/static/default.jpg",createtime:"2023-09-21 下午15:35",
			isfollow:false,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"",supportcount:0,unsupportcount:0},commentcount:0,sharenum:0}
	];
	
	import commonList from '@/components/common/common-list.vue'
	import loadMore from "@/components/common/load-more.vue"
	
	
	export default {
		components:{
			commonList,loadMore
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
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			});
			
			// 根据选项卡生成列表
			this.getData();
			
		},
		// 监听点击导航搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search?type=post',
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
			// 关注
			doFollow(e){
				this.list[e].isfollow=true;
				uni.showToast({
					title:'关注成功!'
				})
			},
			//顶踩操作
			doSupport(e){
				// 用户
				let item = this.newsList[this.tabIndex].list[e.index]
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
