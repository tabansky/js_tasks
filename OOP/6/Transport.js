class Transport {
    currentYear = new Date().getFullYear();
    model;
    price;
    year;

    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    }

    getModel() {
        return this.model;
    }

    getAge() {
        return this.currentYear - this.year;
    }

    getMovement() {
        return 'хз что!'
    }
}

module.exports = Transport;
