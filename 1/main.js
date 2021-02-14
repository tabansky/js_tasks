let local_data = {};

const show = (json) => {
    const elem = document.createElement('ul');

    for (const key of Object.keys(json)) {
        if (json[key].length === undefined) {
            for (const key2 of Object.keys(json[key])) {
                const li = document.createElement('li');

                li.innerText = `${key}: {${key2}: ${json[key][key2]}}`;
                elem.appendChild(li);
            }

            continue;
        }

        const li = document.createElement('li');

        li.innerText = `${key}: ${json[key]}`;
        elem.appendChild(li);
    }

    document.body.appendChild(elem);
}

const fetchData = async () => {
    await fetch('data.json')
        .then(response => response.json())
        .then(data => {
            local_data = data;
        });
}



document.addEventListener('DOMContentLoaded', () => {
    fetchData().then(r => show(local_data));
});
