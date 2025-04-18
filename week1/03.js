// 문자열 길이확인
let str = "Hello World!";
console.log(str);
console.log(typeof str);
console.log(str.length);

// 문자열 병합
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result);

// 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7,5)); // 인덱스 8부터 + 5까지
console.log(str3.slice(7,12));

// 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World"));

// 문자열 변환
let str5 = "Hello, World!";
let result01 = str5.replace("World", "Javascript");
console.log(result01);

// 문자열 슬라이스
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02);
