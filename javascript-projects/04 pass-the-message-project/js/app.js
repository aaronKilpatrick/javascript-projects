( function() {
  const MESSAGE_I = document.getElementById("message"); //input textbox
  const MESSAGE_O = document.querySelector(".message-content"); //output to message-content
  const SUBMIT    = document.getElementById("submitBtn"); //submit button
  const FEEDBACK  = document.querySelector(".feedback"); //Feedback error heading

  SUBMIT.addEventListener("click", function(event) {
    // Prevents submit from reloading page
    event.preventDefault();
    //stores input text as variable
    var message = MESSAGE_I.value;

    //Makes sure message isn't blank
    //if it is, will show heading with class .feedback
    if (message === '') {
      FEEDBACK.classList.add("show");
      setTimeout(function() {
        FEEDBACK.classList.remove("show")}, 2000);
    }
    else
      MESSAGE_O.innerText = message;
  });
} )();

