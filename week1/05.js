
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

// 문자열로 묵시적형변환됨
let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// 빼기는 빼기로 처리됨
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

// 곱하기도 정수곱하기로 적용됨
let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// 명시적 형변환
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

// 스트링타입으로 명시적 형변환됨
console.log(String(123));

let result10 = Number("123");
console.log(result10);
console.log(typeof result10);



