let textWrap = document.getElementById("text");
let speedChoose = document.getElementById("speed");
let index = 0;
let text = "No hugs or Kisses But Only Bags and Kisses";
let timeout = 300 / speedChoose.value;

sliceText();
function sliceText() {
  textWrap.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(sliceText, timeout);
}

speedChoose.onchange = (e) => {
  timeout = 300 / e.target.value;
};
