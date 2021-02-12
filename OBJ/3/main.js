const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


const multiplyNumeric = (obj) => {
    const keys = Object.keys(obj);

    for (const key of keys) {
        if (!isNaN(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu)
