
const sayHello = function() {
    console.log('hELLO!');
}

function callFunction(func) {

    func();
}

callFunction(sayHello)

function createAdder(num) {
    return function(x) {
        return x + num;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); 

