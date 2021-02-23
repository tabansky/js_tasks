const div = document.getElementById('result');

const serverResponse = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('server answer');
        }, 2000)
    });
};

const userRequest = async () => {
    div.innerText = 'Waiting for response...';
    const data = await serverResponse();
    console.log(data);
    div.innerText = 'Response from server';
}

document.addEventListener('DOMContentLoaded', () => {
    userRequest();
});
