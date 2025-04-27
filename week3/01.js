
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`${this.name}님 안녕하세요!`);
    }

    sayAge() {
        console.log(`내 나이는 ${this.age}살이에요!`)
    }
}

const person1 = new Person("홍길동","30");
const person2 = new Person("홍길순",25);

person1.sayHello();
person2.sayHello();