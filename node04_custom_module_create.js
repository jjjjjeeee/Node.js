// 사용자 정의 모듈
// 변수, 함수를 정의하는데 내장객체인 exports를 이용하여 모듈을 생성할 수 있다.

// 1. 변수 선언하는 방법
// 외부에서도 쓸 수 있다는 의미
exports.productCode = 123456;
exports.productName = '컴퓨터';

// 2. 함수를 모듈로 선언하는 방법
/*
function hap(a, b){
    return a+b
}
*/

//      함수명
exports.hap = function(a,b){
    return a+b
}
exports.minus = (a,b)=>{
    return a-b
}
exports.gugudan = function(dan){
    let result = '';
    for(var i=2; i<=9; i++){
        result += dan+"*"+i+"="+(dan*i)+"<br/>";
    }
    return result;
}