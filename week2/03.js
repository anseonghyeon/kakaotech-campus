// 단축 속성명

const name = "nbc";
const new_age = "30";

const obj = {
    name,
    new_age : age
};

// 배열 전개 구문
let arr = [1,2,3];

let newArr = [...arr,4];
console.log(arr);
console.log(newArr);

// 객체 전개 구문
let user = {
    name: 'nbc',
    age: 30,
}

let user2 = {...user2,};

// 나머지 매개변수
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(args);
}

exampleFunc(1,2,3,4,5,6,7);

// 탬플릿 리터널
console.log(`Hello World ${3 + 3}`);
console.log(`
    Hello
        Hi
            By
    `)
