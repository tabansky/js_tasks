const links =
    [
        'https://www.google.com/', '/about.html', '/contact.html', 'https://www.yandex.ru/', 'https://www.bing.com/',
        '/link/info.html', 'https://www.mail.ru/', '/news.html', 'https://www.youtube.com/', '/bb.html'
    ];

const addLinks = () => {
    for (const link of links) {
        document.querySelector('ul').innerHTML += `<li><a href="${link}" target="_blank">${link}</a></li>`;
    }
};

const setStyles = () => {
    document.querySelectorAll('a').forEach(a => {
        if (a.href.indexOf('https://') !== -1) {
            a.style.color = 'red';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    addLinks();
    setStyles();
});
