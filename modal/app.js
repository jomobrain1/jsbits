console.log("jomobrain1");

let modal = document.querySelector(".modal");
let button = document.querySelector(".button");
let cancel = document.querySelector(".cancel-modal");

button.onclick = () => {
  modal.classList.toggle("top");
};

cancel.onclick = () => {
  modal.classList.toggle("top");
};
