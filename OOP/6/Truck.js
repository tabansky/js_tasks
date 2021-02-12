const Transport = require("./Transport");


class Truck extends Transport {
    constructor(model, price, year, maxTranspWeight) {
        super(model, price, year);
        this.maxTranspWeight = maxTranspWeight;
    }

    getMaxTranspWeight() {
        return this.maxTranspWeight;
    }
}

module.exports = Truck;
