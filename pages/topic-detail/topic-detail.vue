<template>
	<!-- 话题详情页 -->
	<view>
		<topic-info :obj="info"></topic-info>
		<!-- 分割线 -->
		<divider></divider>
		
		<view class="p-2 flex align-center text-ellipsis border-bottom animated"
				hover-class="bg-light"
				v-for="(item,index) in hotList" :key="index">
			<text class="iconfont icon-xihuan text-main"></text>
			<text class="font text-dark">
				{{item.title}}
			</text>
		</view>
		<!-- 分割线 -->
		<divider></divider>
		
		<!-- tab -->
		<view class="flex align-center py-2">
			<view class="flex align-center justify-center flex-1"
					:class="index === tabIndex ?'font-lg font-weight-bold text-main':'font-md text-dark'"
					v-for="(item,index) in tabBars" :key="index"
					@click="changeTab(index)">{{item.name}}</view>
			
		</view>
		
		<!-- 列表 -->
		<template v-if="listData.length > 0">
			<block v-for="(item,index) in listData" :key="index">
				<common-list :item="item" :index="index"></common-list>
				<!-- 分割线 -->
				<divider></divider>
			</block>
		</template>
		<template v-else>
			<no-thing></no-thing>
		</template>
		
		<!-- 上拉加载 -->
		<load-more :str="loadtext"></load-more>
	</view>
</template>

<script>
	const demo = [
		{username:"昵称1",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"support",supportcount:1,unsupportcount:3},commentcount:2,sharenum:5},
		{username:"昵称2",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"unsupport",supportcount:41,unsupportcount:3},commentcount:12,sharenum:9},
		{username:"昵称3",userpic:"/static/default.jpg",createtime:"2023-09-21 下午15:35",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"",supportcount:0,unsupportcount:0},commentcount:0,sharenum:0}];
	
	import topicInfo from "@/components/topic-detail/topic-info.vue"
	import commonList from "@/components/common/common-list.vue"
	import loadMore from "@/components/common/load-more.vue"
	
	export default {
		components:{
			topicInfo,commonList,loadMore
		},
		data() {
			return {
				info:{
					cover: "/static/demo/topicpic/1.jpeg",
					title: "话题名称1",
					desc: "话题描述1",
					today_count: 0,
					dynamic_count: 10
				},
				hotList:[{title:'【新人必读】uni-app实战第二季商城类项目开发'},
					{title:'【新人必读】uni-app实战第三季仿微信项目开发'}],
				tabIndex:0,
				tabBars:[{name:'默认'},{name:'最新'}],
				// 默认列表
				list1:[],
				loadtext1:'上拉加载更多',
				// 最新列表
				list2:[],
				loadtext2:'上拉加载更多'
			}
		},
		computed:{
			// 当前列表数据
			listData(){
				if (this.tabIndex === 0) {
					return this.list1
				}
				return this.list2
			},
			// 当前 上拉加载
			loadtext(){
				if (this.tabIndex === 0) {
					return this.loadtext1
				}
				return this.loadtext2
			}
		},
		onLoad(e) {
			if (e.detail) {
				let res = JSON.parse(e.detail)
				this.info = res
			}
			this.list1=demo
		},
		// 触底事件
		onReachBottom() {
			this.loadmoreEvent()
		},
		methods: {
			// tab 切换
			changeTab(e){
				this.tabIndex = e
			},
			// 上拉加载更多
			loadmoreEvent(){
				// 拿到当前 列表
				let index = this.tabIndex
				// 判断是否处于加载状态
				if (this.loadtext !== '上拉加载更多') { return;}
				// 设置上拉加载状态处于加载中
				this['loadtext'+(index+1)] = '加载中...'
				// 请求数据
				setTimeout(()=>{
					this['list'+(index+1)] = [...this['list'+(index+1)]
							,...this['list'+(index+1)]]
					this['loadtext'+(index+1)] = '上拉加载更多'
				},1500)
			},
			
		}
	}
</script>

<style>
	.filter{
		filter:blur(10px)
	}
</style>
