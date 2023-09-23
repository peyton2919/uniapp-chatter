<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 检测更新
			// 网络监听
			// 初始化数据
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			// 音乐或视频 暂停与播放在这个事件中处理
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入官方 uni 样式 */
	@import "./common/uni.css";
	
	/* 引入自定义图标库 */
	@import "./common/icon.css";
	
	/* 引入动画库 */
	@import "./common/animate.css";
	
	/* 引入自定义样式库 */
	@import "./common/free.css";
	
	/* 引入全局样式库 */
	@import "./common/common.css";
	
	/* 引入自定义尺寸样式库 */
	@import "./common/size.css"
	
</style>
