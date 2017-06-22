// var superagent = require('superagent');
// get Access_token in ./getAccess_token.txt
var request = require('superagent'),
    querystring = require('querystring'),
    fs = require('fs');//stringify parse escape unescape
var getToken = function(){
    //https://api.weixin.qq.com/cgi-bin/token 获取token 接口
    // var self = this;
    var baseUrl = 'https://api.weixin.qq.com/cgi-bin/token';
    var parama = {
        grant_type:'client_credential',//获取access_token填写client_credential
        appid:'wx255d20379b312aea',
        secret:'8de602350ae3145d2cd65ffba8bef952',
    }
    var reqUrl = baseUrl+'?'+querystring.stringify(parama);
    // console.log(reqUrl);
    this.post = function(){
        request.post(reqUrl)
        .send(parama)
        .end((req,res,err)=>{
            if (err) {
                console.log(err);
            }else{
                //   JSON.parse
                // console.log(typeof res.body);
                // var jsonParse = JSON.parse(res.body);
                var w_data = res.body.access_token;//
                var w_data = new Buffer(w_data)// 将字符串转为 Buffer对象
                //将token值写入当前目录Access_token.txt文件中
                fs.writeFile(__dirname+"/Access_token.txt",w_data,{flag:'w+',encodeing:'utf-8'},function(err,data){
                  if (err) {
                    error(err+"get token failed")
                  }
                  console.log("get token successed")
                })
            }
        })

    }
    return this;
}
module.exports = getToken;
