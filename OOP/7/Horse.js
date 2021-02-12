const Animal = require("./Animal");


class Horse extends Animal {
    animalType = 'Лошадь';

    constructor(food, location, animalName) {
        super(food, location);
        this.animalName = animalName;
    }

    makeNoise() {
        return this.animalType + ' ' + this.animalName + ' шумит';
    }
}

module.exports = Horse;
