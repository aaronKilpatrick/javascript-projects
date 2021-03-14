
const app = document.getElementById('root');

// creating logo img and adding src
const logo = document.createElement('img');
logo.src = 'logo.png';

// Creating main content container and setting class
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Adding the logo and container inside the root div in the DOM
app.appendChild(logo);
app.appendChild(container);

// Fetch connection to Studio Ghilbi Api
fetch('https://ghibliapi.herokuapp.com/films')
    // JSON respone 
    .then((respone) => {
        return respone.json();
    })
    // Working with JSON files
    .then((data) => {


        data.forEach((movie) => {
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // Create a h1 and set the text content to fild name
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // Create a P tag and set the text content to the fild discription
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

    
            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);


        });


    })
    //Error handling
    .catch((error) => {
        console.log(error);
    })