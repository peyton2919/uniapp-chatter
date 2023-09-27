<template>
	<view>
		<uni-list-item title="头像" showRightSlot clickable 
			@click="changeUserPic">
			<view slot="right" class="flex align-center">
				<image :src="userpic" class="i-100 rounded-circle"></image>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>	
		</uni-list-item>
		
		<uni-list-item title="昵称" showRightSlot>
			<view slot="right" class="flex align-center">
				<input class="uni-input text-right"  v-model="username"/>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>
		</uni-list-item>
		
		<uni-list-item title="性别" showRightSlot clickable
			@click="changeSex">
			<view slot="right" class="flex align-center">
				<text>{{sexText}}</text>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>
		</uni-list-item>
		
		<picker mode="date" :value="birthday" @change="onDateChange">
			<uni-list-item title="生日" showRightSlot clickable>
				<view slot="right" class="flex align-center">
					<text>{{birthday}}</text>
					<text class="iconfont icon-bianji1 ml-2"></text>
				</view>
			</uni-list-item>
		</picker>
	
		<uni-list-item title="情感" showRightSlot clickable
			@click="changeEmotion">
			<view slot="right" class="flex align-center">
				<text>{{emotionText}}</text>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>
		</uni-list-item>
		
		<uni-list-item title="职业" showRightSlot clickable
			@click="changeJob">
			<view slot="right" class="flex align-center">
				<text>{{job}}</text>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>
		</uni-list-item>
		
		
		<uni-list-item title="家乡" showRightSlot clickable
			@click="showCityPicker">
			<view slot="right" class="flex align-center">
				<text>{{pickerText}}</text>
				<text class="iconfont icon-bianji1 ml-2"></text>
			</view>
		</uni-list-item>
		
		<submit-button name="完成"></submit-button>
		
		<mpvue-city-picker :theme-color="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
				@onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	const SEX = ["保密","男","女"];
	const EMOTION = ["保密","未婚","已婚"];
	const JOB = ["保密","学生","IT","公务员","普通职员","个体","企业领导","外企职员","国企职员","干部","销售员","其他"];
	
	import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	import submitButton from "@/components/common/submit-button.vue"
	import mpvueCityPicker from "@/components/uni-ui/mpvue-citypicker/mpvueCityPicker.vue"
	
	export default {
		components:{
			uniListItem,submitButton,mpvueCityPicker
		},
		data() {
			return {
				themeColor:"#007AFF",
				cityPickerValueDefault:[0,0,1],
				pickerText:"山西省-太原市-迎泽区",
				
				// pickerValueDefault:[0],
				// pickerValueArray:[],
				userpic:"/static/default.jpg",
				username:"Judy",
				sex:0,
				emotion:0,
				job:"IT",
				birthday:"2002-01-29"
			}
		},
		computed:{
			sexText(){return SEX[this.sex]},
			emotionText(){return EMOTION[this.emotion]}
		},
		// 监听页面返回
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true;
			}
		},
		// 监听页面卸载
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
				return true;
			}
		},
		methods: {
			// 修改头像
			changeUserPic(){
				uni.chooseImage({
					count:1,//数量
					sizeType:["compressed"],//原图 original,还是压缩图 compressed,默认二者都有
					sourceType:["album","camera"],//从相册选图 album, 使用相机 camera, 默认二者都有
					success: (res) => {
						this.userpic = res.tempFilePaths[0];
					},
					fail: (err) => {
						
					},
					complete: () => {
						
					}
				})
			},
			// 修改性别
			changeSex(){
				uni.showActionSheet({
					itemList:SEX,
					success: (res) => {
						this.sex = res.tapIndex
					},
					fail: (err) => {
						console.log(err.errMsg);
					}
				})
			},
			// 修改情感
			changeEmotion(){
				uni.showActionSheet({
					itemList:EMOTION,
					success: (res) => {
						this.emotion = res.tapIndex
					},
					fail: (err) => {
						console.log(err.errMsg);
					}
				})
			},
			// 修改职业
			changeJob(){
				uni.showActionSheet({
					itemList:JOB,
					success: (res) => {
						this.job = JOB[res.tapIndex]
					},
					fail: (err) => {
						console.log(err.errMsg);
					}
				})
			},
			// 修改生日
			onDateChange(e){
				this.birthday = e.detail.value
			},
			// 三级联动提交事件
			onConfirm(e){
				this.pickerText = e.label
				this.cityPickerValueDefault = e.value
				console.log(this.cityPickerValueDefault);
			},
			showCityPicker(){
				this.$refs.mpvueCityPicker.show()
			}
		}
	}
</script>

<style>

</style>
