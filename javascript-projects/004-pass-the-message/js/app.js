( function() {
  const messageInput = document.getElementById("message"); //input textbox
  const messageOutput = document.querySelector(".message-content"); //output to message-content
  const submit    = document.getElementById("submitBtn"); //submit button
  const feedback  = document.querySelector(".feedback"); //feedback error heading

  submit.addEventListener("click", function(event) {
    // Prevents submit from reloading page
    event.preventDefault();
    //stores input text as variable
    var message = messageInput.value;

    //Makes sure message isn't blank
    //if it is, will show heading with class .feedback
    if (message === '') {
      feedback.classList.add("show");
      setTimeout(function() {
        feedback.classList.remove("show")}, 2000);
    }
    else
      messageOutput.innerText = message;
  });
} )();
