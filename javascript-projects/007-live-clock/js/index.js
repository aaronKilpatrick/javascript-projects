function displayTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let theTime = h + ":" + m + ":" + s;

  document.querySelector(".clock_time").textContent = theTime;
}

setInterval(displayTime, 1000);
