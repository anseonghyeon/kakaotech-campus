
// 1. 함수 선언문
function add(x, y) {
    let result = x + y;

    return result;
}

// 2. 함수 표현식
let add2 = function(x, y) {
    return x + y;
}

// 함수 호출
let result = add(2, 3);
console.log(result);

// input : 함수의 input -> 매개변수
// output : return문 뒤에 오는 값 : 반환값
