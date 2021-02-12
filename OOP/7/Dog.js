const Animal = require("./Animal");


class Dog extends Animal {
    animalType = 'Собака';

    constructor(food, location, animalName) {
        super(food, location);
        this.animalName = animalName;
    }

    makeNoise() {
        return this.animalType + ' ' + this.animalName + ' шумит';
    }

    eat() {
        return super.eat(this.animalName);
    }

    sleep() {
        return super.sleep(this.animalName);
    }
}

module.exports = Dog;
