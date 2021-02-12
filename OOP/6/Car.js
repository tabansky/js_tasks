const Transport = require("./Transport");


class Car extends Transport {
    constructor(model, price, year, typeOfBody) {
        super(model, price, year);
        this.typeOfBody = typeOfBody;
    }

    getTypeOfBody() {
        return this.typeOfBody;
    }
}

module.exports = Car;
