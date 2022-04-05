var http = require("http");

var server = http.createServer(function(request, response){
    console.log(request.url);

    // request에서 서버로 전송받는 파라미터의 값을 얻기 위해서는 URLSearchParams()객체를 생성해야 한다.
    var params = new URLSearchParams(request.url.substring(2));
    console.log(params);

    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.write('<p>번호='+params.get("num")+"<br/>");
    response.write('이름='+params.get("name")+"<br/>");
    response.write('연락처='+params.get('tel')+"</p>");

    response.write("<form method='post' action='http://127.0.0.1:10002'>");
    response.write("아이디 <input type='text' name='userid'/><br/>");
    response.write("비밀번호 <input type='password' name='userpwd'/><br/>");
    response.write("이름 <input type='text' name='username'/><br/>");
    response.write("<input type='submit' value='post방식전송'>");
    response.end("</form>");
});

// 접속대기
server.listen(10001, function(){
                                                        // request에 해당 정보가 담겨있음
    console.log("server start... http://127.0.0.1:10001/?num=1234&name=홍길동&tel=010-1234-5678");
});
