const bodyTag = document.querySelector("body");
const authorDisplay = document.querySelector(".author_text");
const imagesData = [
  {
    imageClass: 'background0',
    author: 'Martin Damboldt'
  },
  {
    imageClass: 'background1',
    author: 'Pixabay'
  },
  {
    imageClass: 'background2',
    author: 'Pok Rie'
  },
  {
    imageClass: 'background3',
    author: 'Simon Migaj'
  },
  {
    imageClass: 'background4',
    author: 'Thanhhoa Tran'
  }
];

//Manipulates DOM .clocktime to show time
function displayTime() {
  //Date variables, m and s pads with leading 0
  let date = new Date();
  let h = date.getHours();
  let m = String(date.getMinutes()).padStart(2, "0");
  let s = String(date.getSeconds()).padStart(2, "0");

  let theTime = h + ":" + m + ":" + s;

  document.querySelector(".clock_time").textContent = theTime;
}

//Changes background using classes and calls author from object array
function backgroundAndAuthorChanger() {
  let currentClass = bodyTag.classList;
  let objNum = Math.floor(Math.random() * 5);

  // Checks if 'body' has class attribute. If not, adds class, if does replaces
  if (currentClass.value === "") {
    bodyTag.classList.add(imagesData[objNum].imageClass);

    setTimeout(function() {
      authorDisplay.textContent = imagesData[objNum].author;
    }, 1150);

  }
  else {
    bodyTag.classList.replace(currentClass, imagesData[objNum].imageClass);

    setTimeout(function() {
      authorDisplay.innerText = imagesData[objNum].author;
    }, 1150);

  }
}

// Controls the clock, background and author
setInterval(displayTime, 1000);
setInterval(backgroundAndAuthorChanger, 5000);
