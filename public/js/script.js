const form = document.querySelector("form");
const fechar = document.querySelector("#fechar");

form.addEventListener("submit", () => {
  document.getElementById("popup").style.display = "block";
  setInterval(() => {
    document.getElementById("popup").style.display = "none";
    window.location.href='/#cards'
  }, 5000);  
});

fechar.addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
  window.location.href='/#cards'
});