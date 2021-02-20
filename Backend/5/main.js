const req = {
    title: "Hello",
    body: "Justin",
    execution_time: "123"
}

const patchData = async (url, data) => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();

    console.log(json)
}

document.addEventListener('DOMContentLoaded', () => {
    patchData('https://merax.herokuapp.com/todo_list/123124341', req);
});

