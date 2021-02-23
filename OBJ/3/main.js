const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    const newObj = {...obj};
    const keys = Object.keys(newObj);

    for (const key of keys) {
        if (Number(newObj[key])) {
            newObj[key] = newObj[key] * 2;
        }
    }

    return newObj;
}

console.log(multiplyNumeric(menu));
