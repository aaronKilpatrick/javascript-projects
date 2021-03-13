const buttons = document.querySelector(".buttons");
const body = document.querySelector("body");

function changeBackgroundColour(colour) {
    body.style.backgroundColor = colour;
}

buttons.addEventListener("click", (event) => {
    changeBackgroundColour(event.target.id);
});