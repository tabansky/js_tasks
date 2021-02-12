const Transport = require("./Transport");


class Airplane extends Transport {
    constructor(model, price, year, numOfTurbine) {
        super(model, price, year);
        this.numOfTurbine = numOfTurbine;
    }

    getNumOfTurbine() {
        return this.numOfTurbine;
    }
}

module.exports = Airplane;
