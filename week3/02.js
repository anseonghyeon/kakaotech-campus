class Car{

    constructor(modelName,modelYear,type,price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(this.modelName + "삥빵"); // this를 안적어주면 this바인딩이 global이 되기때문에 this를 적어서 이 객체의 modelName을 가져와야한다?
    }
}

const car1 = new Car('아반떼','2000','승용차','100$');
const car2 = new Car('소나타','2010','승용차','300$');
const car3 = new Car('그랜저','2020','승용차','500$');

car1.makeNoise();
