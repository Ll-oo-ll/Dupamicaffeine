let p = document.querySelectorAll("main p");
let page = document.getElementById("page");
let after = document.getElementById("after");
let befor = document.getElementById("befor");
x = 0;
after.onclick = () => {
  x += 1;
  if (x >= p.length) {
    x = 0;
    location.href = "../html/paiment.html";
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
  p[x].style.display = "block";
  page.textContent = x + 1;
};
befor.onclick = () => {
  x -= 1;
  if (x < 0) {
    location.href = "../html/my projet.html";
  }
  for (let i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
  p[x].style.display = "block";
  page.textContent = x + 1;
};
