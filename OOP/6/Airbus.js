const Airplane = require("./Airplane");


class Airbus extends Airplane {
    constructor(model, price, year, numOfTurbine, typeOfAirplane) {
        super(model, price, year, numOfTurbine);
        this.typeOfAirplane = typeOfAirplane;
    }

    getTypeOfAirplane() {
        return this.typeOfAirplane;
    }
}

module.exports = Airbus;
