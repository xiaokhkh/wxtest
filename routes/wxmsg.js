var express = require('express');
var router = express.Router();
var check = require('./checkSignature.js')

// 回复文本消息
// <xml>
// <ToUserName><![CDATA[toUser]]></ToUserName>
// <FromUserName><![CDATA[fromUser]]></FromUserName>
// <CreateTime>12345678</CreateTime>
// <MsgType><![CDATA[text]]></MsgType>
// <Content><![CDATA[你好]]></Content>
// </xml>
// 收的的文本消息
// <xml>
//  <ToUserName><![CDATA[toUser]]></ToUserName>
//  <FromUserName><![CDATA[fromUser]]></FromUserName>
//  <CreateTime>1348831860</CreateTime>
//  <MsgType><![CDATA[text]]></MsgType>
//  <Content><![CDATA[this is a test]]></Content>
//  <MsgId>1234567890123456</MsgId>
//  </xml>
router.use(function(req,res){
    res.writeHead(200, {'Content-Type': 'application/xml'});//响应数据格式
    var reqMsg = req.body.xml;
    // console.dir(reqMsg);
    // res.set({'Content-Type': 'application/xml'});
    var resMsg ='<xml>\
<ToUserName><![CDATA['+reqMsg.fromusername+']]></ToUserName>\
<FromUserName><![CDATA['+reqMsg.tousername+']]></FromUserName>\
<CreateTime>' + parseInt(new Date().valueOf() / 1000) + '</CreateTime>\
<MsgType><![CDATA[text]]></MsgType>\
<Content><![CDATA['+reqMsg.content+']]></Content>\
</xml>'
    console.dir(resMsg);
    res.end(resMsg);
})
module.exports = router;
