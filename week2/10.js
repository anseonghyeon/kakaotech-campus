

const mySet = new Set();
mySet.add('value1') // set은 집합이니까 키없이 값만넣음 그리고 값은 유일해야함
mySet.add('value2')
mySet.add('value3')

for(const value of mySet.values()) {
    console.log(value);
}