"use strict";

const time = document.querySelector(".time");

function showTime() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const month = months[date.getMonth()];
  let curTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${date.getDate()} ${month} ${date.getFullYear()}`;
  time.textContent = curTime;
  time.innerText = curTime;
  setTimeout(showTime, 1000);
}
showTime();
