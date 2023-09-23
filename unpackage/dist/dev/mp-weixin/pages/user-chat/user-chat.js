(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-chat/user-chat"],{

/***/ 94:
/*!*******************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/main.js?{"page":"pages%2Fuser-chat%2Fuser-chat"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _userChat = _interopRequireDefault(__webpack_require__(/*! ./pages/user-chat/user-chat.vue */ 95));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userChat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 95:
/*!************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/user-chat/user-chat.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-chat.vue?vue&type=template&id=07e822fc& */ 96);
/* harmony import */ var _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-chat.vue?vue&type=script&lang=js& */ 98);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-chat/user-chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/*!*******************************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/user-chat/user-chat.vue?vue&type=template&id=07e822fc& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=template&id=07e822fc& */ 97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_template_id_07e822fc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 97:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/workspace/uniapp/uniapp-chatter/pages/user-chat/user-chat.vue?vue&type=template&id=07e822fc& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 98:
/*!*************************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-chat.vue?vue&type=script&lang=js& */ 99);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/workspace/uniapp/uniapp-chatter/pages/user-chat/user-chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var userChatList = function userChatList() {
  Promise.all(/*! require.ensure | components/user-chat/user-chat-list */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/user-chat/user-chat-list")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/user-chat/user-chat-list.vue */ 173));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    userChatList: userChatList
  },
  data: function data() {
    return {
      content: '',
      scrollInto: '',
      list: [{
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "你好",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "速度实在太慢，没关系",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "由于github在国内速度慢，我们得有个提速的工具",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "记住安装的路径，待会儿会用到",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "由于github在国内速度慢，我们得有个提速的工具",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "再选择存放位置",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "由于github在国内速度慢，我们得有个提速的工具",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "再选择存放位置",
        type: "text",
        create_time: 1695451166
      }, {
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "由于github在国内速度慢，我们得有个提速的工具",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "再选择存放位置",
        type: "text",
        create_time: 1695451166
      }, {
        user_id: 2,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "由于github在国内速度慢，我们得有个提速的工具",
        type: "text",
        create_time: 1695438918
      }, {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: "再选择存放位置",
        type: "text",
        create_time: 1695451166
      }]
    };
  },
  // 页面加载完成的时候
  onReady: function onReady() {
    this.pageToBottom();
  },
  methods: {
    // 发送
    submit: function submit() {
      var obj = {
        user_id: 1,
        avatar: "/static/default.jpg",
        username: "Tom",
        data: this.content,
        type: "text",
        create_time: new Date().getTime()
      };
      if (this.content === '') {
        return uni.showToast({
          title: '消息不能为空!',
          icon: 'none'
        });
      }
      this.list.push(obj);
      // 清空输入框
      this.content = '';
      // 滚动到底部
      this.pageToBottom();
    },
    // 滚动到底部
    pageToBottom: function pageToBottom() {
      var _this = this;
      setTimeout(function () {
        var lastIndex = _this.list.length - 1;
        if (lastIndex < 0) return;
        _this.scrollInto = 'chat' + lastIndex;
      }, 300);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[94,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-chat/user-chat.js.map