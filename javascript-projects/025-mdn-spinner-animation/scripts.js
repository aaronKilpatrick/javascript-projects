const btn = document.querySelector('button');

let buttonCount = (function() {
    let counter = -1;
    return function() {counter += 1; return counter;};
})();

const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime)/3;

    if (rotateCount > 359) {
        rotateCount %= 360;
    }
    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}


btn.addEventListener('click', () => {
    if (buttonCount() % 2 === 0) {
        draw();
    } else {
        cancelAnimationFrame(rAF);
    }
})