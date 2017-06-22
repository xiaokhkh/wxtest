var express = require('express');
var router = express.Router();
var check = require('./checkSignature.js')
router.use('/', function(req, res, next) {
    var data = {
        token:'khailtw111',
        signature : req.query.signature,//加密签名
        timestamp : req.query.timestamp,//时间戳
        nonce : req.query.nonce,//随机数
        echostr : req.query.echostr,//随机字符串
    }
    if (check(data)) {
        res.send(data.echostr);
    }else{
        //不处理
    }
});
module.exports = router;
