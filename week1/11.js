
// 1. if문
let x = 10;

if(x > 0) {
    console.log("x는 양수입니다.");
}

// 1-2
let y = "hello world";

if(y.length >= 5) {
    console.log(y.length);
}

if(x > 0) {
    console.log("x는 양수입니다.");
} else {
    console.log("x는 음수입니다.");
}

if(x < 0) {
    console.log("1");
} else if(x >= 0 && x < 10) {
    console.log("2");
} else {
    console.log("3");
}

// 2. switch문

let fruit = "사과";

switch(fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "banana":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다");
        break;
}