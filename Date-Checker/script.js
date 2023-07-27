function dayChecker() {

  let targeted_days = document.getElementById("targeted_days").value;

  // Converts input numbers into integer
  let daysToAdd = parseInt(targeted_days);

  // get Date object
  let currentDate = new Date();

  // Add random days to the current date
  currentDate.setDate(currentDate.getDate() + daysToAdd);

  let date_to_show = document.getElementById("display_date");

  let btn = document.getElementById("showDate");

  if (btn.textContent === "Click to check") {
    date_to_show.textContent = currentDate;
    btn.textContent = "Refresh";
  }

  else if (btn.textContent === "Refresh") {
    date_to_show.textContent = "Check Current / Future / Past Date";
    btn.textContent = "Click to check";
  }
}
