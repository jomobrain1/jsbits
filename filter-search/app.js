console.log("jomobrain1");
function filterSearch() {
  let cards = document.querySelectorAll(".card");

  let search_query = document.getElementById("search").value;
  for (var i = 0; i < cards.length; i++) {
    let looped = cards[i].innerText.toLowerCase();

    if (looped.includes(search_query.toLowerCase())) {
      cards[i].classList.remove("is-hidden");
    } else {
      cards[i].classList.add("is-hidden");
    }
  }
}
