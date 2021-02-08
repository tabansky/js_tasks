const Transport = require("./Transport");


class Truck extends Transport {
    maxTranspWeight;

    constructor(model, price, year, maxTranspWeight) {
        super(model, price, year);
        this.maxTranspWeight = maxTranspWeight;
    }

    getMaxTranspWeight() {
        return this.maxTranspWeight;
    }
}

module.exports = Truck;
