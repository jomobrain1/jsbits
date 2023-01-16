const outer = document.querySelectorAll(".outer");
const inner = document.querySelector(".inner");

inner.ondragstart = (event) => {
  console.log("start");

  setTimeout(() => (event.target.className = "hide"), 0);
};
inner.ondragend = (e) => {
  console.log("end");
  e.target.className = "inner";
};

console.log(outer);

outer.forEach((out) => {
  out.ondragover = (e) => {
    e.preventDefault();
    console.log("drag over");
  };
  out.ondragenter = (e) => {
    e.preventDefault();
    e.target.className+=" enter"
    console.log("drag enter");
  };
  out.ondragleave = (event) => {
    event.target.className="outer"
    console.log("drag leave");
  };
  out.ondrop = (e) => {
    e.target.className="outer"
    e.target.append(inner)
    console.log("drag dropppppppp");
  };
});
