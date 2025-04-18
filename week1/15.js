
// 1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
};

// 2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동",30,"남자");
let person2 = new Person("홍길순",20,"여자");

console.log(person.name)

// 3. 객체의 메소드
let keys = Object.keys(person); // person객체의 키값을 리턴하게됨
console.log("keys => ",keys);

let values = Object.values(person); // person객체의 값을 리턴하게됨
console.log("values => ", values);

let entries = Object.entries(person); // 키 벨류를 묶어서 2차원 배열로 반환
console.log("entries => ", entries);

let newPerson = {};
Object.assign(newPerson, person, { gender: "여자"}); // newPerson에 person객체 복사
console.log("newPerson => ", newPerson);

console.log("answer => ", person1 === person2); // person1과 person2가 가리키는 주소를 비교하는것이기 때문에 false라고 출력됨

let str1 = "aaa";
let str2 = "aaa";

console.log("answer2 => ", str1 === str2); // 문자열 값을 비교하는것이기 때문에 true가 출력됨

// ES6에서나온 ... 명령어를 사용하면 객체의 값을 병합가능
let perfectMan = {...person1, ...person2}; // 객체 person1과 person2의 맴버가 병합되서 저장
console.log(perfectMan); 
