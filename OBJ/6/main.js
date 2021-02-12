let points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const delFakePoints = (obj) => {
    console.log(typeof undefined === "number")
    obj.forEach((value, index) => {
        if (typeof (obj[index].x) !== 'number' || typeof (obj[index].y) !== 'number') {
            obj.splice(index, index);
        }
    });
}

delFakePoints(points);
console.log(points);
