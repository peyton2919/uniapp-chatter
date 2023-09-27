<template>
	<view>
		<uni-list-item :title="item.title" @click="open(item)" clickable showExtraIcon showArrow
		v-for="(item,index) in list" :key="index"></uni-list-item>
		
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
						{title:'清除缓存',id:4,path:''},{title:'意见反馈',id:5,path:'user-feedback'},{title:'关于社区',id:6,path:'about'}]
			}
		},
		methods: {
			// 打开页面
			open(e){
				uni.navigateTo({
					url:`/pages/${e.path}/${e.path}`
				})
				
			}
		}
	}
</script>

<style>

</style>
