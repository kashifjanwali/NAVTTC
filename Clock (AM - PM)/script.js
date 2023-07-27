function liveClock() {
  let tNow = new Date();

  // get hours from date
  let hrs = tNow.getHours();

  // convert 24-hour format time into 12-hour format time
  let short_hrs = hrs % 12 || 12;

  // convert 12-hour format time into string to apply padStart() method
  let hours = short_hrs.toString().padStart(2, "0");

  // grt minutes from date
  let mins = tNow.getMinutes().toString().padStart(2, "0");

  // get seconds from date
  let secs = tNow.getSeconds().toString().padStart(2, "0");

  // get millis seconds from date
  let mSecs = tNow.getMilliseconds().toString().padStart(3, "0");

  // apllying condition for PM/AM
  let pmAm;
  if (hrs >= 12) {
    pmAm = "PM";
  } else {
    pmAm = "AM";
  }

  let time = `${hours} : ${mins} : ${secs} : ${mSecs} ${pmAm}`;

  document.getElementById("clock").textContent = time;
}

setInterval(liveClock, 1);

liveClock();
