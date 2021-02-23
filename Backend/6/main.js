const deleteData = async (url) => {
    await fetch(url, {
        method: 'DELETE',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    deleteData('https://merax.herokuapp.com/todo_list/123124353');
});

