const person = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`,
};

const person2 = {
    name: `Person 2`,
    age: 124,
    salary: 1542.33,
    contacts: {
        phone: `113`,
        email: 'email2@domain.com'
    },
    address: `Moldova`,
}

const getSameValues = (obj1, obj2) => {
    const arr = {};

    for (const key in obj1) {
        if (obj1[key] === obj2[key]) {
            arr[key] = obj1[key];
        }
    }

    return arr;
}

console.log(getSameValues(person, person2))
