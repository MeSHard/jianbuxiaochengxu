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
    __name: "protocol",
    setup: function setup(__props) {
        var type = common_vendor.ref(0);
        common_vendor.onLoad(function(e) {
            type.value = e.type;
            getdata();
        });
        var titlelist = [ "服务条款", "隐私协议", "知情书须知" ];
        common_vendor.onReady(function() {
            common_vendor.index.setNavigationBarTitle({
                title: titlelist[type.value]
            });
        });
        var data = common_vendor.ref({});
        var getdata = function getdata() {
            common_vendor.index.$uv.http.get("api/client/cqAgreement/cqAgreementde/".concat(type.value)).then(function(res) {
                data.value = res.data;
            });
        };
        return function(_ctx, _cache) {
            return {
                a: common_vendor.p({
                    content: common_vendor.unref(data).content
                })
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-55f60af8" ] ]);

wx.createPage(MiniProgramPage);