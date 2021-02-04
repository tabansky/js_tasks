const weekDays = {
    'Mo': 'Luni',
    'Tu': 'Marti',
    'We': 'Miercuri',
    'Th': 'Joi',
    'Fr': 'Vineri',
    'Sa': 'Simbata',
    'Su': 'Duminica'

};

function swap(obj) {
    const arr = {};

    Object.keys(obj).forEach(value => {
        const key = obj[value];
        arr[key] = value;
    });

    return arr;
};

console.log(swap(weekDays));
