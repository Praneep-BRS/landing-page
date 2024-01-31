function displayTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // Convert hours to 12-hour format
  const twelveHourFormat = hours % 12 || 12;
  // Determine AM or PM
  const period = hours >= 12 ? "PM" : "AM";
  const displayString = document.getElementById("date-string");
  displayString.innerText = "";
  displayString.innerText = `${twelveHourFormat}:${String(minutes).padStart(
    2,
    "0",
  )}:${String(seconds).padStart(2, "0")} ${period}`;
}
function setBackground() {
  const bgURL = [
    "assets/images/landing-bg-1.jpg",
    "assets/images/landing-bg-2.jpg",
    "assets/images/landing-bg-3.jpg",
    "assets/images/landing-bg-4.jpg",
    "assets/images/landing-bg-5.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * bgURL.length);
  const background = document.querySelector(".bg");

  // Add linear gradient on top of the background image
  background.style.backgroundImage = ` url(${bgURL[randomIndex]}),linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`;
}
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary_color", theme);
}
setBackground();
setInterval(displayTime, 1000);
