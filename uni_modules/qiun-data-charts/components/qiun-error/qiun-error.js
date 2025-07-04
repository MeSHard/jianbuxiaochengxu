var common_vendor = require("../../../../common/vendor.js");

var _sfc_main = {
    name: "qiun-error",
    props: {
        errorMessage: {
            type: String,
            default: null
        }
    },
    data: function data() {
        return {};
    }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return {
        a: common_vendor.t($props.errorMessage == null ? "请点击重试" : $props.errorMessage)
    };
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ] ]);

wx.createComponent(Component);