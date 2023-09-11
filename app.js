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

  // Corrected formattedHrs function
  const formattedHrs = () => {
    const hrStr = String(date.getHours());
    return date.getHours() < 10 ? "0" + hrStr : hrStr;
  };

  const month = months[date.getMonth()];

  let curTime = `${formattedHrs()}:${date.getMinutes()}:${date.getSeconds()}, ${date.getDate()} ${month} ${date.getFullYear()}`;

  time.innerText = curTime;
  setTimeout(showTime, 1000);
}

showTime();
