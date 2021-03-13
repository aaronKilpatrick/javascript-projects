const form = document.querySelector("form");
const kiloInput = document.querySelector("#weightInput");
const outputDiv = document.querySelector(".calculatedWeight");

function calculateWeight(kilo) {
    // Error handling
    if (isNaN(kilo)) return "Please enter a numerals only";

    return Math.round(kilo * 2.2);
}

form.addEventListener("submit", (event) => {
    // stops from refreshing page on submit
    event.preventDefault();

    // Answer output
    outputDiv.innerText = String(calculateWeight(kiloInput.value));
})