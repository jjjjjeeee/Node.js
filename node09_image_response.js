var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile(__dirname+'/img/33.png', function(e, imgSrc){
        if(!e){
            res.writeHead(200,{'Content-Type':'image/png'});
            res.write(imgSrc);
            res.end();
        }
    });
});

server.listen(10006, function(){
    console.log('server start... http://127.0.0.1:10006');
});