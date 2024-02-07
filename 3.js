const target = document.getElementById('target');

let score = 0;

let clicks = 0;

function updateCounters() {
    document.getElementById('score').textContent = score;
    document.getElementById('clicks').textContent = clicks;
}

function clickTarget() {
    score++; 
    clicks++;
    updateCounters();
}

target.addEventListener('click', clickTarget);

setInterval(() => {
    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * (window.innerHeight - 50);
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}, 2000);