<template>
	<!-- 提交按钮 -->
	<view class="py-2 px-3" >
		<button class="bg-main text-white left-0 right-0 bottom-0" type="primary"
			:style="` width: ${size}%; border-radius: ${surface}rpx; border: 0;`"
			:disabled="disabled"
			:class="disabled ? 'bg-main-disabled-gray':''"
			@click="submit">
			{{name}}
		</button>
	</view>
</template>

<script>
	/**
	 * <h3>自定义按钮 组件</h3>
	 * @description 按钮 组件 主要用于提交事件
	 * @property {String} name 按钮标题名称
	 * @property {Boolean} disabled 是否可点击，false 按钮状态可用，true 按钮状态不可用，默认为 false 可用
	 * @property {Number|String} size 按钮宽度[百分比] 默认: 100 [取值范围 10~100]
	 * @property {Number|String} surface 按钮外观[椭圆] 默认: 50  [取值范围 10~100]
	 * @event {Function} click 按钮点击 事件
	 */
	export default {
		props:{
			// 按钮标题名称
			name:{
				type:String,
				default:'提交'   // 退出登录
			},
			// 是否可点击，false 按钮状态可用，true 按钮状态不可用，默认为 false 可用
			disabled:{
				type:Boolean,
				default:false
			},
			// 按钮宽度[百分比] 默认: 100 [取值范围 10~100]
			size:{
				type:[Number,String],
				default:100
			},
			// 按钮外观[椭圆] 默认: 50  [取值范围 10~100]
			surface:{
				type:[Number,String],
				default:50
			}
		},
		methods:{
			// 点击事件
			submit(){
				this.$emit('click')
			}
		}
	}
</script>

<style>
</style>