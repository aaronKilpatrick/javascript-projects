//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

const quoteButton = document.querySelector('button');
const quoteOutput = document.querySelector('#quoteOutput');
const authorOutput = document.querySelector('#authorOutput');

quoteButton.addEventListener('click', () => {
    let randomQuote = randomNumber(arrayOfQuotes.length);

    quoteOutput.textContent = `"${arrayOfQuotes[randomQuote].quote}"`;
    authorOutput.textContent = `- ${arrayOfQuotes[randomQuote].author}`;
});

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}