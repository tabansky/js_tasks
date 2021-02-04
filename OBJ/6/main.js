let points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const delFakePoints = (obj) => {
    for (const key in obj) {
        if (typeof (obj[key].x) !== 'number' || typeof (obj[key].y) !== 'number') {
            obj.splice(key);
        }
    }
}

delFakePoints(points);
console.log(points);
