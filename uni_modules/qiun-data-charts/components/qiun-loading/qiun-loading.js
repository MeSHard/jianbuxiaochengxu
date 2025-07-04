var common_vendor = require("../../../../common/vendor.js");

var Loading1 = function Loading1() {
    return "./loading1.js";
};

var Loading2 = function Loading2() {
    return "./loading2.js";
};

var Loading3 = function Loading3() {
    return "./loading3.js";
};

var Loading4 = function Loading4() {
    return "./loading4.js";
};

var Loading5 = function Loading5() {
    return "./loading5.js";
};

var _sfc_main = {
    components: {
        Loading1: Loading1,
        Loading2: Loading2,
        Loading3: Loading3,
        Loading4: Loading4,
        Loading5: Loading5
    },
    name: "qiun-loading",
    props: {
        loadingType: {
            type: Number,
            default: 2
        }
    },
    data: function data() {
        return {};
    }
};

if (!Array) {
    var _component_Loading1 = common_vendor.resolveComponent("Loading1");
    var _component_Loading2 = common_vendor.resolveComponent("Loading2");
    var _component_Loading3 = common_vendor.resolveComponent("Loading3");
    var _component_Loading4 = common_vendor.resolveComponent("Loading4");
    var _component_Loading5 = common_vendor.resolveComponent("Loading5");
    (_component_Loading1 + _component_Loading2 + _component_Loading3 + _component_Loading4 + _component_Loading5)();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: $props.loadingType == 1
    }, $props.loadingType == 1 ? {} : {}, {
        b: $props.loadingType == 2
    }, $props.loadingType == 2 ? {} : {}, {
        c: $props.loadingType == 3
    }, $props.loadingType == 3 ? {} : {}, {
        d: $props.loadingType == 4
    }, $props.loadingType == 4 ? {} : {}, {
        e: $props.loadingType == 5
    }, $props.loadingType == 5 ? {} : {});
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ] ]);

wx.createComponent(Component);