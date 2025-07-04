var common_vendor = require("../../common/vendor.js");

var store_index = require("../../store/index.js");

if (!Array) {
    var _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
    _easycom_uv_avatar2();
}

var _easycom_uv_avatar = function _easycom_uv_avatar() {
    return "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
};

if (!Math) {
    _easycom_uv_avatar();
}

var _sfc_main = {
    __name: "answer",
    setup: function setup(__props) {
        var userStore = store_index.useuserStore();
        var navtoanswerpage = function navtoanswerpage(item) {
          if(item.d === 'true'){
            common_vendor.index.showToast({
              title: "答题时间未到",
              icon:'none'
            });
            return false
          }
          common_vendor.index.setStorageSync("answer",item)
            common_vendor.index.navigateTo({
              url: "/pages/answerpage/answerpage?id=".concat(item.id)
              // url: "/pages/answerdetail/answerdetail"//前往详情页
                // url: "/pages/answerdetail/answerdetail?id=".concat(item.id)
            });
        };

        

        common_vendor.onLoad(function() {
            getlist();
        });

        var time = common_vendor.ref(new Date().getTime());
       
        var outTime = function outTime(createTime) {
          if(time.value > new Date(createTime).getTime()){
            return false
          }else{
            return true
          }
};
        var list = common_vendor.ref([]);
        var getlist = function getlist() {
            common_vendor.index.$uv.http.get("/api/client/cqTopic/knowledgeList").then(function(res) {
              res.data.forEach(item => {
                item.d = time.value <= new Date(item.createTime).getTime() 
                    ? "true" 
                    : "false";
            });
                list.value = res.data;
            });
        };
        return function(_ctx, _cache) {
            var _a, _b;
            return {
                a: "".concat(_ctx.$imageUrl, "/answerbg.png"),
                b: "".concat(_ctx.$imageUrl, "/answer1.png"),
                c: common_vendor.p({
                    size: "111rpx",
                    src: (_a = common_vendor.unref(userStore).userinfo) == null ? void 0 : _a.wechatHead
                }),
                d: common_vendor.t((_b = common_vendor.unref(userStore).userinfo) == null ? void 0 : _b.wechatName),
                e: "".concat(_ctx.$imageUrl, "/answer2.png"),
                f: common_vendor.f(common_vendor.unref(list), function(item, k0, i0) {
                    return {
                        a: common_vendor.t(item.knowledgeName),
                        b: common_vendor.o(function($event) {
                            return navtoanswerpage(item);
                        }),
                        createTime:common_vendor.t(item.createTime),
                        errNum:common_vendor.t(item.errNum),
                        finishNum:common_vendor.t(item.finishNum),
                        sumNum:common_vendor.t(item.sumNum),
                        d: common_vendor.t(item.d),
                    };
                }),
                g: "".concat(_ctx.$imageUrl, "/answer3.png")
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-d554a45d" ] ]);

wx.createPage(MiniProgramPage);