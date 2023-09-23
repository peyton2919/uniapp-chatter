(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-list/user-list"],{

/***/ 88:
/*!*****************************************************************************************************!*\
  !*** O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/main.js?{"page":"pages%2Fuser-list%2Fuser-list"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _userList = _interopRequireDefault(__webpack_require__(/*! ./pages/user-list/user-list.vue */ 89));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 89:
/*!**********************************************************************************!*\
  !*** O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/pages/user-list/user-list.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.vue?vue&type=template&id=187c9808& */ 90);
/* harmony import */ var _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.vue?vue&type=script&lang=js& */ 92);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-list/user-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/*!*****************************************************************************************************************!*\
  !*** O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/pages/user-list/user-list.vue?vue&type=template&id=187c9808& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=template&id=187c9808& */ 91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_template_id_187c9808___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 91:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/pages/user-list/user-list.vue?vue&type=template&id=187c9808& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var render = function () {}
var staticRenderFns = []
var recyclableRender
var components



/***/ }),

/***/ 92:
/*!***********************************************************************************************************!*\
  !*** O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-list.vue?vue&type=script&lang=js& */ 93);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!O:/BaiduSyncdisk/workspace/uniapp/uniapp社区交友/pages/user-list/user-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var demo = [{
  avatar: "/static/default.jpg",
  username: "Judy",
  sex: 1,
  age: 18,
  isFollow: true
}, {
  avatar: "/static/default.jpg",
  username: "张三",
  sex: 2,
  age: 25,
  isFollow: false
}, {
  avatar: "/static/default.jpg",
  username: "李四",
  sex: 2,
  age: 32,
  isFollow: true
}, {
  avatar: "/static/default.jpg",
  username: "王五",
  sex: 2,
  age: 21,
  isFollow: false
}, {
  avatar: "/static/default.jpg",
  username: "张敏",
  sex: 1,
  age: 15,
  isFollow: true
}];
var loadMore = function loadMore() {
  __webpack_require__.e(/*! require.ensure | components/common/load-more */ "components/common/load-more").then((function () {
    return resolve(__webpack_require__(/*! @/components/common/load-more.vue */ 117));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var userList = function userList() {
  __webpack_require__.e(/*! require.ensure | components/user-list/user-list */ "components/user-list/user-list").then((function () {
    return resolve(__webpack_require__(/*! @/components/user-list/user-list.vue */ 168));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    loadMore: loadMore,
    userList: userList
  },
  data: function data() {
    return {
      // 列表高度
      scrollH: 500,
      tabIndex: 0,
      tabBars: [{
        name: '互关',
        num: 0
      }, {
        name: '关注',
        num: 3
      }, {
        name: '粉丝',
        num: 23
      }],
      newsList: []
    };
  },
  onLoad: function onLoad() {
    var _this = this;
    // 获取 窗体高度信息
    var res = uni.getSystemInfo({
      success: function success(res) {
        // px
        _this.scrollH = res.windowHeight - uni.upx2px(100);
      }
    });
    // 根据选项卡生成列表
    this.getData();
  },
  // 监听点击输入框事件
  onNavigationBarSearchInputClicked: function onNavigationBarSearchInputClicked() {
    uni.navigateTo({
      url: '/pages/search/search',
      success: function success(res) {},
      fail: function fail() {},
      complete: function complete() {}
    });
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap() {
    uni.navigateBack({
      delta: 1
    });
  },
  methods: {
    // 获取数据
    getData: function getData() {
      var arr = [];
      for (var i = 0; i < this.tabBars.length; i++) {
        var obj = {
          // 1.上拉加载更多 2. 加载中... 3. 没有更多了
          loadmore: "上拉加载更多",
          list: []
        };
        if (i < 2) {
          obj.list = demo;
        }
        arr.push(obj);
      }
      this.newsList = arr;
    },
    // tab 切换
    changeTab: function changeTab(e) {
      this.tabIndex = e;
    },
    // 监听滑动
    onChangeTab: function onChangeTab(e) {
      this.changeTab(e.detail.current);
    },
    //上拉加载更多
    loadmore: function loadmore(e) {
      // 拿到当前列表
      var item = this.newsList[e];
      // 判断是否处于可加载状态
      if (item.loadmore !== '上拉加载更多') {
        return;
      }

      // 修改当前列表加载状态
      item.loadmore = '加载中...';
      setTimeout(function () {
        item.list = [].concat((0, _toConsumableArray2.default)(item.list), (0, _toConsumableArray2.default)(item.list));
        item.loadmore = '上拉加载更多';
      }, 10000);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[88,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-list/user-list.js.map