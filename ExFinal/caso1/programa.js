let currentIndex = 0;
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg'
];

const imageElement = document.getElementById('image');
const messageElement = document.getElementById('message');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        imageElement.src = images[currentIndex];
        messageElement.textContent = '';
    } else {
        messageElement.textContent = 'Es el final de las imagenes';
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        imageElement.src = images[currentIndex];
        messageElement.textContent = '';
    } else {
        messageElement.textContent = 'Es el inicio de las imagenes';
    }
});
