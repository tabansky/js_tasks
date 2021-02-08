const Truck = require("./Truck");


class Man extends Truck {
    mark;

    constructor(model, price, year, maxTranspWeight, mark) {
        super(model, price, year, maxTranspWeight);
        this.mark = mark;
    }

    getMark() {
        return this.mark;
    }
}
