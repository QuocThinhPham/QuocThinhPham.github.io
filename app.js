const seconds = 1000;
const minute = seconds * 60;
const hour = minute * 60;
const day = hour * 24;

// time to countdown
const countDate = new Date("Feb 12, 2021 00:00:00");

// countdown function
countdown = () => {
  // get time at the moment
  let now = new Date();
  gap = countDate.getTime() - now.getTime();

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let w = Math.floor((gap % minute) / seconds);

  document.querySelector("div#day").innerHTML = d;
  document.querySelector("div#hour").innerHTML = h;
  document.querySelector("div#minute").innerHTML = m;
  document.querySelector("div#seconds").innerHTML = w;
};

setInterval(() => {
    countdown();
}, 1000);
