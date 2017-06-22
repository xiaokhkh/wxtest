// var superagent = require('superagent')
// get Access_token in ./getAccess_token.txt
var request = require('superagent'),
    querystring = require('querystring'),
    fs = require('fs'),
    getToken = require('./getAccess_token.js'); //stringify parse escape unescape
    // this.updateToken = ()=>{
    //     var obj = new getToken();
    //     obj.post();// 更新token
    // }
        var obj = new getToken();
        obj.post();// 更新token
var CreateMenu = function(){
    //https://api.weixin.qq.com/cgi-bin/menu/create 创建菜单初始接口
    var promise = new Promise((resolve,reject)=>{
        fs.readFile(__dirname+'/Access_token.txt',{flag: 'r+', encoding: 'utf8'},(err,data)=>{
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    promise.then((data)=>{
        var parama = {
            access_token:data,
        }// 读取文件中access_token
        var baseUrl = 'https://api.weixin.qq.com/cgi-bin/menu/create'
        var reqUrl = baseUrl+'?'+querystring.stringify(parama);
        console.log(reqUrl)
        var menuPara ={ // menuPara
            "button":[
            {
                 "type":"click",
                 "name":"今日歌曲",
                 "key":"V1001_TODAY_MUSIC"
             },
             {
                  "name":"菜单",
                  "sub_button":[
                  {
                      "type":"view",
                      "name":"搜索",
                      "url":"http://www.google.com/"
                   },
                   {
                        "type":"view",
                        "name":"Page",
                        "url":"http://120.24.240.86:3000/dirJade",
                    },
                   {
                      "type":"click",
                      "name":"赞一下我们",
                      "key":"V1001_GOOD"
                   }]
              }]
        }
            request.post(reqUrl)
            .send(menuPara)
            .end((req,res,err)=>{
                if (err) {
                    console.log(err)
                }else{

                    console.log(res.body)
                    //   JSON.parse
                    // console.log(typeof res.body)
                    // var jsonParse = JSON.parse(res.body)
                }
            })

    },(err)=>{
        console.log(err)
    })
}
module.exports = CreateMenu
