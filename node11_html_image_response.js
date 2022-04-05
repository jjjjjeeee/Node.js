var http = require('http');
var fs = require('fs');

// 모듈 추가하는 방법 : mime
// npm 명령어를 이용하여 추가
// > npm install mime@2
var mime = require('Mime');

var server = http.createServer(function(request, response){
    var addr = request.url;
    console.log(addr);

    if(addr=='/home'){
        // home.html파일의 내용을 읽어 response에 쓰기를 한다.
        fs.readFile(__dirname+'/home.html','utf-8',function(e,d){
            if(e){// 파일 읽기 에러
                console.log('파일 읽기 실패...home.html');
            }else{// 파일 읽기 성공
                response.writeHead(200,{'Content-Type':'text/html;chaeset=utf-8'});
                response.end(d);
            }
        });
    }else if(addr=='/subpage'){
        fs.readFile(__dirname+'/subpage.html','utf-8',function(error, data){
            if(!error){
                response.writeHead(200,{'Content-type':'text/html; charset=uft-8'});
                response.end(data);
            }
        });
    }else if(addr.indexOf('/img')==0){// 이미지일 경우 (아닐경우는 -1)

        // 마임구하기
        var mimeType = mime.getType(addr.substring(1));
        console.log(mimeType);

        fs.readFile(__dirname+addr, function(error, imgData){
            if(!error){
                response.writeHead(200,{'Content-Type':mimeType});
                response.end(imgData);
            }
        });
    }
});

server.listen(10007, function(){
    console.log("server start..... http://127.0.0.1:10007/home");
});