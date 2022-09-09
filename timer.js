const endDate = new Date(2022, 9, 1, 23, 59, 59, 999);
let daysElement = document.getElementById("days");
let hoursElement = document.getElementById("hours");
let minutesElement = document.getElementById("minutes");
let secondsElement = document.getElementById("seconds");

function updateCountdown(){
  let currDate = new Date();
  let timeLeft = endDate.getTime() - currDate.getTime();

  let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysElement.innerHTML = daysLeft;
  hoursElement.innerHTML = hoursLeft;
  minutesElement.innerHTML = minutesLeft;
  secondsElement.innerHTML = secondsLeft;
}

updateCountdown();
setInterval(updateCountdown, 1000);
