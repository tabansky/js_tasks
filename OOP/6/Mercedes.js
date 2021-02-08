const Car = require("./Car");

class Mercedes extends Car {
    mark;

    constructor(model, price, year, typeOfBody, mark) {
        super(model, price, year, typeOfBody);
        this.mark = mark;
    }

    getMark() {
        return this.mark;
    }
}
