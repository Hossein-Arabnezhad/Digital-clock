function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let sessoin = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h -= 12;
    sessoin = "PM";
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  let time = `${h}:${m}:${s} ${sessoin}`;

  document.querySelector(".clock").innerText = time;
}

setInterval(showTime, 1000);
