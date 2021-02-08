const Animal = require("./Animal");


class Cat extends Animal {
    animalType = 'Кот';
    animalName;

    constructor(food, location, animalName) {
        super(food, location);
        this.animalName = animalName;
    }

    makeNoise() {
        return this.animalType + ' ' + this.animalName + ' шумит';
    }
}

module.exports = Cat;
