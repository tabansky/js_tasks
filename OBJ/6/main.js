const points = [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}];

const delFakePoints = (obj) => {
    return obj.filter((value, index) => typeof (obj[index].x) === 'number' && typeof (obj[index].y) === 'number');
}


console.log(delFakePoints(points));
