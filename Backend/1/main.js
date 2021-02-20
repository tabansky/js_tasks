const div = document.getElementById('json');

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();

    div.innerHTML = JSON.stringify(json);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData('http://localhost:3000/todos');
});
