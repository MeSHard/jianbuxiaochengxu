var common_vendor = require("../../common/vendor.js");

if (!Array) {
    var _easycom_uv_parse2 = common_vendor.resolveComponent("uv-parse");
    _easycom_uv_parse2();
}

var _easycom_uv_parse = function _easycom_uv_parse() {
    return "../../node-modules/@climblee/uv-ui/components/uv-parse/uv-parse.js";
};

if (!Math) {
    _easycom_uv_parse();
}

var _sfc_main = {
    __name: "answerdetail",
    setup: function setup(__props) {
        common_vendor.onLoad(function(e) {
          var answer = common_vendor.index.getStorageSync("answer")
          data.value = answer;
          common_vendor.index.removeStorageSync('answer')
            // getdata(e.id);
        });
        var data = common_vendor.ref({});
        var getdata = function getdata(id) {
            common_vendor.index.$uv.http.get("/api/client/cqTopic/knowledgeDeatil/".concat(id)).then(function(res) {
                data.value = res.data;
            });
        };
        var navtoanswerpage = function navtoanswerpage() {
            common_vendor.index.navigateTo({
                url: "/pages/answerpage/answerpage?id=".concat(data.value.id)
            });
        };
        return function(_ctx, _cache) {
            return {
                a: "".concat(_ctx.$imageUrl, "/answerbg.png"),
                b: "".concat(_ctx.$imageUrl, "/answer2.png"),
                c: common_vendor.p({
                    content: common_vendor.unref(data).knowledge
                }),
                d: common_vendor.o(navtoanswerpage)
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-706ee57e" ] ]);

wx.createPage(MiniProgramPage);