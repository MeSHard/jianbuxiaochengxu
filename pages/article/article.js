var _toConsumableArray2 = require("../../@babel/runtime/helpers/toConsumableArray");

var common_vendor = require("../../common/vendor.js");

var common_assets = require("../../common/assets.js");

var _sfc_main = {
    __name: "article",
    setup: function setup(__props) {
        common_vendor.onLoad(function() {
            getlist();
            common_vendor.index.$on("issue", function() {
                pageNo.value = 1;
                list.value = [];
                status.value = "loadmore";
                empty.value = false;
                getlist();
            });
        });
        common_vendor.onUnload(function() {
            common_vendor.index.$off("issue");
        });
        common_vendor.ref(null);
        var pageNo = common_vendor.ref(1);
        var list = common_vendor.ref([]);
        var status = common_vendor.ref("loadmore");
        var empty = common_vendor.ref(false);
        var getlist = function getlist() {
            var data = [
              {'id':1,'title':'公告','backgroup':'#fa3534','img':'/static/gonggao.png'},
              {'id':2,'title':'科学健走全攻略','backgroup':'#ff9900','img':'/static/jianzhou.png'},
              {'id':3,'title':'健康体重管理','backgroup':'#19be6b','img':'/static/tizhong.png'},
              {'id':4,'title':'慢性病健康防护课堂','backgroup':'#3c9cff','img':'/static/jiangkang.png'}
            ];
            list.value = data
        };
        common_vendor.onReachBottom(function() {
            if (status.value === "loadmore") {
                pageNo.value++;
                getlist();
            }
        });
        var navtoarticledetail = function navtoarticledetail(id,title) {
            common_vendor.index.navigateTo({
                url: "/pages/articlelist/article?id=".concat(id)+'&title='+title
            });
        };
        return function(_ctx, _cache) {
            return {
                a: "https://step-cyuncq.oss-cn-beijing.aliyuncs.com/step/rankimg.png",
                b: common_vendor.f(common_vendor.unref(list), function(item, index, i0) {
                  var _a;
                  return {
                      img: common_vendor.t(item.img),
                      backgroup: common_vendor.t(item.backgroup),
                      title: common_vendor.t(item.title),
                      b: common_vendor.o(function($event) {
                          return navtoarticledetail(item.id,item.title);
                      })
                  };
              }),
                c: common_assets._imports_0$1
            };
        };
    }
};

var MiniProgramPage = /*   */ common_vendor._export_sfc(_sfc_main, [ [ "__scopeId", "data-v-33268ad9" ] ]);

wx.createPage(MiniProgramPage);