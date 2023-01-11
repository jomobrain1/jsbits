console.log("jomobrain1");
let compileBtn = document.getElementById("compile-btn");
let output = document.getElementById("output").contentWindow.document;
let htmlCode = document.getElementById("html-code");
let cssCode = document.getElementById("css-code");
let css = document.getElementById("css-code");
let jsCode = document.getElementById("js-code");
let style = document.getElementById("style");


compileBtn.onclick = () => {

  output.open();
  output.writeln(
    htmlCode.value +
      "<style>" +
      cssCode.value +
      "</style>" +
      "<script>" +
      jsCode.value +
      "</script>"
  );
  output.close();

  window.scrollTo({
    top: 650,
    left: 0,
    behavior: "smooth",
  });
};

//  animation on entering code boxes
let code = document.querySelectorAll(".code");
let expandHtml = document.querySelector(".expand-html");
let expandCss = document.querySelector(".expand-css");
let expandJs = document.querySelector(".expand-js");
let expandOut = document.querySelector(".expand-output");
let codeBoxes = document.querySelectorAll(".codes-box> *");
let count = 0;
let htmlbox = document.querySelector(".html-box");
let jsbox = document.querySelector(".js-box");
let cssbox = document.querySelector(".css-box");

expandHtml.onclick = () => {
  jsbox.classList.remove("min-width");
  cssbox.classList.remove("min-width");
  htmlbox.classList.toggle("min-width");
};
expandJs.onclick = () => {
  htmlbox.classList.remove("min-width");
  cssbox.classList.remove("min-width");
  jsbox.classList.toggle("min-width");
};
expandCss.onclick = () => {
  htmlbox.classList.remove("min-width");
  jsbox.classList.remove("min-width");
  cssbox.classList.toggle("min-width");
};

// animating code boxes and hiding others
let eyeHtml = document.querySelector(".eye-html");
let eyeCss = document.querySelector(".eye-css");
let eyeJs = document.querySelector(".eye-js");
eyeHtml.onclick = () => {
  expandHtml.classList.toggle("hide");
  htmlbox.classList.toggle("max-width");
  jsbox.classList.toggle("hide");
  cssbox.classList.toggle("hide");
};

eyeCss.onclick = () => {
  expandCss.classList.toggle("hide");
  cssbox.classList.toggle("max-width");
  jsbox.classList.toggle("hide");
  htmlbox.classList.toggle("hide");
};

eyeJs.onclick = () => {
  expandJs.classList.toggle("hide");
  jsbox.classList.toggle("max-width");
  cssbox.classList.toggle("hide");
  htmlbox.classList.toggle("hide");
};

let htmllink = document.querySelector(".html-link");
let csslink = document.querySelector(".css-link");
let jslink = document.querySelector(".js-link");
htmllink.onclick = (e) => {
  e.preventDefault();
  htmlbox.classList.remove("hide");
  cssbox.classList.remove("hd");
  jsbox.classList.remove("hd");
  jsbox.classList.add("hide");
  cssbox.classList.add("hide");
};

csslink.onclick = (e) => {
  e.preventDefault();
  cssbox.classList.remove("hide");
  cssbox.classList.remove("hd");
  jsbox.classList.add("hide");
  htmlbox.classList.add("hide");
};
jslink.onclick = (e) => {
  e.preventDefault();
  jsbox.classList.remove("hide");
  jsbox.classList.remove("hd");
  cssbox.classList.add("hide");
  htmlbox.classList.add("hide");
};
