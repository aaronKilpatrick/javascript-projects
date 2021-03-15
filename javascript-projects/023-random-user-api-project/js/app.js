const generateButton = document.getElementById('btn');

generateButton.addEventListener("click", () => {
  getPerson(getInfo);
})

// Makes a fetch call to API
function getPerson(callback) {
  fetch(('https://randomuser.me/api/'))
 
  .then((response) => {
      return response.json();
    })
  
    .then((data) => {

      getInfo(data, outputInfo);
    })
    
    .catch((error) => {
      console.log(error);
    })
}

// Desctructures response data from API call
function getInfo(response, callback) {
  const {
    name: {first},
    name: {last},
    location: {city},
    phone,
    email
  } = response.results[0];

  
  callback(first, last, city, phone, email);
}

// Manipulates DOM elements with API data
function outputInfo(first, last, city, phone, email) {
  document.getElementById('first').textContent = first;
  document.getElementById('last').textContent = last;
  document.getElementById('street').textContent = city;
  document.getElementById('phone').textContent = phone;
  document.getElementById('email').textContent = email;
}

