let darkID = document.getElementById("dark");
let dBtn = document.getElementById("d-btn");
let lBtn = document.getElementById("l-btn");

let changeDarkLight = () => {
  darkID.classList.toggle("dark");
  // dBtn.classList.toggle('hide');
  // lBtn.classList.toggle('hide');

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
    dBtn.classList.remove("hide");
    lBtn.classList.add("hide");    
  } else {
    localStorage.setItem("theme", "light");
    lBtn.classList.remove("hide");
    dBtn.classList.add("hide");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkID.classList.remove("dark");
  dBtn.classList.add("hide");
  lBtn.classList.remove("hide");
} else if (localStorage.getItem("theme") == "dark") {
  darkID.classList.add("dark");
  lBtn.classList.add("hide");
  dBtn.classList.remove("hide");
} else {
  localStorage.setItem("theme", "light");
  dBtn.classList.add("hide");
  lBtn.classList.remove("hide");
}
