/* 
nodejs: 이벤트기반 서버 프레임워크이다.   
        모듈을 객체로 생성하여 사용할 수 있다.
        이벤트기반 자바스크립트 라이브러리
        서버를 내장하고 있음
*/

// 1. 서버 생성하기 : http모듈을 이용하여 server를 생성한다.
// http모듈을 객체로 생성하기
var http = require('http');

// http객체를 이용하여 서버만들기
var server = http.createServer(function(request, response){
    // 접속자에 응답하기

    // 헤더정보 보내기(200: 정상처리됨)
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    // 컨텐츠 보내기
    response.write("<h1>노드서버에서 보낸 컨텐츠</h1>");
    response.write("http 모듈을 이용하여 객체를 생성 후 server를 생성함");
    // 종료정보 보내기
    response.end("End...");
});

// 접속대기   port   callback함수
server.listen(10000, function(){
    console.log("server start... http://127.0.0.1:10000");
});