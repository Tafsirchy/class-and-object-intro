class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age); // calls the constructor of the parent class
        this.breed =breed;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}


class Cat extends Animal{
    constructor(name, color, age) {
        super(name, age); // calls the constructor of the parent class
        this.color =color;
    }

    meow() {
        console.log(`${this.name} is barking`);
    }
}

class Bird extends Animal {
    constructor(name, species, age) {
        super(name, age);
        this.species = species;
    }

    fly() {
        console.log(`${this.name} is flying`);
    }
}

const dog1 = new Dog('Tommy', 'German Shepherd', 4);
console.log(dog1);
dog1.eat();
// dog1.bark();

const cat1 = new Cat('Kitty', 'White', 3);
console.log(cat1);
cat1.eat();
// cat1.meow();

const bird1 = new Bird('Polly', 'Parrot', 2);
console.log(bird1);
bird1.eat();
// bird1.fly();

