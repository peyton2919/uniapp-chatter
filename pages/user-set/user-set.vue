<template>
	<view>
		<uni-list-item :title="item.title" @click="open(item)" clickable showExtraIcon showArrow
					v-for="(item,index) in list" :key="index"></uni-list-item>
		
		<uni-list-item title="清除缓存" clickable showExtraIcon showArrow showBadge
				@click="clear">
			<view class="text-muted" slot="right">{{currentSize | format}}</view>
		</uni-list-item>
		<sumbit-button name="退出登录"></sumbit-button>
	</view>
</template>

<script>
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import sumbitButton from "@/components/common/submit-button.vue"
	
	export default {
		components:{
			uniListItem,sumbitButton
		},
		data() {
			return {
				list:[{title:'账号与安全',id:1,path:'user-password'},{title:'绑定邮箱',id:2,path:'user-email'},{title:'资料编辑',id:3,path:'user-info'},
						{title:'意见反馈',id:5,path:'user-feedback'},{title:'关于社区',id:6,path:'about'}],
				currentSize:0
			}
		},
		onLoad() {
			this.__getStorageInfo()
		},
		filters:{
			format(v){
				return v > 1024 ? (v/1024).toFixed(2) +' MB': v.toFixed(2) + ' KB'
			}
		},
		methods: {
			// 打开页面
			open(e){
				uni.navigateTo({
					url:`/pages/${e.path}/${e.path}`
				})
			},
			//
			__getStorageInfo(){
				let res = uni.getStorageInfoSync()
				console.log(res);
				this.currentSize = res.currentSize
			},
			// 清除缓存
			clear(){
				uni.showModal({
					title: '提示',
					content: '是否要清除所有缓存',
					cancelText: '不清除',
					confirmText: '清除',
					success: res => {
						if (res.confirm) {
							uni.clearStorageSync()
							this.__getStorageInfo()
							uni.showToast({
								title: '清除成功'
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>

</style>
