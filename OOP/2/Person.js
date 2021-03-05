class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    set name(name) {
        this._name = name;
    }

    set surname(surname) {
        this._surname = surname;
    }
}

const worker = new Person('Иван', 'Иванов');

console.log(worker.name);
console.log(worker.surname);
console.log(worker.name = 'Петр');
console.log(worker.surname = 'Петров');
