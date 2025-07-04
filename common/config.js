var baseUrl = "https://stepapi.cyuncq.com"
// var baseUrl = "http://192.168.1.68:7200";
var imageUrl = "https://step.cyuncq.com/stepactive";

var fimg = function fimg(id) {
    if (id && id.indexOf("https") === -1) {
        return baseUrl + "/sysFileInfo/preview?id=" + id;
    }
    return id;
};

exports.baseUrl = baseUrl;

exports.fimg = fimg;

exports.imageUrl = imageUrl;