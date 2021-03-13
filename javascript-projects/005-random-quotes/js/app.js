(function() {
  //DOM selectors
  const quoteDisplay  = document.querySelector("#quote");
  const authorDisplay = document.querySelector(".quote-author");
  const generateButton = document.querySelector("#generate-btn");

  //Array of 7 quote objects
  const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa"
    },
    {
      quote: "When you reach the end of your rope, tie a knot in it and hang on",
      author: "Franklin D. Roosevelt"
    }
  ];

  //Generates random number at the length of the array to be used as
  //array index
  function randomNumber() {
    return Math.floor(Math.random() * (quotes.length));
  }

  //Event listener that handles #generate-btn and outputs quote and author from object array
  generateButton.addEventListener("click", function() {
    let num = randomNumber();

    quoteDisplay.innerText = quotes[num].quote;
    authorDisplay.innerText = quotes[num].author;
  });
})()
