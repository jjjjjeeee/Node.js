// 파일 읽기 쓰기를 처리하는 모듈 fs : FileSystem

var fs = require('fs');

// 파일을 처리하기 위해서는 절대주소가 필요하다.
// [노드 전체 영역의 전역변수]
// [1] __filename : 현재 실행되는 파일의 경로와 파일명을 절대주소로 가진다.
// [2] __dirname : 현재 실행중인 파일의 경로를 절대주소로 가진다.

console.log("__filename ===> "+ __filename);
console.log("__dirname ===> "+ __dirname);


// 비동기식으로 파일 읽는 방법 : 읽기 쓰기 명령이 바로 실행되지 않고 스레드로 처리된다.
//            파일의 경로와 파일명        인코딩  콜백함수: 파일의 내용을 읽고 인코딩한 후 호출되는 함수
fs.readFile(__dirname+"/file_read.txt", 'utf-8', function(error, data){
    
    // error에 내용이 있으면 true
    if(error){
        // 파일 읽기 실패
        console.log('파일읽기 실패ㅠ3ㅠ');
    }else{
        // 파일 읽기 성공
        console.log('파일1: 비동기식 읽기 ------------------');
        console.log(data);
    }
});

// 동기식으로 파일 읽는 방법 : 읽기 쓰기 명령을 만나면 바로 실행한다.
//              파일명, 인코딩
var data = fs.readFileSync(__dirname+"/node01_start.js", "utf-8");
console.log("파일2: 동기식으로 파일 읽기 ===============");
console.log(data);
