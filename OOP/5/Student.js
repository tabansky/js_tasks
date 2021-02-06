const User = require("./User");


class Student extends User {
    currentYear = new Date().getFullYear();
    year;

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        return this.currentYear - this.year;
    }
}

const student = new Student('Иван', 'Иванов', 2018);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
