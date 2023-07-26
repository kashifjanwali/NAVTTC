function liveClock() {
  const time_now = new Date();

  // Hours
  let hours = time_now.getHours();
  let hours_in_string = hours.toString();
  let pad_hours_string = hours_in_string.padStart(2, "0");

  // Minutes
  let minutes = time_now.getMinutes();
  let minutes_in_string = minutes.toString();
  let pad_minutes_string = minutes_in_string.padStart(2, "0");

  // Seconds
  let seconds = time_now.getSeconds();
  let seconds_in_string = seconds.toString();
  let pad_seconds_string = seconds_in_string.padStart(2, "0");

  let time_in_string = `${pad_hours_string} : ${pad_minutes_string} : ${pad_seconds_string}`;

  document.getElementById("clock").textContent = time_in_string;
}

setInterval(liveClock, 1000);
liveClock();
