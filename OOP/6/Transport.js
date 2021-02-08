class Transport {
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
        return new Date().getFullYear() - this.year;
    }

    getMovement() {
        return this.model + ' движется';
    }
}

module.exports = Transport;
