const Dog = require("./Dog");
const Cat = require("./Cat");
const Horse = require("./Horse");


class Veterinarian {
    constructor() {
    }

    static treatAnimal(animal) {
        console.log(animal.animalName, animal.food, animal.location);
    }
}

const animals = [
    new Dog('кости', 'улица', 'Рэкс'), new Horse('воздух', 'крыша дома', 'Плотва'), new Cat('корм', 'дом', 'Барсик')
];

for (const animal of animals) {
    Veterinarian.treatAnimal(animal);
}

console.log(animals[0].sleep())

