var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-line",
    mixins: [ common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$7 ],
    computed: {
        lineStyle: function lineStyle() {
            var style = {};
            style.margin = this.margin;
            if (this.direction === "row") {
                style.borderBottomWidth = "1px";
                style.borderBottomStyle = this.dashed ? "dashed" : "solid";
                style.width = this.$uv.addUnit(this.length);
                if (this.hairline) style.transform = "scaleY(0.5)";
            } else {
                style.borderLeftWidth = "1px";
                style.borderLeftStyle = this.dashed ? "dashed" : "solid";
                style.height = this.$uv.addUnit(this.length);
                if (this.hairline) style.transform = "scaleX(0.5)";
            }
            style.borderColor = this.color;
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        }
    }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return {
        a: common_vendor.s($options.lineStyle)
    };
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-0a68c4fc" ] ]);

wx.createComponent(Component);