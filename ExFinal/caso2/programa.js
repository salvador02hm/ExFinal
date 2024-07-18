const colorBtn = document.getElementById('colorBtn');
const colorCodeElement = document.getElementById('colorCode');

colorBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCodeElement.textContent = `Color: ${randomColor}`;
});

function generateRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}