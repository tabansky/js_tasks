const req = {
    title: "8888888",
    body: "688888",
    execution_time: "5645"
}

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const json = await response.json();

    console.log(json)
}

document.addEventListener('DOMContentLoaded', () => {
    postData('https://merax.herokuapp.com/todo_list', req);
});

