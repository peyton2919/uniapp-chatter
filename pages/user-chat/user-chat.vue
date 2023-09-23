<template>
	<view>
		<!-- 聊天列表 -->
		<scroll-view scroll-y="true" :scroll-into-view="scrollInto" scroll-with-animation
			style="position: absolute; left: 0; top: 0; right: 0; bottom: 103rpx;">
			
			<!-- 左边 / 右边 -->
			
			<block v-for="(item,index) in list" :key="index">
				<view :id="'chat'+index">
					<user-chat-list :item="item" :index="index" 
							:pretime="index>0?list[index-1].create_time:0"></user-chat-list>
				</view>
			</block>
			
		</scroll-view>
		
		<!-- 底部操作条 -->
		<view class="fixed-bottom h-100 flex align-center border-top bg-white">
			<input type="text" class="flex-1 rounded bg-light ml-2"
					style="padding: 5rpx;" placeholder="文明发言"
					v-model="content" :adjust-position="false"
					@confirm="submit"/>
					
			<view class="iconfont icon-fabu i-100 flex align-center justify-center font-lg animated"
					hover-class="jello text-main"
					@click="submit"></view>
		</view>
	</view>
</template>

<script>
	import userChatList from "@/components/user-chat/user-chat-list.vue"
	
	export default {
		components:{
			userChatList
		},
		data() {
			return {
				content:'',
				scrollInto:'',
				list:[
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"你好",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"速度实在太慢，没关系",type:"text",create_time:1695438918},
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"由于github在国内速度慢，我们得有个提速的工具",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"记住安装的路径，待会儿会用到",type:"text",create_time:1695438918},
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"由于github在国内速度慢，我们得有个提速的工具",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"再选择存放位置",type:"text",create_time:1695438918},
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"由于github在国内速度慢，我们得有个提速的工具",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"再选择存放位置",type:"text",create_time:1695451166},
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"由于github在国内速度慢，我们得有个提速的工具",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"再选择存放位置",type:"text",create_time:1695451166},
					{user_id:2,avatar:"/static/default.jpg",username:"Tom",data:"由于github在国内速度慢，我们得有个提速的工具",type:"text",create_time:1695438918},
					{user_id:1,avatar:"/static/default.jpg",username:"Tom",data:"再选择存放位置",type:"text",create_time:1695451166}]
			}
		},
		// 页面加载完成的时候
		onReady(){
			this.pageToBottom()
		},
		methods: {
			// 发送
			submit(){
				let obj ={
					user_id:1,
					avatar:"/static/default.jpg",
					username:"Tom",
					data:this.content,
					type:"text",
					create_time:(new Date()).getTime()
				}
				if(this.content === ''){
					return uni.showToast({
						title: '消息不能为空!',
						icon:'none'
					});
				}
				this.list.push(obj)
				// 清空输入框
				this.content=''
				// 滚动到底部
				this.pageToBottom()
			},
			// 滚动到底部
			pageToBottom(){
				setTimeout(()=>{
					let lastIndex = this.list.length -1
					if(lastIndex < 0) return;
					this.scrollInto = 'chat' + lastIndex
				},300)
			}
		}
	}
</script>

<style>

</style>
