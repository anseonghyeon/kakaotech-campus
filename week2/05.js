
const person = {
    name: 'John',
    age: 31,
    isMarried: true,
    sayHello: function () {
        console.log('Hello, My name is ~~' + this.name);
        console.log(`Hello, My name is${this.name}`);
    },
    sayBye: () => {
        console.log(`Hello, My name is${this.name}`); // this.name을 하면 undefined가 뜸
        // 에로우 함수는 this를 바인딩하지 않음 그래서 이렇게 쓰면안됨
    }
}