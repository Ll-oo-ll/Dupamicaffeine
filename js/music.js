let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
document.body.style.setProperty("--image", localStorage.picture);
let img = document.querySelector(".img");
img.style.backgroundImage = localStorage.picture;
h2.innerText = localStorage.h;
h4.innerText = localStorage.p;
let start = document.getElementById("start");
let stop = document.getElementById("stop");
const audio = document.querySelector("audio");
let h3 = document.querySelector("h3");
let range = document.getElementById("c");
let button = document.querySelector("button");
let right = document.getElementById("right");
let left = document.getElementById("left");
let s = 0;
let count = 0;
let m = 0;
let x;
let timer;
let ayoub = true;
left.onclick = function () {
  location.reload();
};
function sto() {
  ayoub = false;
  clearInterval(timer);
  range.style.animationPlayState = "paused";
}
function time(x) {
  range.style.animationPlayState = "running";

  if (count == 0) {
    timer = setInterval(function () {
      if (ayoub == true) {
        s++;
        if (m == 2 && s == 1) {
          count = 1;
          start.style.display = "block";
          stop.style.display = "none";
          location.reload();
        }
        if (s == 59) {
          s = 0;
          m++;
        }
        if (s < 10) {
          h3.innerText = `0${m}:0${s}`;
        } else if (s >= 10) {
          h3.innerText = `0${m}:${s}`;
        }
      }
    }, x);
  }
}

start.onclick = () => {
  start.style.display = "none";
  stop.style.display = "block";
  range.style.left = "0";
  range.style.animation = "move 121s linear";
  audio.play();
  ayoub = true;
  time(1000);
  img.style.animationPlayState = "running";
};

stop.onclick = function () {
  sto();
  start.style.display = "block";
  stop.style.display = "none";
  audio.pause();
  img.style.animationPlayState = "paused";
};
button.onclick = () => {
  audio.pause();
  location.href = `${localStorage.back}.html`;
};
let a = document.querySelector("a");
a.onclick = function () {
  if (localStorage.back == "index") {
    a.download = `${localStorage.h}-${localStorage.p}(Music)`;
  } else {
    a.download = `${localStorage.h}-${localStorage.p}(${localStorage.back})`;
  }
};
document.title = `${localStorage.h}-${localStorage.p}`;

let root = document.documentElement;
let red;
let black;
if (localStorage.c1 && localStorage.c2) {
  root.style.setProperty("--red", localStorage.c1);
  root.style.setProperty("--black", localStorage.c2);
}

