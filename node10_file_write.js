var fs = require('fs');

// 1. 비동기식으로 파일쓰기
var writeData = "비동기식으로 파일로 쓰기 연습중\r\n줄바꿈확인하기...";
//            파일명                    , 쓰기할 내용, 인코딩, 콜백함수
fs.writeFile(__dirname+'/file_write.txt', writeData, 'utf-8', function(error){
    if(error){
        console.log('비동기식으로 쓰기 실패'+error);
    }else{
        console.log('비동기식으로 파일쓰기 성공!');
    }
});

// 2. 동기식으로 파일 쓰기
var wrtieDataSync = "동기식으로 file write~~~~";

try{//                     경로+파일명                쓸 내용      인코딩
    fs.writeFileSync(__dirname+"/file_write2.txt",wrtieDataSync, 'utf-8');
    console.log("동기식 쓰기 완료!");
}catch(error){
    console.log('동기식 쓰기 에러....'+error);
}