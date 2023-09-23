(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add-input/add-input"],{

/***/ 66:
/*!*******************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/main.js?{"page":"pages%2Fadd-input%2Fadd-input"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _addInput = _interopRequireDefault(__webpack_require__(/*! ./pages/add-input/add-input.vue */ 67));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_addInput.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 67:
/*!************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/add-input/add-input.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-input.vue?vue&type=template&id=2796b904& */ 68);
/* harmony import */ var _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-input.vue?vue&type=script&lang=js& */ 70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/add-input/add-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/*!*******************************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/add-input/add-input.vue?vue&type=template&id=2796b904& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-input.vue?vue&type=template&id=2796b904& */ 69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 69:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/workspace/uniapp/uniapp-chatter/pages/add-input/add-input.vue?vue&type=template&id=2796b904& ***!
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

/***/ 70:
/*!*************************************************************************************************!*\
  !*** E:/workspace/uniapp/uniapp-chatter/pages/add-input/add-input.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-input.vue?vue&type=script&lang=js& */ 71);
/* harmony import */ var _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_java_HBuilderX_3_8_12_20230817_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/workspace/uniapp/uniapp-chatter/pages/add-input/add-input.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var uniNavBar = function uniNavBar() {
  __webpack_require__.e(/*! require.ensure | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 122));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var uploadImage = function uploadImage() {
  Promise.all(/*! require.ensure | components/common/upload-image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/common/upload-image")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/common/upload-image.vue */ 152));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    uniNavBar: uniNavBar,
    uploadImage: uploadImage
  },
  data: function data() {
    return {
      content: '',
      imageList: [],
      // 是否已经弹出提示框
      showBack: false
    };
  },
  computed: {
    show: function show() {
      return this.imageList.length > 0;
    }
  },
  // 页面加载时
  onLoad: function onLoad() {
    var _this = this;
    uni.getStorage({
      key: 'add-input',
      success: function success(res) {
        if (res.data) {
          var result = JSON.parse(res.data);
          _this.content = result.content;
          _this.imageList = result.imageList;
        }
      }
    });
  },
  // 监听返回
  onBackPress: function onBackPress() {
    var _this2 = this;
    if ((this.content !== '' || this.imageList.length > 0) && !this.showBack) {
      uni.showModal({
        title: '',
        content: '是否要保存为草稿',
        showCancel: true,
        cancelText: '不保存',
        confirmText: '保存',
        success: function success(res) {
          // 点击确认
          if (res.confirm) {
            // 调用存储方法
            _this2.store();
          } else {
            // 清除缓存
            uni.removeStorage({
              key: 'add-input'
            });
          }
          // 手动执行返回
          uni.navigateBack({
            delta: 1
          });
        },
        fail: function fail() {},
        complete: function complete() {}
      });
      this.showBack = true;
      return true;
    }
  },
  methods: {
    // 底部图片点击事件
    clickIconEvent: function clickIconEvent(e) {
      switch (e) {
        case 'uploadImage':
          this.$refs.uploadImage.chooseImage();
          break;
        default:
          break;
      }
    },
    // 选中图片
    changeImage: function changeImage(e) {
      this.imageList = e;
    },
    // 保存草稿
    store: function store() {
      // 保存为本地存储
      uni.setStorage({
        key: 'add-input',
        data: JSON.stringify({
          content: this.content,
          imageList: this.imageList
        })
      });
    },
    // 返回上一步
    goBack: function goBack() {
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[66,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/add-input/add-input.js.map