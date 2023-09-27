<template>
	<!-- 登录 页面 -->
	<view>
		<view>
			<uni-status-bar></uni-status-bar>
			<view class="iconfont icon-guanbi flex align-center justify-center font-lg i-100" hover-class="bg-light"
					@click="back"></view>
		</view>
				
		<view class="text-center font-huge" style="padding-top: 130rpx; padding-bottom: 70rpx;">
			{{status ? '手机验证码登录':'账号密码登录'}}
		</view>
		
		<view class="px-2">
			<template v-if="status">
				<view class="mb-2 flex align-stretch">
					<view class="border-bottom flex align-center justify-center font px-2">+86</view>
					<input type="text" v-model="phone" placeholder="手机号" class="border-bottom uni-input p-2 flex-1">
				</view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="code" placeholder="请输入验证码" class="border-bottom uni-input p-2">
					<view class="border-bottom flex align-center justify-center px-2 font-sm text-white w-180"
							:class="codeTime > 0 ? 'bg-main-disabled-gray':'bg-main'"
							@click="getCode">
						{{codeTime > 0 ? codeTime + ' 秒':'获取验证码'}}
					</view>
				</view>
			</template>
			
			<template v-else>
				<view class="mb-2">
					<input type="text" v-model="username" placeholder="昵称/手机号/邮箱" class="border-bottom uni-input p-2 flex-1">
				</view>
				<view class="mb-2 flex align-stretch">
					<input type="text" v-model="password" placeholder="请输入密码" class="border-bottom uni-input p-2">
					<view class="border-bottom flex align-center justify-center pr-2 font text-secondary">忘记密码</view>
				</view>
			</template>
		</view>
		
		
		<submit-button name="登录" :disabled="disabled" @click="submit"></submit-button>
		
		<view class="flex align-center justify-center pt-2 pb-5">
			<view class="text-primary font-sm" @click="changeStatus">
				{{status ?'账号登录':'验证码登录'}}
			</view>
			<text class="text-muted mx-2">|</text>
			<view class="text-primary font-sm">登录遇到问题</view>
		</view>
		
		<view class="flex align-center justify-center">
			<view style="height: 1rpx; background-color: #dddddd; width: 100rpx;"></view>
			<view class="mx-2 text-muted">社交账号登录</view>
			<view style="height: 1rpx; background-color: #dddddd; width: 100rpx;"></view>
		</view>
		
		<!-- 第三方登录 -->
		<other-login></other-login>
		
		<view class="flex align-center justify-center text-muted">
			注册即代表同意<text class="text-primary">《XXX社区协议》</text>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from "@/components/uni-ui/uni-nav-bar/uni-status-bar.vue"
	import submitButton from "@/components/common/submit-button.vue"
	import otherLogin from "@/components/common/other-login.vue"
	
	export default {
		components:{
			uniStatusBar,submitButton,otherLogin
		},
		data() {
			return {
				// 判断账号类型 手机验证码 true,否则 false
				status:false,
				username:"",
				password:"",
				phone:"",
				code:"",
				// 验证码倒计时
				codeTime:0
			}
		},
		computed:{
			disabled(){
				if((this.username === '' || this.password === '') &&
					(this.phone === '' || this.code === '')){
					return true;
				}
				return false;
			}
		},
		methods: {
			// 初始化表单
			__initForm(){
				this.username=''
				this.password=''
				this.phone=''
				this.code=''
			},
			// 切换登录方式
			changeStatus(){
				// 初始化表单
				this.__initForm()
				this.status = !this.status
			},
			// 获取验证码
			getCode(){
				// 手机号正则
				var mPattern = /^1[34578]\d{9}$/;
				if (!mPattern.test(this.phone)) {
					uni.showToast({
						title: '手机号格式不正确'
					});
					return;
				}
				// 防止重复获取
				if (this.codeTime>0) {
					return;
				}
				// 倒计时
				this.codeTime = 60
				let timer = setInterval(()=>{
					this.codeTime--
					if (this.codeTime === 0) {
						clearInterval(timer)
					}
				},1000)
			},
			// 表单验证 true 表示 表单验证通过，否则 false
			validate(){
				// 手机号正则
				var mPattern = /^1[34578]\d{9}$/;
				if (!mPattern.test(this.phone)) {
					uni.showToast({
						title: '手机号格式不正确'
					});
					return false;
				}
				return true;
			},			
			// 登录
			submit(){
				// 表单验证
				if (!this.validate()) {return;}
				// 提交
				
				// 登录成功处理
			},
			// 返回
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
