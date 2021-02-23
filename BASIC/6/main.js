const data = Number(prompt('Введите число: '));

if (data > 0) {
    alert('1');
} else if (data < 0) {
    alert('-1');
} else if (data === 0) {
    alert('0');
} else {
    alert('Error');
}