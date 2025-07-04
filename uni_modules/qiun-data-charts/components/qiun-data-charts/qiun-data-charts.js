var _typeof2 = require("../../../../@babel/runtime/helpers/typeof");

var common_vendor = require("../../../../common/vendor.js");

var uni_modules_qiunDataCharts_js_sdk_uCharts_uCharts = require("../../js_sdk/u-charts/u-charts.js");

var uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts = require("../../js_sdk/u-charts/config-ucharts.js");

function deepCloneAssign() {
    var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }
    for (var i in args) {
        for (var key in args[i]) {
            if (args[i].hasOwnProperty(key)) {
                origin[key] = args[i][key] && _typeof2(args[i][key]) === "object" ? deepCloneAssign(Array.isArray(args[i][key]) ? [] : {}, origin[key], args[i][key]) : args[i][key];
            }
        }
    }
    return origin;
}

function formatterAssign(args, formatter) {
    for (var key in args) {
        if (args.hasOwnProperty(key) && args[key] !== null && _typeof2(args[key]) === "object") {
            formatterAssign(args[key], formatter);
        } else if (key === "format" && typeof args[key] === "string") {
            args["formatter"] = formatter[args[key]] ? formatter[args[key]] : void 0;
        }
    }
    return args;
}

function getFormatDate(date) {
    var seperator = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator + month + seperator + strDate;
    return currentdate;
}

var lastMoveTime = null;

function debounce(fn, wait) {
    var timer = false;
    return function() {
        var _arguments = arguments, _this2 = this;
        clearTimeout(timer);
        timer && clearTimeout(timer);
        timer = setTimeout(function() {
            timer = false;
            fn.apply(_this2, _arguments);
        }, wait);
    };
}

var _sfc_main = {
    name: "qiun-data-charts",
    mixins: [ common_vendor.Ys.mixinDatacom ],
    props: {
        type: {
            type: String,
            default: null
        },
        canvasId: {
            type: String,
            default: "uchartsid"
        },
        canvas2d: {
            type: Boolean,
            default: false
        },
        background: {
            type: String,
            default: "rgba(0,0,0,0)"
        },
        animation: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object,
            default: function _default() {
                return {
                    categories: [],
                    series: []
                };
            }
        },
        opts: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        eopts: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        loadingType: {
            type: Number,
            default: 2
        },
        errorShow: {
            type: Boolean,
            default: true
        },
        errorReload: {
            type: Boolean,
            default: true
        },
        errorMessage: {
            type: String,
            default: null
        },
        inScrollView: {
            type: Boolean,
            default: false
        },
        reshow: {
            type: Boolean,
            default: false
        },
        reload: {
            type: Boolean,
            default: false
        },
        disableScroll: {
            type: Boolean,
            default: false
        },
        optsWatch: {
            type: Boolean,
            default: true
        },
        onzoom: {
            type: Boolean,
            default: false
        },
        ontap: {
            type: Boolean,
            default: true
        },
        ontouch: {
            type: Boolean,
            default: false
        },
        onmouse: {
            type: Boolean,
            default: true
        },
        onmovetip: {
            type: Boolean,
            default: false
        },
        echartsH5: {
            type: Boolean,
            default: false
        },
        echartsApp: {
            type: Boolean,
            default: false
        },
        tooltipShow: {
            type: Boolean,
            default: true
        },
        tooltipFormat: {
            type: String,
            default: void 0
        },
        tooltipCustom: {
            type: Object,
            default: void 0
        },
        startDate: {
            type: String,
            default: void 0
        },
        endDate: {
            type: String,
            default: void 0
        },
        textEnum: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        groupEnum: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        pageScrollTop: {
            type: Number,
            default: 0
        },
        directory: {
            type: String,
            default: "/"
        },
        tapLegend: {
            type: Boolean,
            default: true
        },
        menus: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            cid: "uchartsid",
            inWx: false,
            inAli: false,
            inTt: false,
            inBd: false,
            inH5: false,
            inApp: false,
            inWin: false,
            type2d: true,
            disScroll: false,
            openmouse: false,
            pixel: 1,
            cWidth: 375,
            cHeight: 250,
            showchart: false,
            echarts: false,
            echartsResize: {
                state: false
            },
            uchartsOpts: {},
            echartsOpts: {},
            drawData: {},
            lastDrawTime: null
        };
    },
    created: function created() {
        this.cid = this.canvasId;
        if (this.canvasId == "uchartsid" || this.canvasId == "") {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            var len = t.length;
            var id = "";
            for (var i = 0; i < 32; i++) {
                id += t.charAt(Math.floor(Math.random() * len));
            }
            this.cid = id;
        }
        var systemInfo = common_vendor.index.getSystemInfoSync();
        if (systemInfo.platform === "windows" || systemInfo.platform === "mac") {
            this.inWin = true;
        }
        this.inWx = true;
        if (this.canvas2d === false || systemInfo.platform === "windows" || systemInfo.platform === "mac") {
            this.type2d = false;
        } else {
            this.type2d = true;
            this.pixel = systemInfo.pixelRatio;
        }
        this.disScroll = this.disableScroll;
    },
    mounted: function mounted() {
        var _this3 = this;
        this.$nextTick(function() {
            _this3.beforeInit();
        });
        var time = this.inH5 ? 500 : 200;
        var _this = this;
        common_vendor.index.onWindowResize(debounce(function(res) {
            if (_this.mixinDatacomLoading == true) {
                return;
            }
            var errmsg = _this.mixinDatacomErrorMessage;
            if (errmsg !== null && errmsg !== "null" && errmsg !== "") {
                return;
            }
            if (_this.echarts) {
                _this.echartsResize.state = !_this.echartsResize.state;
            } else {
                _this.resizeHandler();
            }
        }, time));
    },
    destroyed: function destroyed() {
        if (this.echarts === true) {
            delete cfe.option[this.cid];
            delete cfe.instance[this.cid];
        } else {
            delete uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[this.cid];
            delete uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[this.cid];
        }
        common_vendor.index.offWindowResize(function() {});
    },
    watch: {
        chartDataProps: {
            handler: function handler(val, oldval) {
                if (_typeof2(val) === "object") {
                    if (JSON.stringify(val) !== JSON.stringify(oldval)) {
                        this._clearChart();
                        if (val.series && val.series.length > 0) {
                            this.beforeInit();
                        } else {
                            this.mixinDatacomLoading = true;
                            this.showchart = false;
                            this.mixinDatacomErrorMessage = null;
                        }
                    }
                } else {
                    this.mixinDatacomLoading = false;
                    this._clearChart();
                    this.showchart = false;
                    this.mixinDatacomErrorMessage = "参数错误：chartData数据类型错误";
                }
            },
            immediate: false,
            deep: true
        },
        localdata: {
            handler: function handler(val, oldval) {
                if (JSON.stringify(val) !== JSON.stringify(oldval)) {
                    if (val.length > 0) {
                        this.beforeInit();
                    } else {
                        this.mixinDatacomLoading = true;
                        this._clearChart();
                        this.showchart = false;
                        this.mixinDatacomErrorMessage = null;
                    }
                }
            },
            immediate: false,
            deep: true
        },
        optsProps: {
            handler: function handler(val, oldval) {
                if (_typeof2(val) === "object") {
                    if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === false && this.optsWatch == true) {
                        this.checkData(this.drawData);
                    }
                } else {
                    this.mixinDatacomLoading = false;
                    this._clearChart();
                    this.showchart = false;
                    this.mixinDatacomErrorMessage = "参数错误：opts数据类型错误";
                }
            },
            immediate: false,
            deep: true
        },
        eoptsProps: {
            handler: function handler(val, oldval) {
                if (_typeof2(val) === "object") {
                    if (JSON.stringify(val) !== JSON.stringify(oldval) && this.echarts === true) {
                        this.checkData(this.drawData);
                    }
                } else {
                    this.mixinDatacomLoading = false;
                    this.showchart = false;
                    this.mixinDatacomErrorMessage = "参数错误：eopts数据类型错误";
                }
            },
            immediate: false,
            deep: true
        },
        reshow: function reshow(val, oldval) {
            var _this4 = this;
            if (val === true && this.mixinDatacomLoading === false) {
                setTimeout(function() {
                    _this4.mixinDatacomErrorMessage = null;
                    _this4.echartsResize.state = !_this4.echartsResize.state;
                    _this4.checkData(_this4.drawData);
                }, 200);
            }
        },
        reload: function reload(val, oldval) {
            if (val === true) {
                this.showchart = false;
                this.mixinDatacomErrorMessage = null;
                this.reloading();
            }
        },
        mixinDatacomErrorMessage: function mixinDatacomErrorMessage(val, oldval) {
            if (val) {
                this.emitMsg({
                    name: "error",
                    params: {
                        type: "error",
                        errorShow: this.errorShow,
                        msg: val,
                        id: this.cid
                    }
                });
                if (this.errorShow) {
                    console.log("[秋云图表组件]" + val);
                }
            }
        },
        errorMessage: function errorMessage(val, oldval) {
            if (val && this.errorShow && val !== null && val !== "null" && val !== "") {
                this.showchart = false;
                this.mixinDatacomLoading = false;
                this.mixinDatacomErrorMessage = val;
            } else {
                this.showchart = false;
                this.mixinDatacomErrorMessage = null;
                this.reloading();
            }
        }
    },
    computed: {
        optsProps: function optsProps() {
            return JSON.parse(JSON.stringify(this.opts));
        },
        eoptsProps: function eoptsProps() {
            return JSON.parse(JSON.stringify(this.eopts));
        },
        chartDataProps: function chartDataProps() {
            return JSON.parse(JSON.stringify(this.chartData));
        }
    },
    methods: {
        beforeInit: function beforeInit() {
            this.mixinDatacomErrorMessage = null;
            if (_typeof2(this.chartData) === "object" && this.chartData != null && this.chartData.series !== void 0 && this.chartData.series.length > 0) {
                this.drawData = deepCloneAssign({}, this.chartData);
                this.mixinDatacomLoading = false;
                this.showchart = true;
                this.checkData(this.chartData);
            } else if (this.localdata.length > 0) {
                this.mixinDatacomLoading = false;
                this.showchart = true;
                this.localdataInit(this.localdata);
            } else if (this.collection !== "") {
                this.mixinDatacomLoading = false;
                this.getCloudData();
            } else {
                this.mixinDatacomLoading = true;
            }
        },
        localdataInit: function localdataInit(resdata) {
            if (this.groupEnum.length > 0) {
                for (var i = 0; i < resdata.length; i++) {
                    for (var j = 0; j < this.groupEnum.length; j++) {
                        if (resdata[i].group === this.groupEnum[j].value) {
                            resdata[i].group = this.groupEnum[j].text;
                        }
                    }
                }
            }
            if (this.textEnum.length > 0) {
                for (var _i = 0; _i < resdata.length; _i++) {
                    for (var _j = 0; _j < this.textEnum.length; _j++) {
                        if (resdata[_i].text === this.textEnum[_j].value) {
                            resdata[_i].text = this.textEnum[_j].text;
                        }
                    }
                }
            }
            var needCategories = false;
            var tmpData = {
                categories: [],
                series: []
            };
            var tmpcategories = [];
            var tmpseries = [];
            if (this.echarts === true) {
                needCategories = cfe.categories.includes(this.type);
            } else {
                needCategories = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.categories.includes(this.type);
            }
            if (needCategories === true) {
                if (this.chartData && this.chartData.categories && this.chartData.categories.length > 0) {
                    tmpcategories = this.chartData.categories;
                } else {
                    if (this.startDate && this.endDate) {
                        var idate = new Date(this.startDate);
                        var edate = new Date(this.endDate);
                        while (idate <= edate) {
                            tmpcategories.push(getFormatDate(idate));
                            idate = idate.setDate(idate.getDate() + 1);
                            idate = new Date(idate);
                        }
                    } else {
                        var tempckey = {};
                        resdata.map(function(item, index) {
                            if (item.text != void 0 && !tempckey[item.text]) {
                                tmpcategories.push(item.text);
                                tempckey[item.text] = true;
                            }
                        });
                    }
                }
                tmpData.categories = tmpcategories;
            }
            var tempskey = {};
            resdata.map(function(item, index) {
                if (item.group != void 0 && !tempskey[item.group]) {
                    tmpseries.push({
                        name: item.group,
                        data: []
                    });
                    tempskey[item.group] = true;
                }
            });
            if (tmpseries.length == 0) {
                tmpseries = [ {
                    name: "默认分组",
                    data: []
                } ];
                if (needCategories === true) {
                    for (var _j2 = 0; _j2 < tmpcategories.length; _j2++) {
                        var seriesdata = 0;
                        for (var _i2 = 0; _i2 < resdata.length; _i2++) {
                            if (resdata[_i2].text == tmpcategories[_j2]) {
                                seriesdata = resdata[_i2].value;
                            }
                        }
                        tmpseries[0].data.push(seriesdata);
                    }
                } else {
                    for (var _i3 = 0; _i3 < resdata.length; _i3++) {
                        tmpseries[0].data.push({
                            name: resdata[_i3].text,
                            value: resdata[_i3].value
                        });
                    }
                }
            } else {
                for (var k = 0; k < tmpseries.length; k++) {
                    if (tmpcategories.length > 0) {
                        for (var _j3 = 0; _j3 < tmpcategories.length; _j3++) {
                            var _seriesdata = 0;
                            for (var _i4 = 0; _i4 < resdata.length; _i4++) {
                                if (tmpseries[k].name == resdata[_i4].group && resdata[_i4].text == tmpcategories[_j3]) {
                                    _seriesdata = resdata[_i4].value;
                                }
                            }
                            tmpseries[k].data.push(_seriesdata);
                        }
                    } else {
                        for (var _i5 = 0; _i5 < resdata.length; _i5++) {
                            if (tmpseries[k].name == resdata[_i5].group) {
                                tmpseries[k].data.push(resdata[_i5].value);
                            }
                        }
                    }
                }
            }
            tmpData.series = tmpseries;
            this.drawData = deepCloneAssign({}, tmpData);
            this.checkData(tmpData);
        },
        reloading: function reloading() {
            if (this.errorReload === false) {
                return;
            }
            this.showchart = false;
            this.mixinDatacomErrorMessage = null;
            if (this.collection !== "") {
                this.mixinDatacomLoading = false;
                this.onMixinDatacomPropsChange(true);
            } else {
                this.beforeInit();
            }
        },
        checkData: function checkData(anyData) {
            var _this5 = this;
            var cid = this.cid;
            if (this.echarts === true) {
                cfe.option[cid] = deepCloneAssign({}, this.eopts);
                cfe.option[cid].id = cid;
                cfe.option[cid].type = this.type;
            } else {
                if (this.type && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.type.includes(this.type)) {
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] = deepCloneAssign({}, uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu[this.type], this.opts);
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].canvasId = cid;
                } else {
                    this.mixinDatacomLoading = false;
                    this.showchart = false;
                    this.mixinDatacomErrorMessage = "参数错误：props参数中type类型不正确";
                }
            }
            var newData = deepCloneAssign({}, anyData);
            if (newData.series !== void 0 && newData.series.length > 0) {
                this.mixinDatacomErrorMessage = null;
                if (this.echarts === true) {
                    cfe.option[cid].chartData = newData;
                    this.$nextTick(function() {
                        _this5.init();
                    });
                } else {
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].categories = newData.categories;
                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].series = newData.series;
                    this.$nextTick(function() {
                        _this5.init();
                    });
                }
            }
        },
        resizeHandler: function resizeHandler() {
            var _this6 = this;
            var currTime = Date.now();
            var lastDrawTime = this.lastDrawTime ? this.lastDrawTime : currTime - 3e3;
            var duration = currTime - lastDrawTime;
            if (duration < 1e3) return;
            common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + this.cid).boundingClientRect(function(data) {
                _this6.showchart = true;
                if (data.width > 0 && data.height > 0) {
                    if (data.width !== _this6.cWidth || data.height !== _this6.cHeight) {
                        _this6.checkData(_this6.drawData);
                    }
                }
            }).exec();
        },
        getCloudData: function getCloudData() {
            var _this7 = this;
            if (this.mixinDatacomLoading == true) {
                return;
            }
            this.mixinDatacomLoading = true;
            this.mixinDatacomGet().then(function(res) {
                _this7.mixinDatacomResData = res.result.data;
                _this7.localdataInit(_this7.mixinDatacomResData);
            }).catch(function(err) {
                _this7.mixinDatacomLoading = false;
                _this7.showchart = false;
                _this7.mixinDatacomErrorMessage = "请求错误：" + err;
            });
        },
        onMixinDatacomPropsChange: function onMixinDatacomPropsChange(needReset, changed) {
            if (needReset == true && this.collection !== "") {
                this.showchart = false;
                this.mixinDatacomErrorMessage = null;
                this._clearChart();
                this.getCloudData();
            }
        },
        _clearChart: function _clearChart() {
            var cid = this.cid;
            if (this.echarts !== true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context) {
                var ctx = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context;
                if (_typeof2(ctx) === "object" && !!!uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update) {
                    ctx.clearRect(0, 0, this.cWidth * this.pixel, this.cHeight * this.pixel);
                    ctx.draw();
                }
            }
        },
        init: function init() {
            var _this8 = this;
            var cid = this.cid;
            common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + cid).boundingClientRect(function(data) {
                if (data.width > 0 && data.height > 0) {
                    _this8.mixinDatacomLoading = false;
                    _this8.showchart = true;
                    _this8.lastDrawTime = Date.now();
                    _this8.cWidth = data.width;
                    _this8.cHeight = data.height;
                    if (_this8.echarts !== true) {
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].background = _this8.background == "rgba(0,0,0,0)" ? "#FFFFFF" : _this8.background;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].canvas2d = _this8.type2d;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].pixelRatio = _this8.pixel;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].animation = _this8.animation;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].width = data.width * _this8.pixel;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].height = data.height * _this8.pixel;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onzoom = _this8.onzoom;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].ontap = _this8.ontap;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].ontouch = _this8.ontouch;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onmouse = _this8.openmouse;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].onmovetip = _this8.onmovetip;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipShow = _this8.tooltipShow;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat = _this8.tooltipFormat;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipCustom = _this8.tooltipCustom;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].inScrollView = _this8.inScrollView;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].lastDrawTime = _this8.lastDrawTime;
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tapLegend = _this8.tapLegend;
                    }
                    if (_this8.inH5 || _this8.inApp) {
                        if (_this8.echarts == true) {
                            cfe.option[cid].ontap = _this8.ontap;
                            cfe.option[cid].onmouse = _this8.openmouse;
                            cfe.option[cid].tooltipShow = _this8.tooltipShow;
                            cfe.option[cid].tooltipFormat = _this8.tooltipFormat;
                            cfe.option[cid].tooltipCustom = _this8.tooltipCustom;
                            cfe.option[cid].lastDrawTime = _this8.lastDrawTime;
                            _this8.echartsOpts = deepCloneAssign({}, cfe.option[cid]);
                        } else {
                            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
                            _this8.uchartsOpts = deepCloneAssign({}, uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
                        }
                    } else {
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] = formatterAssign(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid], uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter);
                        _this8.mixinDatacomErrorMessage = null;
                        _this8.mixinDatacomLoading = false;
                        _this8.showchart = true;
                        _this8.$nextTick(function() {
                            if (_this8.type2d === true) {
                                var query = common_vendor.index.createSelectorQuery().in(_this8);
                                query.select("#" + cid).fields({
                                    node: true,
                                    size: true
                                }).exec(function(res) {
                                    if (res[0]) {
                                        var canvas = res[0].node;
                                        var ctx = canvas.getContext("2d");
                                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context = ctx;
                                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
                                        if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update === true) {
                                            _this8._updataUChart(cid);
                                        } else {
                                            canvas.width = data.width * _this8.pixel;
                                            canvas.height = data.height * _this8.pixel;
                                            canvas._width = data.width * _this8.pixel;
                                            canvas._height = data.height * _this8.pixel;
                                            setTimeout(function() {
                                                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.restore();
                                                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.save();
                                                _this8._newChart(cid);
                                            }, 100);
                                        }
                                    } else {
                                        _this8.showchart = false;
                                        _this8.mixinDatacomErrorMessage = "参数错误：开启2d模式后，未获取到dom节点，canvas-id:" + cid;
                                    }
                                });
                            } else {
                                if (_this8.inAli) {
                                    uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotateLock = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].rotate;
                                }
                                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context = common_vendor.index.createCanvasContext(cid, _this8);
                                if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid] && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].update === true) {
                                    _this8._updataUChart(cid);
                                } else {
                                    setTimeout(function() {
                                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.restore();
                                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].context.save();
                                        _this8._newChart(cid);
                                    }, 100);
                                }
                            }
                        });
                    }
                } else {
                    _this8.mixinDatacomLoading = false;
                    _this8.showchart = false;
                    if (_this8.reshow == true) {
                        _this8.mixinDatacomErrorMessage = "布局错误：未获取到父元素宽高尺寸！canvas-id:" + cid;
                    }
                }
            }).exec();
        },
        saveImage: function saveImage() {
            common_vendor.index.canvasToTempFilePath({
                canvasId: this.cid,
                success: function success(res) {
                    common_vendor.index.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: function success() {
                            common_vendor.index.showToast({
                                title: "保存成功",
                                duration: 2e3
                            });
                        }
                    });
                }
            }, this);
        },
        getImage: function getImage() {
            var _this9 = this;
            if (this.type2d == false) {
                common_vendor.index.canvasToTempFilePath({
                    canvasId: this.cid,
                    success: function success(res) {
                        _this9.emitMsg({
                            name: "getImage",
                            params: {
                                type: "getImage",
                                base64: res.tempFilePath
                            }
                        });
                    }
                }, this);
            } else {
                var query = common_vendor.index.createSelectorQuery().in(this);
                query.select("#" + this.cid).fields({
                    node: true,
                    size: true
                }).exec(function(res) {
                    if (res[0]) {
                        var canvas = res[0].node;
                        _this9.emitMsg({
                            name: "getImage",
                            params: {
                                type: "getImage",
                                base64: canvas.toDataURL("image/png")
                            }
                        });
                    }
                });
            }
        },
        _newChart: function _newChart(cid) {
            var _this10 = this;
            if (this.mixinDatacomLoading == true) {
                return;
            }
            this.showchart = true;
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid] = new uni_modules_qiunDataCharts_js_sdk_uCharts_uCharts.uCharts(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("renderComplete", function() {
                _this10.emitMsg({
                    name: "complete",
                    params: {
                        type: "complete",
                        complete: true,
                        id: cid,
                        opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                    }
                });
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].delEventListener("renderComplete");
            });
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("scrollLeft", function() {
                _this10.emitMsg({
                    name: "scrollLeft",
                    params: {
                        type: "scrollLeft",
                        scrollLeft: true,
                        id: cid,
                        opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                    }
                });
            });
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].addEventListener("scrollRight", function() {
                _this10.emitMsg({
                    name: "scrollRight",
                    params: {
                        type: "scrollRight",
                        scrollRight: true,
                        id: cid,
                        opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                    }
                });
            });
        },
        _updataUChart: function _updataUChart(cid) {
            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].updateData(uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid]);
        },
        _tooltipDefault: function _tooltipDefault(item, category, index, opts) {
            if (category) {
                var data = item.data;
                if (_typeof2(item.data) === "object") {
                    data = item.data.value;
                }
                return category + " " + item.name + ":" + data;
            } else {
                if (item.properties && item.properties.name) {
                    return item.properties.name;
                } else {
                    return item.name + ":" + item.data;
                }
            }
        },
        _showTooltip: function _showTooltip(e) {
            var _this11 = this;
            var cid = this.cid;
            var tc = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipCustom;
            if (tc && tc !== void 0 && tc !== null) {
                var offset = void 0;
                if (tc.x >= 0 && tc.y >= 0) {
                    offset = {
                        x: tc.x,
                        y: tc.y + 10
                    };
                }
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].showToolTip(e, {
                    index: tc.index,
                    offset: offset,
                    textList: tc.textList,
                    formatter: function formatter(item, category, index, opts) {
                        if (typeof uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat === "string" && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat]) {
                            return uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat](item, category, index, opts);
                        } else {
                            return _this11._tooltipDefault(item, category, index, opts);
                        }
                    }
                });
            } else {
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].showToolTip(e, {
                    formatter: function formatter(item, category, index, opts) {
                        if (typeof uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat === "string" && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat]) {
                            return uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.formatter[uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].tooltipFormat](item, category, index, opts);
                        } else {
                            return _this11._tooltipDefault(item, category, index, opts);
                        }
                    }
                });
            }
        },
        _tap: function _tap(e, move) {
            var _this12 = this;
            var cid = this.cid;
            var currentIndex = null;
            var legendIndex = null;
            if (this.inScrollView === true || this.inAli) {
                common_vendor.index.createSelectorQuery().in(this).select("#ChartBoxId" + cid).boundingClientRect(function(data) {
                    e.changedTouches = [];
                    if (_this12.inAli) {
                        e.changedTouches.unshift({
                            x: e.detail.clientX - data.left,
                            y: e.detail.clientY - data.top
                        });
                    } else {
                        e.changedTouches.unshift({
                            x: e.detail.x - data.left,
                            y: e.detail.y - data.top - _this12.pageScrollTop
                        });
                    }
                    if (move) {
                        if (_this12.tooltipShow === true) {
                            _this12._showTooltip(e);
                        }
                    } else {
                        currentIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getCurrentDataIndex(e);
                        legendIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getLegendDataIndex(e);
                        if (_this12.tapLegend === true) {
                            uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].touchLegend(e);
                        }
                        if (_this12.tooltipShow === true) {
                            _this12._showTooltip(e);
                        }
                        _this12.emitMsg({
                            name: "getIndex",
                            params: {
                                type: "getIndex",
                                event: {
                                    x: e.detail.x - data.left,
                                    y: e.detail.y - data.top
                                },
                                currentIndex: currentIndex,
                                legendIndex: legendIndex,
                                id: cid,
                                opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                            }
                        });
                    }
                }).exec();
            } else {
                if (move) {
                    if (this.tooltipShow === true) {
                        this._showTooltip(e);
                    }
                } else {
                    e.changedTouches = [];
                    e.changedTouches.unshift({
                        x: e.detail.x - e.currentTarget.offsetLeft,
                        y: e.detail.y - e.currentTarget.offsetTop
                    });
                    currentIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getCurrentDataIndex(e);
                    legendIndex = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].getLegendDataIndex(e);
                    if (this.tapLegend === true) {
                        uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].touchLegend(e);
                    }
                    if (this.tooltipShow === true) {
                        this._showTooltip(e);
                    }
                    this.emitMsg({
                        name: "getIndex",
                        params: {
                            type: "getIndex",
                            event: {
                                x: e.detail.x,
                                y: e.detail.y - e.currentTarget.offsetTop
                            },
                            currentIndex: currentIndex,
                            legendIndex: legendIndex,
                            id: cid,
                            opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                        }
                    });
                }
            }
        },
        _touchStart: function _touchStart(e) {
            var cid = this.cid;
            lastMoveTime = Date.now();
            if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.touches.length == 1) {
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scrollStart(e);
            }
            this.emitMsg({
                name: "getTouchStart",
                params: {
                    type: "touchStart",
                    event: e.changedTouches[0],
                    id: cid,
                    opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                }
            });
        },
        _touchMove: function _touchMove(e) {
            var cid = this.cid;
            var currMoveTime = Date.now();
            var duration = currMoveTime - lastMoveTime;
            var touchMoveLimit = uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].touchMoveLimit || 24;
            if (duration < Math.floor(1e3 / touchMoveLimit)) return;
            lastMoveTime = currMoveTime;
            if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.changedTouches.length == 1) {
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scroll(e);
            }
            if (this.ontap === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === false && this.onmovetip === true) {
                this._tap(e, true);
            }
            if (this.ontouch === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && this.onzoom === true && e.changedTouches.length == 2) {
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].dobuleZoom(e);
            }
            this.emitMsg({
                name: "getTouchMove",
                params: {
                    type: "touchMove",
                    event: e.changedTouches[0],
                    id: cid,
                    opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                }
            });
        },
        _touchEnd: function _touchEnd(e) {
            var cid = this.cid;
            if (uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === true && e.touches.length == 0) {
                uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].scrollEnd(e);
            }
            this.emitMsg({
                name: "getTouchEnd",
                params: {
                    type: "touchEnd",
                    event: e.changedTouches[0],
                    id: cid,
                    opts: uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.instance[cid].opts
                }
            });
            if (this.ontap === true && uni_modules_qiunDataCharts_js_sdk_uCharts_configUcharts.cfu.option[cid].enableScroll === false && this.onmovetip === true) {
                this._tap(e, true);
            }
        },
        _error: function _error(e) {
            this.mixinDatacomErrorMessage = e.detail.errMsg;
        },
        emitMsg: function emitMsg(msg) {
            this.$emit(msg.name, msg.params);
        },
        getRenderType: function getRenderType() {
            if (this.echarts === true && this.mixinDatacomLoading === false) {
                this.beforeInit();
            }
        },
        toJSON: function toJSON() {
            return this;
        }
    }
};

if (!Array) {
    var _easycom_qiun_loading2 = common_vendor.resolveComponent("qiun-loading");
    var _easycom_qiun_error2 = common_vendor.resolveComponent("qiun-error");
    (_easycom_qiun_loading2 + _easycom_qiun_error2)();
}

var _easycom_qiun_loading = function _easycom_qiun_loading() {
    return "../qiun-loading/qiun-loading.js";
};

var _easycom_qiun_error = function _easycom_qiun_error() {
    return "../qiun-error/qiun-error.js";
};

if (!Math) {
    (_easycom_qiun_loading + _easycom_qiun_error)();
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return common_vendor.e({
        a: _ctx.mixinDatacomLoading
    }, _ctx.mixinDatacomLoading ? {
        b: common_vendor.p({
            loadingType: $props.loadingType
        })
    } : {}, {
        c: _ctx.mixinDatacomErrorMessage && $props.errorShow
    }, _ctx.mixinDatacomErrorMessage && $props.errorShow ? {
        d: common_vendor.p({
            errorMessage: $props.errorMessage
        }),
        e: common_vendor.o(function() {
            return $options.reloading && $options.reloading.apply($options, arguments);
        })
    } : {}, {
        f: $data.type2d
    }, $data.type2d ? common_vendor.e({
        g: $props.ontouch
    }, $props.ontouch ? {
        h: $data.cid,
        i: $data.cid,
        j: $data.cWidth + "px",
        k: $data.cHeight + "px",
        l: $props.background,
        m: $data.disScroll,
        n: common_vendor.o(function() {
            return $options._touchStart && $options._touchStart.apply($options, arguments);
        }),
        o: common_vendor.o(function() {
            return $options._touchMove && $options._touchMove.apply($options, arguments);
        }),
        p: common_vendor.o(function() {
            return $options._touchEnd && $options._touchEnd.apply($options, arguments);
        }),
        q: common_vendor.o(function() {
            return $options._error && $options._error.apply($options, arguments);
        }),
        r: $data.showchart,
        s: common_vendor.o(function() {
            return $options._tap && $options._tap.apply($options, arguments);
        })
    } : {}, {
        t: !$props.ontouch
    }, !$props.ontouch ? {
        v: $data.cid,
        w: $data.cid,
        x: $data.cWidth + "px",
        y: $data.cHeight + "px",
        z: $props.background,
        A: $data.disScroll,
        B: common_vendor.o(function() {
            return $options._error && $options._error.apply($options, arguments);
        }),
        C: $data.showchart,
        D: common_vendor.o(function() {
            return $options._tap && $options._tap.apply($options, arguments);
        })
    } : {}) : {}, {
        E: !$data.type2d
    }, !$data.type2d ? common_vendor.e({
        F: $props.ontouch
    }, $props.ontouch ? common_vendor.e({
        G: $data.showchart
    }, $data.showchart ? {
        H: $data.cid,
        I: $data.cid,
        J: $data.cWidth + "px",
        K: $data.cHeight + "px",
        L: $props.background,
        M: common_vendor.o(function() {
            return $options._touchStart && $options._touchStart.apply($options, arguments);
        }),
        N: common_vendor.o(function() {
            return $options._touchMove && $options._touchMove.apply($options, arguments);
        }),
        O: common_vendor.o(function() {
            return $options._touchEnd && $options._touchEnd.apply($options, arguments);
        }),
        P: $data.disScroll,
        Q: common_vendor.o(function() {
            return $options._error && $options._error.apply($options, arguments);
        })
    } : {}, {
        R: common_vendor.o(function() {
            return $options._tap && $options._tap.apply($options, arguments);
        })
    }) : {}, {
        S: !$props.ontouch
    }, !$props.ontouch ? common_vendor.e({
        T: $data.showchart
    }, $data.showchart ? {
        U: $data.cid,
        V: $data.cid,
        W: $data.cWidth + "px",
        X: $data.cHeight + "px",
        Y: $props.background,
        Z: $data.disScroll,
        aa: common_vendor.o(function() {
            return $options._tap && $options._tap.apply($options, arguments);
        }),
        ab: common_vendor.o(function() {
            return $options._error && $options._error.apply($options, arguments);
        })
    } : {}) : {}) : {}, {
        ac: "ChartBoxId" + $data.cid
    });
}

var Component = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "render", _sfc_render ], [ "__scopeId", "data-v-0ca34aee" ] ]);

wx.createComponent(Component);