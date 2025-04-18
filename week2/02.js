
// 배열 구조분해할당
let [value1, value2] = [1,"new"];
console.log("1",value1);
console.log("2",value2);
let arr = ['value1','value2','value3'];
let [a, b, c, d=4] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 객체 구조분해할당
let {name, age} = {
    name: "hbc",
    age: 30,
};
console.log("name => ",name);
console.log("age =>",age);

// 새로운 이름으로 할당 방법
let user = {
    name: 'nbc',
    age: 30,
};

let {
    name: newName,
    age: newAge,
    birthday = "today"
} = user;

console.log(birthday);
