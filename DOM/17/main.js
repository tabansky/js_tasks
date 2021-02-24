const elem = document.getElementById('elem');

document.addEventListener('DOMContentLoaded', () => {
    elem.addEventListener('click', (e) => {
        elem.style.width = `${parseInt(e.target.style.width) * 2}px`;
        elem.style.height = `${parseInt(e.target.style.height) * 2}px`;

        console.log(elem.style.width);
        console.log(elem.style.height);
    })
});
