const root = document.documentElement;
const btn = document.getElementById('theme');

root.dataset.theme = localStorage.getItem('theme') || 'light';

function icon() {
    btn.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙';
}

icon();

btn.onclick = function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', root.dataset.theme);
    icon();
};

const rot = document.querySelector('.rot');
const words = rot.dataset.words.split(',');
let i = 0;

setInterval(function () {
    rot.classList.add('out');
    setTimeout(function () {
        i = (i + 1) % words.length;
        rot.textContent = words[i];
        rot.classList.remove('out');
    }, 400);
}, 2400);