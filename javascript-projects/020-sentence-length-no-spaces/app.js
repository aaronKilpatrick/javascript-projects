const userInput = document.querySelector("#str");
const output = document.querySelector("#output");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    let inputValue = userInput.value;
    let cleanedInput = inputValue.replace(/\s/g, '');

    output.innerHTML = `<h2>${String(cleanedInput.length)}</h2>`;
})