<template>
	<view class="flex align-center px-5 py-3 border">
		<view class="flex-1 flex align-center justify-center"
				v-for="(item,index) in providerList" :key="index">
			<view class="iconfont font-lg text-white i-100 flex align-center justify-center rounded-circle"
					:class="item.icon + ' ' + item.bgColor"></view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 第三方登录 组件 {拷贝官方第三方登录修改}
	 */
	export default {
		data(){
			return{
				providerList: [],
			}
		},
		mounted() {
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					// console.log(result);
					let __provider =["weixin","qq","sinaweibo",]
					// result.provider.map((value)
					this.providerList = __provider.map((value,) => {
						let providerName = ''
						let icon = ''
						let bgColor = ''
						
						switch (value) {
							case 'weixin':
								providerName = '微信登录'
								icon = 'icon-weixin'
								bgColor = 'bg-success'
								break;
							case 'qq':
								providerName = 'QQ登录'
								icon = 'icon-QQ'
								bgColor = 'bg-primary'
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								icon = 'icon-xinlangweibo'
								bgColor = 'bg-warning'
								break;
					
						}
						
						return {
							name: providerName,
							id: value,
							icon:icon,
							bgColor:bgColor
						}
					});
				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});
		}
	}
</script>

<style>
</style>