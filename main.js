import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false

// 引入全局组件
import divider from './components/common/divider.vue';
Vue.component('divider',divider)
import noThing from "@/components/common/no-thing.vue";
Vue.component('no-thing',noThing)

// 引入时间库
// import $T from "@/common/time.js";
// Vue.prototype.$T = $T;


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif


