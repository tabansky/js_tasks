const calcRectangleArea = (width, height) => {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('Wrong parameters type. Only numbers accepted');
    }

    return width * height;
}

try {
    calcRectangleArea('a', 2);
} catch (e) {
    console.log(e.message)
}
