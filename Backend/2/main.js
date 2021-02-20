const fetchData = async (url, type = 'GET') => {
    const response = await fetch(url, {method: type});
    const json = await response.json();

    console.log(json)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData('https://merax.herokuapp.com/todo_list');
    fetchData('https://merax.herokuapp.com/todo_list/123124341');
});

