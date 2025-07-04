var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-text",
    emits: [ "click" ],
    mixins: [ common_vendor.mpMixin, common_vendor.mixin, common_vendor.value, common_vendor.button, common_vendor.openType, common_vendor.props$6 ],
    computed: {
        valueStyle: function valueStyle() {
            var style = {
                textDecoration: this.decoration,
                fontWeight: this.bold ? "bold" : "normal",
                wordWrap: this.wordWrap,
                fontSize: this.$uv.addUnit(this.size)
            };
            !this.type && (style.color = this.color);
            this.isNvue && this.lines && (style.lines = this.lines);
            if (this.isNvue && this.mode != "price" && !this.prefixIcon && !this.suffixIcon) {
                style.flex = 1;
                style.textAlign = this.align === "left" ? "flex-start" : this.align === "center" ? "center" : "right";
            }
            this.lineHeight && (style.lineHeight = this.$uv.addUnit(this.lineHeight));
            !this.isNvue && this.block && (style.display = "block");
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        },
        isNvue: function isNvue() {
            var nvue = false;
            return nvue;
        },
        isMp: function isMp() {
            var mp = false;
            mp = true;
            return mp;
        }
    },
    data: function data() {
        return {};
    },
    methods: {
        clickHandler: function clickHandler() {
            if (this.call && this.mode === "phone") {
                common_vendor.index.makePhoneCall({
                    phoneNumber: this.text
                });
            }
            this.$emit("click");
        }
    }
};

if (!Array) {
    var _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
    var _easycom_uv_link2 = common_vendor.resolveComponent("uv-link");
    (_easycom_uv_icon2 + _easycom_uv_link2)();
}

var _easycom_uv_icon = function _easycom_uv_icon() {
    return "../uv-icon/uv-icon.js";
};

var _easycom_uv_link = function _easycom_uv_link() {
    return "../uv-link/uv-link.js";
};

if (!Math) {
    (_easycom_uv_icon + _easycom_uv_link)();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: _ctx.show
    }, _ctx.show ? common_vendor.e({
        b: _ctx.mode === "price"
    }, _ctx.mode === "price" ? {
        c: common_vendor.n(_ctx.type && "uv-text__value--".concat(_ctx.type)),
        d: common_vendor.s($options.valueStyle)
    } : {}, {
        e: _ctx.prefixIcon
    }, _ctx.prefixIcon ? {
        f: common_vendor.p({
            name: _ctx.prefixIcon,
            customStyle: _ctx.$uv.addStyle(_ctx.iconStyle)
        })
    } : {}, {
        g: _ctx.mode === "link"
    }, _ctx.mode === "link" ? {
        h: common_vendor.p({
            text: _ctx.value,
            href: _ctx.href,
            underLine: true
        })
    } : _ctx.openType && $options.isMp ? {
        j: common_vendor.t(_ctx.value),
        k: common_vendor.s($options.valueStyle),
        l: _ctx.openType,
        m: common_vendor.o(function() {
            return _ctx.onGetUserInfo && _ctx.onGetUserInfo.apply(_ctx, arguments);
        }),
        n: common_vendor.o(function() {
            return _ctx.onContact && _ctx.onContact.apply(_ctx, arguments);
        }),
        o: common_vendor.o(function() {
            return _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber.apply(_ctx, arguments);
        }),
        p: common_vendor.o(function() {
            return _ctx.onError && _ctx.onError.apply(_ctx, arguments);
        }),
        q: common_vendor.o(function() {
            return _ctx.onLaunchApp && _ctx.onLaunchApp.apply(_ctx, arguments);
        }),
        r: common_vendor.o(function() {
            return _ctx.onOpenSetting && _ctx.onOpenSetting.apply(_ctx, arguments);
        }),
        s: _ctx.lang,
        t: _ctx.sessionFrom,
        v: _ctx.sendMessageTitle,
        w: _ctx.sendMessagePath,
        x: _ctx.sendMessageImg,
        y: _ctx.showMessageCard,
        z: _ctx.appParameter
    } : {
        A: common_vendor.t(_ctx.value),
        B: common_vendor.s($options.valueStyle),
        C: common_vendor.n(_ctx.type && "uv-text__value--".concat(_ctx.type)),
        D: common_vendor.n(_ctx.lines && "uv-line-".concat(_ctx.lines))
    }, {
        i: _ctx.openType && $options.isMp,
        E: _ctx.suffixIcon
    }, _ctx.suffixIcon ? {
        F: common_vendor.p({
            name: _ctx.suffixIcon,
            customStyle: _ctx.$uv.addStyle(_ctx.iconStyle)
        })
    } : {}, {
        G: _ctx.margin,
        H: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end",
        I: common_vendor.o(function() {
            return $options.clickHandler && $options.clickHandler.apply($options, arguments);
        })
    }) : {});
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-bf46ccf4" ] ]);

wx.createComponent(Component);