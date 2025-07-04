Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});

var common_vendor = require("./common/vendor.js");

var common_config = require("./common/config.js");

var common_request = require("./common/request.js");

var utils_index = require("./utils/index.js");

if (!Math) {
    "./pages/index/index.js";
    "./pages/my/my.js";
    "./pages/login/login.js";
    "./pages/information/information.js";
    "./pages/rank/rank.js";
    "./pages/achievement/achievement.js";
    "./pages/article/article.js";
    "./pages/answer/answer.js";
    "./pages/answerpage/answerpage.js";
    "./pages/answersuccess/answersuccess.js";
    "./pages/health/health.js";
    "./pages/articledetail/articledetail.js";
    "./pages/protocol/protocol.js";
    "./pages/answerdetail/answerdetail.js";
}

var _sfc_main = {
    onLaunch: function onLaunch() {},
    onShow: function onShow() {},
    onHide: function onHide() {}
};

var pinia = common_vendor.createPinia();

function createApp() {
    var app = common_vendor.createSSRApp(_sfc_main);
    common_request.Request();
    app.config.globalProperties.$fimg = common_config.fimg;
    app.config.globalProperties.$imageUrl = common_config.imageUrl;
    app.use(common_vendor.uvUI, {
        mpShare: true
    }).use(pinia).use(utils_index.utils);
    return {
        app: app
    };
}

createApp().app.mount("#app");

exports.createApp = createApp;