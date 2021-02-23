const name = prompt('Enter your name: ');

alert(`Hello ${name}`);

const answer = confirm('Do you know JS?');

if (answer) {
    alert('Nice!');
} else {
    alert('You can start studying right now!');
}
