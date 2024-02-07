function animateElements() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    const element3 = document.getElementById('element3');
    element1.style.width = Math.floor(Math.random() * 100) + 'px';
    element1.style.height = Math.floor(Math.random() * 100) + 'px';
    element1.style.backgroundColor = getRandomColor();

    element2.style.width = Math.floor(Math.random() * 100) + 'px';
    element2.style.height = Math.floor(Math.random() * 100) + 'px';
    element2.style.backgroundColor = getRandomColor();

    element3.style.width = Math.floor(Math.random() * 100) + 'px';
    element3.style.height = Math.floor(Math.random() * 100) + 'px';
    element3.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(animateElements, 2000);
