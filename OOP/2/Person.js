class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get getName() {
        return this.name;
    }

    get getSurname() {
        return this.surname;
    }

    set setName(name) {
        this.name = name;
    }

    set setSurname(surname) {
        this.surname = surname;
    }
}

const worker = new Person('Иван', 'Иванов');

console.log(worker.getName);
console.log(worker.getSurname);
console.log(worker.setName = 'Петр');
console.log(worker.setSurname = 'Петров');
