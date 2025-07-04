var _defineProperty2 = require("../../../../../@babel/runtime/helpers/defineProperty");

var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-overlay",
    emits: [ "click" ],
    mixins: [ common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$4 ],
    watch: {
        show: function show(newVal) {}
    },
    computed: {
        overlayStyle: function overlayStyle() {
            var style = {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: this.zIndex,
                bottom: 0,
                "background-color": "rgba(0, 0, 0, ".concat(this.opacity, ")")
            };
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        }
    },
    methods: {
        clickHandler: function clickHandler() {
            this.$emit("click");
        },
        clear: function clear() {}
    }
};

if (!Array) {
    var _easycom_uv_transition2 = common_vendor.resolveComponent("uv-transition");
    _easycom_uv_transition2();
}

var _easycom_uv_transition = function _easycom_uv_transition() {
    return "../uv-transition/uv-transition.js";
};

if (!Math) {
    _easycom_uv_transition();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return {
        a: common_vendor.o($options.clickHandler),
        b: common_vendor.o($options.clear),
        c: common_vendor.p(_defineProperty2(_defineProperty2(_defineProperty2({
            show: _ctx.show,
            mode: "fade"
        }, "custom-class", "uv-overlay"), "duration", _ctx.duration), "custom-style", $options.overlayStyle))
    };
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-b1e8b0c8" ] ]);

wx.createComponent(Component);