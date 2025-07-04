var _defineProperty2 = require("../../../../../@babel/runtime/helpers/defineProperty");

var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-empty",
    mixins: [ common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$3 ],
    data: function data() {
        return {
            icons: {
                car: "购物车为空",
                page: "页面不存在",
                search: "没有搜索结果",
                address: "没有收货地址",
                "wifi-off": "没有WiFi",
                order: "订单为空",
                coupon: "没有优惠券",
                favor: "暂无收藏",
                permission: "无权限",
                history: "无历史记录",
                news: "无新闻列表",
                message: "消息列表为空",
                list: "列表为空",
                data: "数据为空",
                comment: "暂无评论"
            }
        };
    },
    computed: {
        // 组件样式
        emptyStyle: function emptyStyle() {
            var style = {};
            style.marginTop = this.$uv.addUnit(this.marginTop);
            return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
        },
        // 文本样式
        textStyle: function textStyle() {
            var style = {};
            style.color = this.textColor;
            style.fontSize = this.$uv.addUnit(this.textSize);
            return style;
        },
        // 判断icon是否图片路径
        isImg: function isImg() {
            var isBase64 = this.icon.indexOf("data:") > -1 && this.icon.indexOf("base64") > -1;
            return this.icon.indexOf("/") !== -1 || isBase64;
        }
    }
};

if (!Array) {
    var _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
    _easycom_uv_icon2();
}

var _easycom_uv_icon = function _easycom_uv_icon() {
    return "../uv-icon/uv-icon.js";
};

if (!Math) {
    _easycom_uv_icon();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: _ctx.show
    }, _ctx.show ? common_vendor.e({
        b: !$options.isImg
    }, !$options.isImg ? {
        c: common_vendor.p(_defineProperty2({
            name: _ctx.mode === "message" ? "chat" : "empty-".concat(_ctx.mode),
            size: _ctx.iconSize,
            color: _ctx.iconColor
        }, "margin-top", "14"))
    } : {
        d: _ctx.$uv.addUnit(_ctx.width),
        e: _ctx.$uv.addUnit(_ctx.height),
        f: _ctx.icon
    }, {
        g: common_vendor.t(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]),
        h: common_vendor.s($options.textStyle),
        i: common_vendor.s($options.emptyStyle)
    }) : {});
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-cd879d2e" ] ]);

wx.createComponent(Component);