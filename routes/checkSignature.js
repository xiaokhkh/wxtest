var crypto = require('crypto');
var checkSignature = function(obj){
    var obj = obj||{};
    var oriArray = [];
    oriArray[0] = obj.nonce;
    oriArray[1] = obj.timestamp;
    oriArray[2] = obj.token;
    oriArray.sort();
    var str = oriArray.join('');
    var sha1 = crypto.createHash('sha1');//定义加密方式
    sha1.update(str);// 第二个参数是字符编码 如果有中文使用utf-8
    var signature = sha1.digest('hex');
    if (signature === obj.signature) {
        return true;
    }else{
        return false;
    }
}
module.exports = checkSignature;
