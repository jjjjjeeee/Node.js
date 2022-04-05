var fs = require('fs');
var http = require('http');
const { start } = require('repl');
var server = http.createServer((req, res)=>{
    if(req.url=='/form'){
        fs.readFile(__dirname+'/chatting1.html', 'utf-8', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
            res.end(data);
        });
    }
});
server.listen(10020, function(){
    console.log("server start... http://127.0.0.1:10020/form");
});

// ===== 통신 프로그램 구현 ===========================
// 모듈 객체 생성
var socketio = require('socket.io');

// 1) 소켓 서버를 생성하고 실행한다.
var io = socketio.listen(server);

// 2) 접속을 대기하는 이벤트를 생성한다.('connection이벤트가 발생하면 실행할 이벤트')
io.sockets.on('connection', (socket)=>{
    console.log('클라이언트가 접속함!');

    // 3) 클라이언트가 서버로 보낸 문자를 받을 이벤트
    socket.on('hello', function(msg){
        console.log("server-->"+msg);

        // 4) 서버가 클라이언트에게 이벤트를 발생하여 문자를 보내기
        socket.emit('hi','server Message: '+msg);
    });
});
