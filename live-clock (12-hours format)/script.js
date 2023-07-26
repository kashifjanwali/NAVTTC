function liveClock() {
  let time_now = new Date();

  // Hours
  let hours = time_now.getHours();
  let shortHours = hours % 12 || 12;
  hours = shortHours.toString().padStart(2, "0");

  // Minutes
  let minutes = time_now.getMinutes().toString().padStart(2, "0");

  // Seconds
  let seconds = time_now.getSeconds().toString().padStart(2, "0");

  let time;
  if (time_now.getHours() >= 12) {
    time = `${hours} : ${minutes} : ${seconds} PM`;
  } else {
    time = `${hours} : ${minutes} : ${seconds} AM`;
    }
    document.getElementById("clock").textContent = time;
}
setInterval(liveClock, 1000);

liveClock();


let show_date = document.getElementById("year");
let btn = document.getElementById("buton");

function showDate() {
    date_now = new Date();
    let year = date_now.getFullYear();
    let month = date_now.getMonth();
    let date = date_now.getDate();
    month_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for (var i = 1; i <= 12; i++) {
        if (month == i) {
            month = month_arr[i];
        }
    }

    if (btn.textContent === "Click to check year") {
        show_date.textContent = year;
        btn.textContent = "Click to check month"
    }

    else if (btn.textContent === "Click to check month") {
        show_date.textContent = month;
        btn.textContent = "Click to check date";
    }

    else if (btn.textContent === "Click to check date") {
        show_date.textContent = date;
        btn.textContent = "Full Date (dd:mm:yy)";
    }

    else if (btn.textContent === "Full Date (dd:mm:yy)") {
        show_date.textContent = `${date} / ${month} / ${year}`
        btn.textContent = "Refresh"
    }

    else if (btn.textContent === "Refresh") {
        show_date.textContent = "Year";
        btn.textContent = "Click to check year";
    }
}
