<template>
	<!-- 发布页面 -->
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar left-icon="back" :border="false" statusBar @clickLeft="goBack">
				<view class="flex align-center justify-center w-100 font">
					所有人可见<text class="iconfont icon-shezhi ml-1"></text>
				</view>	
		</uni-nav-bar>
		
		<!-- 文本域 -->
		<textarea v-model="content" placeholder="说一句话吧" class="uni-textarea px-2" />
		
		
		<!-- 多图上传 -->
		<upload-image :show="show" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>
		
		<!-- 底部操作条 -->
		<view class="fixed-bottom bg-white flex align-center" style="height: 85rpx;">
			<view class="iconfont icon-caidan py-4 pl-4 font-huge animated" 
					hover-class="jello"></view>
			<view class="iconfont icon-huati py-4 pl-5 font-huge animated" 
					hover-class="jello"></view>
			<view class="iconfont icon-tupian py-4 pl-5 font-huge animated" 
					hover-class="jello"
					@click="clickIconEvent('uploadImage')"></view>
			<view class="bg-main text-white ml-auto py-2 px-4 rounded mr-2 mb-1 animated" 
					hover-class="jello">发送</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue"
	import uploadImage from "@/components/common/upload-image.vue"
	
	export default {
		components:{
			uniNavBar,uploadImage
		},
		data() {
			return {
				content:'',
				imageList:[],
				// 是否已经弹出提示框
				showBack:false
			}
		},
		computed:{
			show(){
				return this.imageList.length >0
			}
		},
		// 页面加载时
		onLoad() {
			uni.getStorage({
				key:'add-input',
				success: (res) => {
					if (res.data) {
						let result = JSON.parse(res.data)
						this.content= result.content
						this.imageList= result.imageList
					} 
					
				}
			})
		},
		// 监听返回
		onBackPress() {
			if((this.content !== '' || this.imageList.length >0) && !this.showBack){
				uni.showModal({
					title: '',
					content: '是否要保存为草稿',
					showCancel: true,
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						// 点击确认
						if(res.confirm){
							// 调用存储方法
							this.store()
						}else{
							// 清除缓存
							uni.removeStorage({
								key:'add-input'
							})
						}
						// 手动执行返回
						uni.navigateBack({
							delta: 1
						});
					},
					fail: () => {},
					complete: () => {}
				});
				this.showBack=true
				return true;
			}
		},
		methods: {
			// 底部图片点击事件
			clickIconEvent(e){
				switch (e){
					case 'uploadImage':
					this.$refs.uploadImage.chooseImage()
						break;
					default:
						break;
				}
			},
			// 选中图片
			changeImage(e){
				this.imageList = e
			},
			// 保存草稿
			store(){
				// 保存为本地存储
				uni.setStorage({
					key:'add-input',
					data:JSON.stringify({
						content:this.content,
						imageList:this.imageList
					})
				})
			},
			// 返回上一步
			goBack(){
				uni.navigateBack({ delta: 1 });
			},
		}
	}
</script>

<style>

</style>
