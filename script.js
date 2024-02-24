const btnIncrement = document.querySelector('.increase');
const btnDecrement = document.querySelector('.decrease');
const displayResult = document.querySelector('.result');

let clickCount = 0;

btnIncrement.addEventListener('click', function () {
    clickCount++;
    displayResult.textContent = clickCount;
})


btnDecrement.addEventListener('click', function () {
    clickCount--;
    displayResult.textContent = clickCount;
})