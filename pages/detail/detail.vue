<template>
	<!-- 详情页 (帖子) -->
	<view>
		<!-- 帖子详情页面详细信息 -->
		<common-list :item="info" single @doFollow="doFollow" @doSupport="doSupport"
				@doComment="doComment" @doShare="doShare">
			<view class="">{{info.content}}</view>
			<view class="">
				<image v-for="(item,index) in info.images" :key="index"
					:src="item.url" class="w-100" mode="widthFix"
					@click="preview(index)"></image>
			</view>
		</common-list>
		
		<!-- 分割线 -->
		<divider></divider>
		
		<view class="p-2 font-md font-weight-bold">最新评论 3</view>
		
		<view class="px-2">
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
							mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>小猫咪</text>
					</view>
					<view class="uni-comment-content">支持国产,支持DCloud</view>
					<view class="uni-comment-date">
						<view>2天前</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<more-share ref="share"></more-share>
		
		<!-- 空占位 -->
		<view class="h-100"></view>
		<speak-input @submit="submit"></speak-input>
		
		
		
	</view>
</template>

<script>
	import commonList from "@/components/common/common-list.vue"
	import speakInput from "@/components/common/speak-input.vue"
	import moreShare from "@/components/common/more-share.vue"
	
	
	export default {
		components:{
			commonList,speakInput,moreShare
		},
		data() {
			return {
				// 当前 帖子 信息
				info:{
					username:"昵称",
					userpic:"/static/default.jpg",
					createtime:"2019-10-20 下午04:30",
					isfollow:false,
					title:"我是标题",
					titlepic:"/static/demo/datapic/11.jpg",
					support:{
						type:"support", // 顶
						supportcount:1,
						unsupportcount:3
					},
					commentcount:2,
					sharenum:5,
					content:"帝莎编程学院：uni-app第二季仿商城类实战项目开发，uni-app第二季仿微信实战项目开发",
					images:[{
						url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/4.jpg"
					},{
						url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/5.jpg"
					}]
				}
				
			}
		},
		onLoad(e) {
			// 初始化
			if (e.detail) {
				this.__init(JSON.parse(e.detail))
			}
		},
		computed:{
			imagesList(){
				return this.info.images.map(item=>item.url)
			}
		},
		// 点击手机返回键事件
		onBackPress() {
			this.$refs.share.close()
		},
		onNavigationBarButtonTap() {
			
			this.$refs.share.open()
		},
		methods: {
			__init(data){
				// 修改标题
				uni.setNavigationBarTitle({
					title:data.title
				})
				// 请求数据
				// this.info = data
				
			},
			// 点击 评论
			doComment(){
				
			},
			// 点击 分享
			doShare(){
				
			},
			// 关注
			doFollow(){
				this.info.isfollow = true
				uni.showToast({
					title: '关注成功'
				});
			},
			// 顶踩
			doSupport(e){
				// 之前操作过
				if (this.info.support.type === e.type) {
					return uni.showToast({
						title: '你已经操作过了'
					});
				}
				let msg = e.type === 'support'? '顶':'踩'
				// 判断之前是否已经顶踩
				// 之前没有操作过
				if(this.info.support.type === ''){
					this.info.support[e.type+'count']++
				}else if(this.info.support.type === 'support' && e.type === 'unsupport'){// 之前顶了
					// 顶 -1 ； 踩 +1
					this.info.support.supportcount--;
					this.info.support.unsupportcount++;
				}else if(this.info.support.type === 'unsupport' && e.type === 'support'){// 之前踩了
					// 顶 +1 ； 踩 -1
					this.info.support.supportcount++;
					this.info.support.unsupportcount--;
				}
				this.info.support.type = e.type	
				uni.showToast({
					title: msg + ' -> 成功'
				});
			},
			// 预览图片
			preview(e){
				uni.previewImage({
					current:e,
					urls:this.imagesList,
					longPressActions:{
						itemList:['发送给朋友','保存图片','收藏'],
						success: (res) => {
							console.log('选中了第'+res);
						},
						fail: (err) => {
							console.log(err.errMsg);
						}
					}
				})
			},
			// 提交后座
			submit(data){
				console.log(data);
			}
			
		}
	}
</script>

<style>

</style>
