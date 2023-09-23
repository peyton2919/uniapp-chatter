<template>
	<!-- 搜索页
		1. 首页(index) 搜索进入
		2. 动态(dynamic)->话题(topic) 搜索进入
		3. 消息（msg)-> 左边导航栏 搜索进入 
		4. 消息（msg)-> 右边导航栏 -> 添加好友  搜索进入 
		-->
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
				<template v-if="type === 'post'">
					<!-- 帖子 -->
					<common-list :item="item" :index="index"></common-list>
				</template>
				
				<template v-else-if="type === 'topic'">
					<!-- 话题 -->
					<topic-list :item="item" :index="index"></topic-list>
				</template>

				<template v-else>
					<!-- 用户 -->
					<user-list :item="item" :index="index"></user-list>
				</template>
			</block>
		</template>
	</view>
</template>

<script>
	const demo1 = [
		{username:"昵称1",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"support",supportcount:1,unsupportcount:3},commentcount:2,sharenum:5},
		{username:"昵称2",userpic:"/static/default.jpg",createtime:"2023-09-20 下午15:30",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"unsupport",supportcount:41,unsupportcount:3},commentcount:12,sharenum:9},
		{username:"昵称3",userpic:"/static/default.jpg",createtime:"2023-09-21 下午15:35",
			isfollow:true,title:"我是标题",titlepic:"/static/demo/datapic/11.jpg",
			support:{type:"",supportcount:0,unsupportcount:0},commentcount:0,sharenum:0}];
	
	const demo2 = [
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称1',desc:'话题描述1',today_count:0,dynamic_count:10},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称2',desc:'话题描述2',today_count:2,dynamic_count:20},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称3',desc:'话题描述3',today_count:3,dynamic_count:30},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称4',desc:'话题描述4',today_count:4,dynamic_count:40},
		{cover:'/static/demo/topicpic/1.jpeg',title:'话题名称5',desc:'话题描述5',today_count:5,dynamic_count:50}];
	
	const demo3 = [
		{avatar:"/static/default.jpg",username:"Judy",sex:1,age:18,isFollow:true},
		{avatar:"/static/default.jpg",username:"张三",sex:2,age:25,isFollow:false},
		{avatar:"/static/default.jpg",username:"李四",sex:2,age:32,isFollow:true},
		{avatar:"/static/default.jpg",username:"王五",sex:2,age:21,isFollow:false},
		{avatar:"/static/default.jpg",username:"张敏",sex:1,age:15,isFollow:true}];
	
	import commonList from "@/components/common/common-list.vue"
	import topicList from "@/components/dynamic/topic-list.vue"
	import userList from "@/components/user-list/user-list.vue"
	
	export default {
		components:{
			commonList,topicList,userList
		},
		data() {
			return {
				searchText:'',
				list:['uni-app第二商城类实战开发','php','c++','人工智能',
					'uni-app第三季仿微信实战开发','实战教程','系统教程','java'],
				// 搜索结果
				searchList:[],
				// 当前搜索类型
				type:'post'
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
		onLoad(e) {
			if (e.type) {
				this.type = e.type
			}
			let pageTitle = '帖子'
			switch (e.type){
				case 'post':
					pageTitle = '帖子'
					break;
				case 'topic':
					pageTitle = '话题'
					break;
				case 'user':
					pageTitle = '用户'
					break;
			}
			// app 端
			// #ifdef APP-PLUS
			// 修改搜索占位
			let currentWebview = this.$mp.page.$getAppWebview();
			let tn = currentWebview.getStyle().titleNView;
			tn.searchInput.placeholder = '搜索' + pageTitle;
			// 修改当前 placeholder
			currentWebview.setStyle({
				titleNView:tn
			});
			// #endif
			
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
					switch (this.type){
						case 'post':
							this.searchList = demo1
							break;
						case 'topic':
							this.searchList = demo2
							break;
						case 'user':
							this.searchList = demo3
							break;
						
					}
					// 隐藏 loading 状态
					uni.hideLoading()
				},1000)
			}
			
		}
	}
</script>

<style>

</style>
