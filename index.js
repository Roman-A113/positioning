
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});


progress_bar = document.querySelector('.progress-bar-inner');
setInterval(() => animateProgressBar(), 10);

function animateProgressBar() {
    const currentWidth = parseFloat(getComputedStyle(progress_bar).width);
    const parentWidth = parseFloat(getComputedStyle(progress_bar.parentElement).width);
    const newWidth = Math.min(currentWidth + 1, parentWidth);
    progress_bar.style.width = newWidth + 'px';
}

