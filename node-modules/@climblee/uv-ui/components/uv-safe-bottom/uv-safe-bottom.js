var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-safe-bottom",
    mixins: [ common_vendor.mpMixin, common_vendor.mixin ],
    data: function data() {
        return {
            safeAreaBottomHeight: 0,
            isNvue: false
        };
    },
    computed: {
        style: function style() {
            var style = {};
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        }
    },
    mounted: function mounted() {}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return {
        a: common_vendor.s($options.style),
        b: common_vendor.n(!$data.isNvue && "uv-safe-area-inset-bottom")
    };
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-a55db101" ] ]);

wx.createComponent(Component);