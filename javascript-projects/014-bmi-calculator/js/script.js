// DOM selectors
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const resultsDiv = document.querySelector("#results");

// Makes sure inputs are not NaN and then returns calculated BMI
function calculateBMI(height, weight) {
    // Error handling
    const errorMessage = "Please enter numbers only";
    if (isNaN(height)) return errorMessage;
    if (isNaN(weight)) return errorMessage;

    // Calculation
    return (weight / Math.pow(height, 2)).toFixed(2);
}

document.addEventListener("submit", (event) => {
    // Stop refresh when submitting
    event.preventDefault();

    // Pulling inputs and converting to floats
    const metresMultiplier = 100;
    const heightMetres = parseFloat(heightInput.value) / metresMultiplier;
    const weight = parseFloat(weightInput.value);

    const BMI = calculateBMI(heightMetres, weight);

    // Update DOM with results 
    resultsDiv.textContent = String(BMI);
})

