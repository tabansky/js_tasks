const req = {
    title: "8888888",
    body: "688888",
    execution_time: "5645"
}

const putData = async (url, data) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();

    console.log(json)
}

document.addEventListener('DOMContentLoaded', () => {
    putData('https://merax.herokuapp.com/todo_list/123124341', req);
});

