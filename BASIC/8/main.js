const adminName = 'admin';
const adminPass = 'password';

const verifyAccount = (name, pass) => {
    if (!name && !pass) {
        console.log('Validation Error');
    } else if (name === adminName && pass === adminPass) {
        console.log('Hello');
    } else if (name === adminName && !(pass === adminPass)) {
        console.log('Incorrect password');
    } else if (!(name === adminName) && pass === adminPass) {
        console.log('Incorrect name');
    } else if (!(name === adminName) && !(pass === adminPass)) {
        console.log('Incorrect pass and name');
    } else {
        console.log('Unknown error');
    }
}

verifyAccount('admin', 'password');
verifyAccount('sanea', '2000');
verifyAccount('admin', '2000');
verifyAccount('ss', 'password');
verifyAccount('', '');
