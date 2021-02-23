const weekDays = {
    'Mo': 'Luni',
    'Tu': 'Marti',
    'We': 'Miercuri',
    'Th': 'Joi',
    'Fr': 'Vineri',
    'Sa': 'Simbata',
    'Su': 'Duminica'

};

const swap = (obj) => {
    return Object.fromEntries(
        Object
            .entries(obj)
            .map(([key, value]) => [value, key])
    );
}

console.log(swap(weekDays));
