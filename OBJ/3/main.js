let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu)
