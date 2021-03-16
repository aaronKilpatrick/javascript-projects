const clock = document.querySelector('.clock');
const startB = document.querySelector('.start');
const stopB = document.querySelector('.stop');
const resetB = document.querySelector('.reset');

// Global interval variable
let stopwatch;

let secondCount = 0;

function displayTimer() {

    // Equate each unit of time
    let hours = Math.floor(secondCount / 3600);
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount % 60);

    // Add leading zero to units
    let displayHours = (hours < 10) ? '0' + hours : hours; 
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    // Output timer to DOM
    clock.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;

    secondCount++;
}

startB.addEventListener('click', () => {
    stopwatch = setInterval(displayTimer, 1000);
    startB.disabled = true;
    stopB.disabled = false;
    resetB.disabled = false;
});

stopB.addEventListener('click', () => {
    clearInterval(stopwatch);
    stopB.disabled = true;
    startB.disabled = false;
});

resetB.addEventListener('click', () => {
    clearInterval(stopwatch);
    secondCount = 0;
    startB.disabled = false;
    displayTimer();
});
