<template>
	<!-- 搜索页 -->
	<view>
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 font-md px-2">搜索历史</view>
			<view class="flex flex-wrap">
				<view class="border rounded font mx-2 my-1 px-2 py-2 " 
					hover-class="bg-light"
					v-for="(item,index) in list" :id="index"
					@click="clickSearchHistory(item)">{{item}}</view>
			</view>
		</template>
		
		<template v-else>
			<!-- 数据列表 -->
			<block v-for="(item,index) in searchList" :key="index">
				<common-list :item="item" :index="index"></common-list>
			</block>
		</template>
	</view>
</template>

<script>
	const demo = [
		{
			username:"昵称1",
			userpic:"/static/default.jpg",
			createtime:"2023-09-20 下午15:30",
			isfollow:false,
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
			isfollow:false,
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
			isfollow:false,
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
	];
	
	import commonList from "@/components/common/common-list.vue"
	export default {
		components:{
			commonList
		},
		data() {
			return {
				searchText:'',
				list:['uni-app第二商城类实战开发','php','c++','人工智能',
					'uni-app第三季仿微信实战开发','实战教程','系统教程','java'],
				// 搜索结果
				searchList:[]
			}
		},
		// 监听导航输入
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		// 监听点击导航搜索按钮
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				this.searchEvent()
			}
		},
		methods: {
			// 点击搜索历史
			clickSearchHistory(e){
				this.searchText = e
				this.searchEvent()
			},
			// 搜索事件
			searchEvent(){
				// 收起键盘、
				uni.hideKeyboard()
				// 显示 loading 状态
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				// 请求搜索
				setTimeout(()=>{
					this.searchList = demo
					// 隐藏 loading 状态
					uni.hideLoading()
				},3000)
			}
			
		}
	}
</script>

<style>

</style>
