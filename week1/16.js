
// 1. 배열 기본 생성
let fruits = ["사과","바나나","오렌지"];

// 2. 크기 지정, array 객체로 생성
let number = new Array(5);

console.log(number);
console.log(number.length);

// 3. 배열 요소접근 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 4. 배열의 메소드
fruits.push("오렌지");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift(); // 왼쪽으로 밀어서 첫번째 요소를 지워버림
console.log(fruits);
fruits.unshift("포도") // 오른쪽으로 밀어서 첫번째에 요소를 추가시킴
console.log(fruits);
fruits.splice(1,1,"포도"); // 두 번째 요소를 두번째요소까지 지우고 "포도"를 넣음
console.log(fruits);
let slicedFruits = fruits.slice(1,2); // 두번째요소부터 세번째요소까지 짤라서 새로운 배열을 만듬
console.log(slicedFruits);

// forEach, map, filter, find
let numbers = [1,2,3,4,5];

numbers.forEach(function(item) {
    console.log('item입니다 => ' + item);
}); // 매개변수 자리에 함수를 넣는 것을 콜백함수라고 한다

let newNumbers = numbers.map(function(item) {

    return item * 2;
}); // map함수는 기존의 배열을 가공해서 새로운 배열을 리턴하기때문에 return 필수
console.log(newNumbers);

numbers.filter(function(item) {
    return item === 5
}); // map과 비슷하지만 filter 이름과 걸맞게 return에 적현 조건에 맞는 요소들만 리턴해서 새로운 배열을 만듬

numbers.find(function(item) {
    return item > 3;
}); // filter와 유사하게 조건에맞는것만 리턴, 그러나 조건에맞는 첫번째 한개만 리턴

