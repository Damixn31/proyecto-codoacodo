const time = document.getElementById("time");
const date = document.getElementById("date");

const mountNames = [
  "January",
  "Febrery",
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

const interval = setInterval(() => {
  const local = new Date();
  let day = local.getDate(),
    month = local.getMonth(),
    year = local.getFullYear();

  time.innerHTML = local.toLocaleTimeString();
  date.innerHTML = `${day} ${mountNames[month]} ${year}`;
}, 1000);
