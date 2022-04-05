var http = require('http');

// 이벤트가 정의되어 있는 event모듈을 객체화하여야 한다.
var events = require('events');

// 이벤트 처리를 하기 위해서는 모듈을 담고 있는 EventEmitter객체를 초기화하여야 한다.
var event_obj = new events.EventEmitter();

// 이벤트가 발생시 실행할 함수 
// on(), addListener(), once()...
//         이벤트 종류, 이벤트가 발생하면 실행될 함수
event_obj.on('call',()=>{ // call이벤트 발생 시 실행됨
    console.log("call 이벤트 발생함...");
});

event_obj.addListener('call2', function(){
    console.log("call2 이벤트 발생~~~~");
});

event_obj.once('call3', function(){
    console.log('call3 이벤트 발생!!!!!!!!');
});

var server = http.createServer((req,res)=>{
    // 서버에 접속을 하면 이벤트를 발생시킴 : emit() => 이벤트 발생시키는 함수
    event_obj.emit('call'); // call이벤트 발생시킴
    event_obj.emit('call2');
    event_obj.emit('call3');

    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end("<h1>이벤트 테스트중.....</h1>");
});
server.listen(10004, ()=>{
    console.log("server start~~~~~~~ http://127.0.0.1:10004");
});