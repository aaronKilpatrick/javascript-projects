function displayTime() {
  let date = new Date();
  let h = date.getHours();
  let m = String(date.getMinutes()).padStart(2, "0");
  let s = String(date.getSeconds()).padStart(2, "0");

  let theTime = h + ":" + m + ":" + s;

  document.querySelector(".clock_time").textContent = theTime;
}

setInterval(displayTime, 1000);
