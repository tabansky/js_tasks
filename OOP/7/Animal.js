class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        return 'животное шумит';
    }

    eat(name) {
        return name + ' ест';
    }

    sleep(name) {
        return name + ' спит';
    }
}

module.exports = Animal;
