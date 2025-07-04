var _toConsumableArray2 = require("../../../../../@babel/runtime/helpers/toConsumableArray");

var _typeof2 = require("../../../../../@babel/runtime/helpers/typeof");

var _objectSpread2 = require("../../../../../@babel/runtime/helpers/objectSpread2");

var common_vendor = require("../../../../../common/vendor.js");

var _sfc_main = {
    name: "uv-transition",
    mixins: [ common_vendor.mpMixin, common_vendor.mixin ],
    emits: [ "click", "change" ],
    props: {
        // 是否展示组件
        show: {
            type: Boolean,
            default: false
        },
        // 使用的动画模式
        mode: {
            type: [ Array, String, null ],
            default: function _default() {
                return "fade";
            }
        },
        // 动画的执行时间，单位ms
        duration: {
            type: [ String, Number ],
            default: 300
        },
        // 使用的动画过渡函数
        timingFunction: {
            type: String,
            default: "ease-out"
        },
        customClass: {
            type: String,
            default: ""
        },
        // nvue模式下 是否直接显示，在uv-list等cell下面使用就需要设置
        cellChild: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            isShow: false,
            transform: "",
            opacity: 1,
            animationData: {},
            durationTime: 300,
            config: {}
        };
    },
    watch: {
        show: {
            handler: function handler(newVal) {
                if (newVal) {
                    this.open();
                } else {
                    if (this.isShow) {
                        this.close();
                    }
                }
            },
            immediate: true
        }
    },
    computed: {
        // 初始化动画条件
        transformStyles: function transformStyles() {
            var style = _objectSpread2(_objectSpread2({
                transform: this.transform,
                opacity: this.opacity
            }, this.$uv.addStyle(this.customStyle)), {}, {
                "transition-duration": "".concat(this.duration / 1e3, "s")
            });
            return this.$uv.addStyle(style, "string");
        }
    },
    created: function created() {
        this.config = {
            duration: this.duration,
            timingFunction: this.timingFunction,
            transformOrigin: "50% 50%",
            delay: 0
        };
        this.durationTime = this.duration;
    },
    methods: {
        /**
     *  ref 触发 初始化动画
     */
        init: function init() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (obj.duration) {
                this.durationTime = obj.duration;
            }
            this.animation = common_vendor.createAnimation(Object.assign(this.config, obj), this);
        },
        /**
     * 点击组件触发回调
     */
        onClick: function onClick() {
            this.$emit("click", {
                detail: this.isShow
            });
        },
        /**
     * ref 触发 动画分组
     * @param {Object} obj
     */
        step: function step(obj) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (!this.animation) return;
            for (var i in obj) {
                try {
                    if (_typeof2(obj[i]) === "object") {
                        var _this$animation;
                        (_this$animation = this.animation)[i].apply(_this$animation, _toConsumableArray2(obj[i]));
                    } else {
                        this.animation[i](obj[i]);
                    }
                } catch (e) {
                    console.error("方法 ".concat(i, " 不存在"));
                }
            }
            this.animation.step(config);
            return this;
        },
        /**
     *  ref 触发 执行动画
     */
        run: function run(fn) {
            if (!this.animation) return;
            this.animation.run(fn);
        },
        // 开始过度动画
        open: function open() {
            var _this = this;
            clearTimeout(this.timer);
            this.transform = "";
            this.isShow = true;
            var _this$styleInit = this.styleInit(false), opacity = _this$styleInit.opacity, transform = _this$styleInit.transform;
            if (typeof opacity !== "undefined") {
                this.opacity = opacity;
            }
            this.transform = transform;
            this.$nextTick(function() {
                _this.timer = setTimeout(function() {
                    _this.animation = common_vendor.createAnimation(_this.config, _this);
                    _this.tranfromInit(false).step();
                    _this.animation.run();
                    _this.$emit("change", {
                        detail: _this.isShow
                    });
                }, 20);
            });
        },
        // 关闭过渡动画
        close: function close(type) {
            var _this2 = this;
            if (!this.animation) return;
            this.tranfromInit(true).step().run(function() {
                _this2.isShow = false;
                _this2.animationData = null;
                _this2.animation = null;
                var _this2$styleInit = _this2.styleInit(false), opacity = _this2$styleInit.opacity, transform = _this2$styleInit.transform;
                _this2.opacity = opacity || 1;
                _this2.transform = transform;
                _this2.$emit("change", {
                    detail: _this2.isShow
                });
            });
        },
        // 处理动画开始前的默认样式
        styleInit: function styleInit(type) {
            var _this3 = this;
            var styles = {
                transform: ""
            };
            var buildStyle = function buildStyle(type2, mode) {
                if (mode === "fade") {
                    styles.opacity = _this3.animationType(type2)[mode];
                } else {
                    styles.transform += _this3.animationType(type2)[mode] + " ";
                }
            };
            if (typeof this.mode === "string") {
                buildStyle(type, this.mode);
            } else {
                this.mode.forEach(function(mode) {
                    buildStyle(type, mode);
                });
            }
            return styles;
        },
        // 处理内置组合动画
        tranfromInit: function tranfromInit(type) {
            var _this4 = this;
            var buildTranfrom = function buildTranfrom(type2, mode) {
                var aniNum = null;
                if (mode === "fade") {
                    aniNum = type2 ? 0 : 1;
                } else {
                    aniNum = type2 ? "-100%" : "0";
                    if (mode === "zoom-in") {
                        aniNum = type2 ? .8 : 1;
                    }
                    if (mode === "zoom-out") {
                        aniNum = type2 ? 1.2 : 1;
                    }
                    if (mode === "slide-right") {
                        aniNum = type2 ? "100%" : "0";
                    }
                    if (mode === "slide-bottom") {
                        aniNum = type2 ? "100%" : "0";
                    }
                }
                _this4.animation[_this4.animationMode()[mode]](aniNum);
            };
            if (typeof this.mode === "string") {
                buildTranfrom(type, this.mode);
            } else {
                this.mode.forEach(function(mode) {
                    buildTranfrom(type, mode);
                });
            }
            return this.animation;
        },
        animationType: function animationType(type) {
            return {
                fade: type ? 1 : 0,
                "slide-top": "translateY(".concat(type ? "0" : "-100%", ")"),
                "slide-right": "translateX(".concat(type ? "0" : "100%", ")"),
                "slide-bottom": "translateY(".concat(type ? "0" : "100%", ")"),
                "slide-left": "translateX(".concat(type ? "0" : "-100%", ")"),
                "zoom-in": "scaleX(".concat(type ? 1 : .8, ") scaleY(").concat(type ? 1 : .8, ")"),
                "zoom-out": "scaleX(".concat(type ? 1 : 1.2, ") scaleY(").concat(type ? 1 : 1.2, ")")
            };
        },
        // 内置动画类型与实际动画对应字典
        animationMode: function animationMode() {
            return {
                fade: "opacity",
                "slide-top": "translateY",
                "slide-right": "translateX",
                "slide-bottom": "translateY",
                "slide-left": "translateX",
                "zoom-in": "scale",
                "zoom-out": "scale"
            };
        },
        // 驼峰转中横线
        toLine: function toLine(name) {
            return name.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
    }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: $data.isShow
    }, $data.isShow ? {
        b: $data.animationData,
        c: common_vendor.n($props.customClass),
        d: common_vendor.s($options.transformStyles),
        e: common_vendor.o(function() {
            return $options.onClick && $options.onClick.apply($options, arguments);
        })
    } : {});
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ] ]);

wx.createComponent(Component);