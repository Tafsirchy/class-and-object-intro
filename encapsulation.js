class Vehicles {
    #tin;
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
        this.#tin = '123456789';
    }

    getTin(){
        return this.#tin;
    }
    getThis() {
        console.log(this);
    }

    getPrice() {
        return this.price;
    }
}

const car1 = new Vehicles('Car','Audi', 15000000);
const car2 = new Vehicles('Car','Marcedes', 25000000);
// car1.getThis();
// car2.getThis();

console.log(car1.price);
console.log(car2.price);
console.log(car1.#tin); // it will not work because it is private property 

// console.log(car1.getPrice());
// console.log(car2.getPrice());\

const student = {
    name: 'Tafsir',
    score: 90,
    getScore: function() {
        console.log(this);
    },
    getScoreArrow: () => {
        console.log(this);
    }
}

// student.getScore();
// student.getScoreArrow();
// console.log('ultimate this', this);