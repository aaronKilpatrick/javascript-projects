const output = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke");


button.addEventListener("click", () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        output.textContent = data.value;
    })

    .catch((error) => {
        console.log(error);
    })
})
