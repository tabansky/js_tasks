const Airbus = require("./Airbus");


class Boeing extends Airbus {
    constructor(model, price, year, numOfTurbine, typeOfAirplane, mark) {
        super(model, price, year, numOfTurbine, typeOfAirplane);
        this.mark = mark;
    }

    getMark() {
        return this.mark;
    }
}


const boeing = new Boeing('rs34', 300000, 2008, 4, 'passager', 'boeing')


console.log(boeing.getAge());
console.log(boeing.getMovement())
