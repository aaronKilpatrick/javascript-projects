const userInput = document.querySelector("#str");
const output = document.querySelector("#output");
const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
    const userWord = userInput.value;

    output.innerHTML = `<h2>${String(userWord.length)}</h2>`;
    
})