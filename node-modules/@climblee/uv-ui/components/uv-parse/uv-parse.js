var common_vendor = require("../../../../../common/vendor.js");

var node = function node() {
    return "./node/node.js";
};

var plugins = [];

var _sfc_main = {
    name: "uv-parse",
    data: function data() {
        return {
            nodes: []
        };
    },
    props: {
        containerStyle: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        },
        copyLink: {
            type: [ Boolean, String ],
            default: true
        },
        domain: String,
        errorImg: {
            type: String,
            default: ""
        },
        lazyLoad: {
            type: [ Boolean, String ],
            default: false
        },
        loadingImg: {
            type: String,
            default: ""
        },
        pauseVideo: {
            type: [ Boolean, String ],
            default: true
        },
        previewImg: {
            type: [ Boolean, String ],
            default: true
        },
        scrollTable: [ Boolean, String ],
        selectable: [ Boolean, String ],
        setTitle: {
            type: [ Boolean, String ],
            default: true
        },
        showImgMenu: {
            type: [ Boolean, String ],
            default: true
        },
        tagStyle: Object,
        useAnchor: [ Boolean, Number ]
    },
    emits: [ "load", "ready", "imgtap", "linktap", "play", "error" ],
    components: {
        node: node
    },
    watch: {
        content: function content(_content) {
            this.setContent(_content);
        }
    },
    created: function created() {
        this.plugins = [];
        for (var i = plugins.length; i--; ) {
            this.plugins.push(new plugins[i](this));
        }
    },
    mounted: function mounted() {
        if (this.content && !this.nodes.length) {
            this.setContent(this.content);
        }
    },
    beforeDestroy: function beforeDestroy() {
        this._hook("onDetached");
    },
    methods: {
        /**
     * @description 将锚点跳转的范围限定在一个 scroll-view 内
     * @param {Object} page scroll-view 所在页面的示例
     * @param {String} selector scroll-view 的选择器
     * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名
     */
        in: function _in(page, selector, scrollTop) {
            if (page && selector && scrollTop) {
                this._in = {
                    page: page,
                    selector: selector,
                    scrollTop: scrollTop
                };
            }
        },
        /**
     * @description 锚点跳转
     * @param {String} id 要跳转的锚点 id
     * @param {Number} offset 跳转位置的偏移量
     * @returns {Promise}
     */
        navigateTo: function navigateTo(id, offset) {
            var _this = this;
            return new Promise(function(resolve, reject) {
                if (!_this.useAnchor) {
                    reject(Error("Anchor is disabled"));
                    return;
                }
                offset = offset || parseInt(_this.useAnchor) || 0;
                var deep = " ";
                deep = ">>>";
                var selector = common_vendor.index.createSelectorQuery().in(_this._in ? _this._in.page : _this).select((_this._in ? _this._in.selector : "._root") + (id ? "".concat(deep, "#").concat(id) : "")).boundingClientRect();
                if (_this._in) {
                    selector.select(_this._in.selector).scrollOffset().select(_this._in.selector).boundingClientRect();
                } else {
                    selector.selectViewport().scrollOffset();
                }
                selector.exec(function(res) {
                    if (!res[0]) {
                        reject(Error("Label not found"));
                        return;
                    }
                    var scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
                    if (_this._in) {
                        _this._in.page[_this._in.scrollTop] = scrollTop;
                    } else {
                        common_vendor.index.pageScrollTo({
                            scrollTop: scrollTop,
                            duration: 300
                        });
                    }
                    resolve();
                });
            });
        },
        /**
     * @description 获取文本内容
     * @return {String}
     */
        getText: function getText(nodes) {
            var text = "";
            (function traversal(nodes2) {
                for (var i = 0; i < nodes2.length; i++) {
                    var node2 = nodes2[i];
                    if (node2.type === "text") {
                        text += node2.text.replace(/&amp;/g, "&");
                    } else if (node2.name === "br") {
                        text += "\n";
                    } else {
                        var isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
                        if (isBlock && text && text[text.length - 1] !== "\n") {
                            text += "\n";
                        }
                        if (node2.children) {
                            traversal(node2.children);
                        }
                        if (isBlock && text[text.length - 1] !== "\n") {
                            text += "\n";
                        } else if (node2.name === "td" || node2.name === "th") {
                            text += "\t";
                        }
                    }
                }
            })(nodes || this.nodes);
            return text;
        },
        /**
     * @description 获取内容大小和位置
     * @return {Promise}
     */
        getRect: function getRect() {
            var _this2 = this;
            return new Promise(function(resolve, reject) {
                common_vendor.index.createSelectorQuery().in(_this2).select("#_root").boundingClientRect().exec(function(res) {
                    return res[0] ? resolve(res[0]) : reject(Error("Root label not found"));
                });
            });
        },
        /**
     * @description 暂停播放媒体
     */
        pauseMedia: function pauseMedia() {
            for (var i = (this._videos || []).length; i--; ) {
                this._videos[i].pause();
            }
        },
        /**
     * @description 设置媒体播放速率
     * @param {Number} rate 播放速率
     */
        setPlaybackRate: function setPlaybackRate(rate) {
            this.playbackRate = rate;
            for (var i = (this._videos || []).length; i--; ) {
                this._videos[i].playbackRate(rate);
            }
        },
        /**
     * @description 设置内容
     * @param {String} content html 内容
     * @param {Boolean} append 是否在尾部追加
     */
        setContent: function setContent(content, append) {
            var _this3 = this;
            if (!append || !this.imgList) {
                this.imgList = [];
            }
            var nodes = new common_vendor.Parser(this).parse(content);
            this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
            this._videos = [];
            this.$nextTick(function() {
                _this3._hook("onLoad");
                _this3.$emit("load");
            });
            if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
                var height = 0;
                var _callback = function callback(rect) {
                    if (!rect || !rect.height) rect = {};
                    if (rect.height === height) {
                        _this3.$emit("ready", rect);
                    } else {
                        height = rect.height;
                        setTimeout(function() {
                            _this3.getRect().then(_callback).catch(_callback);
                        }, 350);
                    }
                };
                this.getRect().then(_callback).catch(_callback);
            } else {
                if (!this.imgList._unloadimgs) {
                    this.getRect().then(function(rect) {
                        _this3.$emit("ready", rect);
                    }).catch(function() {
                        _this3.$emit("ready", {});
                    });
                }
            }
        },
        /**
     * @description 调用插件钩子函数
     */
        _hook: function _hook(name) {
            for (var i = plugins.length; i--; ) {
                if (this.plugins[i][name]) {
                    this.plugins[i][name]();
                }
            }
        }
    }
};

if (!Array) {
    var _component_node = common_vendor.resolveComponent("node");
    _component_node();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: !$data.nodes[0]
    }, !$data.nodes[0] ? {} : {
        b: common_vendor.p({
            childs: $data.nodes,
            opts: [ $props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable ],
            name: "span"
        })
    }, {
        c: common_vendor.n(($props.selectable ? "_select " : "") + "_root"),
        d: common_vendor.s($props.containerStyle)
    });
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ] ]);

wx.createComponent(Component);