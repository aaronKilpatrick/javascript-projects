const weekday = document.querySelector('#weekday');
const quote = document.querySelector('#phrase');
const dayInfo = [{
    day: "Sunday",
    quote: "The weekend almost over"
}, 
{
    day: "Monday",
    quote: "Have a marvelous Monday!"
},
{
    day: "Tuesday",
    quote: "Have a terrific Tuesday."
},
{
    day: "Wednesday",
    quote: "Hump day isn't what you think it means"
},
{
    day: "Thursday",
    quote: "Friday is almost here"
},
{
    day: "Friday",
    quote: "Weekend here you come"
},
{
    day: "Saturday",
    quote: "Waste today playing cricket"
}];

function displayInformation() {
    let d = new Date();
    let theDay = d.getDay();
    
    weekday.textContent = dayInfo[theDay].day;
    quote.textContent = dayInfo[theDay].quote;
}


displayInformation()
