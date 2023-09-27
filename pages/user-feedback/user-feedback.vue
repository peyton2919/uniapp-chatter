<template>
	<!-- 意见反馈 页面 -->
	<view>
		<uniCollapse>
			<uni-collapse-item title="标题文字" showAnimation>
				<view class="content">11</view>
			</uni-collapse-item>
			<uni-collapse-item title="标题文字" showAnimation>
				<view class="content">1222</view>
			</uni-collapse-item>
		</uniCollapse>
		<submit-button name="意见反馈"></submit-button>
	</view>
</template>

<script>
	import uniCollapse from "@/components/uni-ui/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue"
	import submitButton from "@/components/common/submit-button.vue"
	
	export default {
		components:{
			uniCollapse,uniCollapseItem,submitButton
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
