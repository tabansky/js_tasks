const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (const num in arr) {
    console.log(arr[num]);
}

for (const num of arr) {
    console.log(num);
}

arr.forEach(num => console.log(num));

arr.map(num => console.log(num));

const printArray = (list, index = 0) => {
    if (index === list.length) {
        return;
    }
    console.log(list[index]);
    printArray(list, index + 1);
}

printArray(arr);