let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let itens = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let firsPosition = 0;
let lastPosition = itens.length - 1; // quantidade de itens - 1 sera a posição ja que começamos a contar do 0

function setSlider() {
  let itemOld = container.querySelector(".list .item.ativo");
  itemOld.classList.remove("ativo"); // removeu a classe ativa 

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

nextButton.onclick = () => {
  list.style.setProperty("--calculation", 1);
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
  itens[active].classList.add("ativo");
};

prevButton.onclick = () => {
  list.style.setProperty("--calculation", -1);
  active = active - 1 < firsPosition ? lastPosition : active - 1;
  setSlider();
  itens[active].classList.add("ativo");
};
