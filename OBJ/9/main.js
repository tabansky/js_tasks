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
    const result = {};

    Object.keys(obj).forEach(value => {
        const key = obj[value];
        result[key] = value;
    });

    return result;
}

console.log(swap(weekDays));
