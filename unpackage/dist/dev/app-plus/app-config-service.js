
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/dynamic/dynamic","pages/msg/msg","pages/mine/mine","pages/search/search","pages/add-input/add-input","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","pages/user-list/user-list","pages/user-chat/user-chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"社区交友","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#323232","selectedColor":"#FF5139","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/homepage.png","selectedIconPath":"static/tabbar/homepage_fill_1.png"},{"pagePath":"pages/dynamic/dynamic","text":"动态","iconPath":"static/tabbar/dynamic.png","selectedIconPath":"static/tabbar/dynamic_fill_1.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/tabbar/message.png","selectedIconPath":"static/tabbar/message_fill_1.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/tabbar/mine.png","selectedIconPath":"static/tabbar/mine_fill_1.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniapp社区交友","compilerVersion":"3.8.12","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索帖子","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"21px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/dynamic/dynamic","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"bounce":"none","titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"left","fontSize":"21px","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"21px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{"navigationBarTitleText":"话题分类"}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/user-list/user-list","meta":{},"window":{"animationType":"slide-in-left","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索用户","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"15px","text":"取消"}]}}},{"path":"/pages/user-chat/user-chat","meta":{},"window":{"bounce":"none","titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"21px","fontSrc":"/static/iconfont.ttf","text":""}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});