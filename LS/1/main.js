const text = document.getElementById('text');

document.addEventListener('DOMContentLoaded', () => {
    text.value = localStorage.getItem('textArea');

    text.addEventListener('input', () => {
       localStorage.setItem('textArea', text.value);
    });
})
