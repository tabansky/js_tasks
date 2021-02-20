const div = document.getElementById('result');

const serverResponse = () => {
        const data = 'server answer';
        return data;
};

const userRequest = new Promise((resolve, reject) => {
    div.innerText = 'Waiting for response...';

    setTimeout(() => {
        resolve(serverResponse());
    }, 2000)

});

document.addEventListener('DOMContentLoaded', () => {
   userRequest.then((data) => {
       div.innerText = 'Response from server';
       console.log(data);
   }).catch(err => {
       console.log(err);
   })
});
