var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-status-bar",
    mixins: [ common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5 ],
    data: function data() {
        return {};
    },
    computed: {
        style: function style() {
            var style = {};
            style.height = this.$uv.addUnit(this.$uv.sys().statusBarHeight, "px");
            if (this.bgColor) {
                if (this.bgColor.indexOf("gradient") > -1) {
                    style.backgroundImage = this.bgColor;
                } else {
                    style.background = this.bgColor;
                }
            }
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        }
    }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return {
        a: common_vendor.s($options.style)
    };
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-4ff5a0d7" ] ]);

wx.createComponent(Component);