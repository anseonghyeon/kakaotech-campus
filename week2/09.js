
const myMap = new Map();
myMap.set('one',1);
myMap.set('one',2);
myMap.set('one',3);

console.log(myMap.keys()); // 키를 이터레이터로 한번에

// key를 하나하나 출력해줌
for(const key of myMap.keys()) {
    console.log(key);
}

// value를 하나하나 출력해줌
for(const value of myMap.values()) {
    console.log(value);
}

console.log(myMap.entries()); // 키와 값이 배열로 묶이고 그하나하나가 이터레이터 묶여서출력

console.log(myMap.size); // 맵의 사이즈 출력
console.log(myMap.has("two")) // two라는 키가있나? 불리언으로 리턴