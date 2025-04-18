// 반복문

for(let i = 0; i < 10; i++) {
    console.log(i);
}

const arr = ["one","two","three","four","five"];

for(let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

for(let i = 2; i < 11; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// for ~ in문, 객체의 속성을 출력하는 문법
let person = {
    name: "John",
    age: 30,
    gender: "male",
};

for(let key in person) {
    console.log(key + ": " + person[key])
}