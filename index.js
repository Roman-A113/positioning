
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
const offset = 5;
setInterval(() => animateProgressBar(), 3000 / (progress_bar.parentElement.offsetWidth / offset));

function animateProgressBar() {
    const currentWidth = parseFloat(getComputedStyle(progress_bar).width);
    const parentWidth = parseFloat(getComputedStyle(progress_bar.parentElement).width);
    const newWidth = Math.min(currentWidth + offset, parentWidth);
    progress_bar.style.width = newWidth + 'px';
}

