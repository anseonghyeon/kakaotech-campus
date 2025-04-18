

// 1. 더하기 연산자
console.log(1 + 1);
console.log(1 + "1");

// 2. 빼기 연산자
console.log(1 - "2");
console.log(1 - 2);

// 3. 곱하기 연산자
console.log(2 * 3);
console.log("2" * 3);

// 4. 나누기 연산자
console.log(4 / 2);
console.log("4" / 2);

// 5. 나누기 나머지 연산자
console.log(5 / 2);
console.log(5 % 2);

// 6. 할당 연산자(대입 연산자)
let x = 10;
console.log(x);

x += 5;
console.log(x);

x -= 5;
console.log(x);

let a = 10;
a *= 2;

console.log(a);

// 비교 연산자
// 일치 연산자(타입까지 일치해야 true를 반환함)

console.log(2 === 2); // true;
console.log("2" === 2); // false;

//불일치 연산자
console.log(2 !== 2); // false;
console.log("2" !== 2); // true;

console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false

// 논리 연산자
// 논리곱 연산자
console.log(true && true);
//논리합 연산자
console.log(true || false);
//논리 부정 연산자
console.log(!false);
console.log(!true);

// 삼항 연산자
let num = 10;
let result = (num > 5) ? "크다" : "작다";
console.log(result);

// 타입 연산자
console.log(typeof "5");