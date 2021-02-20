const fetchData = async (url, type = 'POST') => {
    try {
        const response = await fetch(url, {method: type});
        const json = await response.json();

        if (json.errors) {
            throw new Error(json.message);
        }
    } catch (e) {
        console.log(e)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData('https://merax.herokuapp.com/todo_list');
});

