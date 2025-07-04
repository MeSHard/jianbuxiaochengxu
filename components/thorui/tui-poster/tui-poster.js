var _slicedToArray2 = require("../../../@babel/runtime/helpers/slicedToArray");

var _regeneratorRuntime2 = require("../../../@babel/runtime/helpers/regeneratorRuntime");

var _asyncToGenerator2 = require("../../../@babel/runtime/helpers/asyncToGenerator");

var common_vendor = require("../../../common/vendor.js");

var posterId = "poster_".concat(Math.ceil(Math.random() * 1e6).toString(36));

var _sfc_main = {
    name: "tui-poster",
    emits: [ "ready" ],
    props: {
        //海报宽度，单位rpx
        width: {
            type: [ Number, String ],
            default: 800
        },
        //海报高度，单位rpx
        height: {
            type: [ Number, String ],
            default: 1200
        },
        //像素比
        pixel: {
            type: [ Number, String ],
            default: 3
        }
    },
    watch: {
        width: function width(val) {
            this.cv_width = this.getPX(this.width);
        },
        height: function height(val) {
            this.cv_height = this.getPX(this.height);
        }
    },
    data: function data() {
        return {
            posterId: posterId,
            cv_width: 400,
            cv_height: 600
        };
    },
    created: function created() {
        this.cv_width = this.getPX(this.width);
        this.cv_height = this.getPX(this.height);
        this.ctx = null;
    },
    mounted: function mounted() {
        var _this = this;
        this.$nextTick(function() {
            setTimeout(function() {
                _this.ctx = common_vendor.index.createCanvasContext(_this.posterId, _this);
                _this.$emit("ready", {});
            }, 50);
        });
    },
    methods: {
        toast: function toast(msg) {
            common_vendor.index.showToast({
                title: msg,
                icon: "none"
            });
        },
        getPX: function getPX(val) {
            return common_vendor.index.upx2px(Number(val) * Number(this.pixel));
        },
        getTextWidth: function getTextWidth(context, text, fontSize) {
            var width = 0;
            width = context.measureText(text).width;
            return width;
        },
        getWrapText: function getWrapText(text, fontSize, textWidth, width, ctx) {
            var rows = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
            var textArr = [];
            if (textWidth > width) {
                var fillText = "";
                var lines = 1;
                var arr2 = text.split("");
                for (var i = 0, len = arr2.length; i < len; i++) {
                    fillText = fillText + arr2[i];
                    if (this.getTextWidth(ctx, fillText, fontSize) >= width) {
                        if (lines === rows && rows !== -1) {
                            if (i !== arr2.length - 1) {
                                fillText = fillText.substring(0, fillText.length - 1) + "...";
                            }
                            textArr.push(fillText);
                            break;
                        }
                        textArr.push(fillText);
                        fillText = "";
                        lines++;
                    } else if (i === arr2.length - 1) {
                        textArr.push(fillText);
                    }
                }
            } else {
                textArr.push(text);
            }
            return textArr;
        },
        startDrawText: function startDrawText(ctx, param) {
            var _this2 = this;
            var styles = param.style || {};
            var left = styles.left, top = styles.top, fontSize = styles.fontSize, color = styles.color, _styles$baseLine = styles.baseLine, baseLine = _styles$baseLine === void 0 ? "normal" : _styles$baseLine, _styles$textAlign = styles.textAlign, textAlign = _styles$textAlign === void 0 ? "left" : _styles$textAlign, frontSize = styles.frontSize, spacing = styles.spacing, _styles$opacity = styles.opacity, opacity = _styles$opacity === void 0 ? 1 : _styles$opacity, _styles$lineThrough = styles.lineThrough, lineThrough = _styles$lineThrough === void 0 ? false : _styles$lineThrough, _styles$width = styles.width, width = _styles$width === void 0 ? 600 : _styles$width, _styles$rows = styles.rows, rows = _styles$rows === void 0 ? 1 : _styles$rows, _styles$lineHeight = styles.lineHeight, lineHeight = _styles$lineHeight === void 0 ? 0 : _styles$lineHeight, _styles$fontWeight = styles.fontWeight, fontWeight = _styles$fontWeight === void 0 ? "normal" : _styles$fontWeight, _styles$fontStyle = styles.fontStyle, fontStyle = _styles$fontStyle === void 0 ? "normal" : _styles$fontStyle, _styles$fontFamily = styles.fontFamily, fontFamily = _styles$fontFamily === void 0 ? "sans-serif" : _styles$fontFamily;
            ctx.save();
            ctx.beginPath();
            ctx.font = fontStyle + " " + fontWeight + " " + this.getPX(fontSize) + "px " + fontFamily;
            ctx.setGlobalAlpha(opacity);
            ctx.setFillStyle(color);
            ctx.setTextBaseline(baseLine);
            ctx.setTextAlign(textAlign);
            var textWidth = this.getTextWidth(ctx, param.text, fontSize);
            width = this.getPX(width);
            var textArr = this.getWrapText(param.text, fontSize, textWidth, width, ctx, rows);
            if (param.frontText) {
                ctx.setFontSize(this.getPX(frontSize));
                left = this.getTextWidth(ctx, param.frontText, frontSize) + this.getPX(left + spacing);
                ctx.setFontSize(this.getPX(fontSize));
            } else {
                left = this.getPX(left);
            }
            textArr.forEach(function(item, index) {
                ctx.fillText(item, left, _this2.getPX(top + (lineHeight || fontSize) * index));
            });
            ctx.restore();
            if (lineThrough) {
                var lineY = top;
                switch (baseLine) {
                  case "top":
                    lineY += fontSize / 2 + 4;
                    break;

                  case "middle":
                    break;

                  case "bottom":
                    lineY -= fontSize / 2 + 4;
                    break;

                  default:
                    lineY -= fontSize / 2 - 3;
                    break;
                }
                ctx.save();
                ctx.moveTo(left, this.getPX(lineY));
                ctx.lineTo(left + textWidth + 2, this.getPX(lineY));
                ctx.setStrokeStyle(color);
                ctx.stroke();
                ctx.restore();
            }
        },
        drawRadiusRect: function drawRadiusRect(ctx, styles) {
            var left = styles.left, top = styles.top, width = styles.width, height = styles.height, borderRadius = styles.borderRadius;
            var r = this.getPX(borderRadius / 2);
            left = this.getPX(left);
            top = this.getPX(top);
            width = this.getPX(width);
            height = this.getPX(height);
            ctx.beginPath();
            ctx.arc(left + r, top + r, r, Math.PI, Math.PI * 1.5);
            ctx.moveTo(left + r, top);
            ctx.lineTo(left + width - r, top);
            ctx.lineTo(left + width, top + r);
            ctx.arc(left + width - r, top + r, r, Math.PI * 1.5, Math.PI * 2);
            ctx.lineTo(left + width, top + height - r);
            ctx.lineTo(left + width - r, top + height);
            ctx.arc(left + width - r, top + height - r, r, 0, Math.PI * .5);
            ctx.lineTo(left + r, top + height);
            ctx.lineTo(left, top + height - r);
            ctx.arc(left + r, top + height - r, r, Math.PI * .5, Math.PI);
            ctx.lineTo(left, top + r);
            ctx.lineTo(left + r, top);
        },
        startDrawImage: function startDrawImage(ctx, param) {
            var styles = param.style || {};
            var left = styles.left, top = styles.top, width = styles.width, height = styles.height, _styles$borderRadius = styles.borderRadius, borderRadius = _styles$borderRadius === void 0 ? 0 : _styles$borderRadius, _styles$borderWidth = styles.borderWidth, borderWidth = _styles$borderWidth === void 0 ? 0 : _styles$borderWidth, borderColor = styles.borderColor;
            ctx.save();
            if (borderRadius > 0) {
                this.drawRadiusRect(ctx, styles);
                ctx.strokeStyle = "rgba(0,0,0,0)";
                ctx.stroke();
                ctx.clip();
            }
            ctx.drawImage(param.src, this.getPX(left), this.getPX(top), this.getPX(width), this.getPX(height));
            if (borderWidth && borderWidth > 0) {
                ctx.setStrokeStyle(borderColor);
                ctx.setLineWidth(this.getPX(borderWidth));
                ctx.stroke();
            }
            ctx.restore();
        },
        startDrawRect: function startDrawRect(ctx, param) {
            var styles = param.style || {};
            var width = styles.width, height = styles.height, left = styles.left, top = styles.top, borderWidth = styles.borderWidth, backgroundColor = styles.backgroundColor, gradientColor = styles.gradientColor, _styles$gradientType = styles.gradientType, gradientType = _styles$gradientType === void 0 ? 1 : _styles$gradientType, borderColor = styles.borderColor, _styles$borderRadius2 = styles.borderRadius, borderRadius = _styles$borderRadius2 === void 0 ? 0 : _styles$borderRadius2, _styles$opacity2 = styles.opacity, opacity = _styles$opacity2 === void 0 ? 1 : _styles$opacity2, shadow = styles.shadow;
            if (backgroundColor) {
                ctx.save();
                ctx.setGlobalAlpha(opacity);
                if (gradientColor) {
                    var grd = null;
                    if (gradientType == 1) {
                        grd = ctx.createLinearGradient(0, 0, this.getPX(width), this.getPX(height));
                    } else {
                        grd = ctx.createLinearGradient(0, this.getPX(width), this.getPX(height), 0);
                    }
                    grd.addColorStop(0, backgroundColor);
                    grd.addColorStop(1, gradientColor);
                    ctx.setFillStyle(grd);
                } else {
                    ctx.setFillStyle(backgroundColor);
                }
                if (shadow) {
                    var offsetX = shadow.offsetX, offsetY = shadow.offsetY, blur = shadow.blur, color = shadow.color;
                    ctx.shadowOffsetX = this.getPX(offsetX);
                    ctx.shadowOffsetY = this.getPX(offsetY);
                    ctx.shadowBlur = blur;
                    ctx.shadowColor = color;
                }
                if (borderRadius > 0) {
                    this.drawRadiusRect(ctx, styles);
                    ctx.fill();
                } else {
                    ctx.fillRect(this.getPX(left), this.getPX(top), this.getPX(width), this.getPX(height));
                }
                ctx.restore();
            }
            if (borderWidth) {
                ctx.save();
                ctx.setGlobalAlpha(opacity);
                ctx.setStrokeStyle(borderColor);
                ctx.setLineWidth(this.getPX(borderWidth));
                if (borderRadius > 0) {
                    this.drawRadiusRect(ctx, styles);
                    ctx.stroke();
                } else {
                    ctx.strokeRect(this.getPX(left), this.getPX(top), this.getPX(width), this.getPX(height));
                }
                ctx.restore();
            }
        },
        startDrawLine: function startDrawLine(ctx, param) {
            var styles = param.style;
            var left = styles.left, top = styles.top, endLeft = styles.endLeft, endTop = styles.endTop, color = styles.color, _styles$width2 = styles.width, width = _styles$width2 === void 0 ? 1 : _styles$width2;
            ctx.save();
            ctx.beginPath();
            ctx.setStrokeStyle(color);
            ctx.setLineWidth(this.getPX(width));
            ctx.moveTo(this.getPX(left), this.getPX(top));
            ctx.lineTo(this.getPX(endLeft), this.getPX(endTop));
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        },
        judgeIosPermissionPhotoLibrary: function judgeIosPermissionPhotoLibrary() {},
        requestAndroidPermission: function requestAndroidPermission(permissionID) {},
        gotoAppPermissionSetting: function gotoAppPermissionSetting(isAndroid) {},
        judgePermissionPhotoLibrary: function() {
            var _judgePermissionPhotoLibrary = _asyncToGenerator2(/* */ _regeneratorRuntime2().mark(function _callee(callback) {
                return _regeneratorRuntime2().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        common_vendor.index.authorize({
                            scope: "scope.writePhotosAlbum",
                            success: function success() {
                                callback && callback(true);
                            },
                            fail: function fail() {
                                common_vendor.index.showModal({
                                    title: "提示",
                                    content: "您还没有开启相册权限，是否立即开启？",
                                    showCancel: true,
                                    success: function success(res) {
                                        if (res.confirm) {
                                            common_vendor.wx$1.openSetting({
                                                success: function success(res2) {}
                                            });
                                        }
                                    }
                                });
                            }
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                }, _callee);
            }));
            function judgePermissionPhotoLibrary(_x) {
                return _judgePermissionPhotoLibrary.apply(this, arguments);
            }
            return judgePermissionPhotoLibrary;
        }(),
        imgDownload: function imgDownload(url) {
            return new Promise(function(resolve, reject) {
                common_vendor.index.downloadFile({
                    url: url,
                    success: function success(res) {
                        resolve(res.tempFilePath);
                    },
                    fail: function fail(err) {
                        reject(false);
                    }
                });
            });
        },
        base64ToImg: function base64ToImg(base64) {
            var uniqueId = "poster_".concat(Math.ceil(Math.random() * 1e6).toString(36));
            return new Promise(function(resolve, reject) {
                var _ref = /data:image\/(\w+);base64,(.*)/.exec(base64) || [], _ref2 = _slicedToArray2(_ref, 3), format = _ref2[1], bodyData = _ref2[2];
                var arrayBuffer = common_vendor.wx$1.base64ToArrayBuffer(bodyData);
                var filePath = "".concat(common_vendor.wx$1.env.USER_DATA_PATH, "/").concat(uniqueId, ".").concat(format);
                common_vendor.wx$1.getFileSystemManager().writeFile({
                    filePath: filePath,
                    data: arrayBuffer,
                    encoding: "binary",
                    success: function success() {
                        resolve(filePath);
                    },
                    fail: function fail() {
                        reject(false);
                    }
                });
            });
        },
        startDraw: function startDraw(data, callback) {
            var _this3 = this;
            var ctx = this.ctx;
            if (ctx) {
                ctx.clearRect(0, 0, this.cv_width, this.cv_height);
                data.forEach(function(item) {
                    if (item.type === "image") {
                        _this3.startDrawImage(ctx, item);
                    } else if (item.type === "text") {
                        _this3.startDrawText(ctx, item);
                    } else if (item.type === "rect") {
                        _this3.startDrawRect(ctx, item);
                    } else if (item.type === "line") {
                        _this3.startDrawLine(ctx, item);
                    }
                });
                var platform = common_vendor.index.getSystemInfoSync().platform;
                var time = 80;
                if (platform === "android") {
                    time = 300;
                }
                setTimeout(function() {
                    ctx.draw(false, function() {
                        setTimeout(function() {
                            common_vendor.index.canvasToTempFilePath({
                                x: 0,
                                y: 0,
                                canvasId: _this3.posterId,
                                fileType: "png",
                                quality: 1,
                                success: function success(res) {
                                    callback && callback(res.tempFilePath);
                                },
                                fail: function fail() {
                                    callback && callback(false);
                                }
                            }, _this3);
                        }, time);
                    });
                }, 50);
            } else {
                callback && callback(false);
            }
        },
        draw: function draw(data, callback) {
            var _this4 = this;
            if (!data || data.length === 0) return;
            var func = [], idxes = [];
            data.forEach(function(item, index) {
                if (item.type === "image") {
                    if (item.imgType == 2) {
                        func.push(_this4.imgDownload(item.src));
                        idxes.push(index);
                    }
                    if (item.imgType == 3) {
                        func.push(_this4.base64ToImg(item.src));
                        idxes.push(index);
                    }
                }
            });
            if (func.length > 0) {
                Promise.all(func).then(function(res) {
                    res.forEach(function(imgRes, idx) {
                        var item = data[idxes[idx]];
                        item.src = imgRes;
                    });
                    _this4.startDraw(data, callback);
                }).catch(function(err) {
                    console.log(arr);
                    _this4.toast("图片处理失败!");
                });
            } else {
                this.startDraw(data, callback);
            }
        },
        save: function save(file) {
            var _this5 = this;
            this.judgePermissionPhotoLibrary(function(res) {
                if (res) {
                    common_vendor.index.saveImageToPhotosAlbum({
                        filePath: file,
                        success: function success(res2) {
                            _this5.toast("图片已保存到相册");
                        },
                        fail: function fail(res2) {
                            _this5.toast("图片保存失败");
                        }
                    });
                }
            });
        }
    }
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: $data.posterId
    }, $data.posterId ? {
        b: $data.cv_width + "px",
        c: $data.cv_height + "px",
        d: $data.posterId,
        e: $data.posterId
    } : {});
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-0bd45d91" ] ]);

wx.createComponent(Component);