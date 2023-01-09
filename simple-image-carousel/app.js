console.log("jomobrain1");

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imageBoxes = document.querySelectorAll("#image-box");

let index = 0;

next.onclick = () => {
  index++;

  imageBoxes.forEach((box) => {
    box.style.transform = `translateX(-${index * 700}px)`;
  });

  if (index > imageBoxes.length - 1) {
    imageBoxes.forEach((box) => {
      box.style.transform = `translateX(-${0 * 700}px)`;
    });
    index = 0;
  }
};

prev.onclick = () => {
  index--;
  if (index < 0) {
    index = imageBoxes.length - 1;
  }
  imageBoxes.forEach((box) => {
    box.style.transform = `translateX(-${index * 700}px)`;
  });
};
