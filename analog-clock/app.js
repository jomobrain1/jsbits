var hour = document.getElementById("hr");
var minute = document.getElementById("min");
var seconds = document.getElementById("sec");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let daynum = document.querySelector(".daynum");
let time_hr = document.querySelector(".time_hr");
let time_min = document.querySelector(".time_min");
let time_sec = document.querySelector(".time_sec");
let ampm = document.querySelector(".ampm");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartuday",
];

var addClock = setInterval(function clock() {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();

  let calc_hr = hr * 30 + min / 2;
  let calc_min = min * 6;
  let calc_sec = sec * 6;

  hour.style.transform = "rotate(" + calc_hr + "deg)";
  minute.style.transform = "rotate(" + calc_min + "deg)";
  seconds.style.transform = "rotate(" + calc_sec + "deg)";
}, 1000);

window.onload = () => {
  console.log("jomobrain");
  getTime();
};

function getTime() {
  let today = new Date();

  let mon = today.getMonth();
  let dy = today.getDay();
  let dynum = today.getDate();

  month.innerText = months[mon];
  day.innerText = days[dy];
  daynum.innerText = dynum;
}

setInterval(() => {
  const d = new Date();
  const seconds = d.getSeconds();
  const min = d.getMinutes();
  const hr = d.getHours();
  var session = "PM";

  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }
  function showtime() {
    time_hr.innerHTML = hr + " : ";
    time_sec.innerHTML = seconds;

    if (min < 10) {
      time_min.innerHTML = " 0 " + min + " : ";
    } else {
      time_min.innerHTML = min + " : ";
    }
    ampm.innerHTML = session;
  }
  showtime();
}, 1000);
