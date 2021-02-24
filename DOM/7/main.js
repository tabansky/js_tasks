const links =
    [
        'https://www.google.com/', '/about.html', '/contact.html', 'https://www.yandex.ru/', 'https://www.bing.com/',
        '/link/info.html', 'https://www.mail.ru/', '/news.html', 'https://www.youtube.com/', '/bb.html'
    ];

const addLinks = () => {
    for (const link of links) {
        document.querySelector('ul').innerHTML +=
            `<li>
                <a href="${link}" style="color: ${link.includes('https://') ? 'red' : ''}" target="_blank">${link}</a>
            </li>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    addLinks();
});
