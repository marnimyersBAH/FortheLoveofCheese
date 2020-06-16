console.log("JS Loaded!");

//Really have very little idea what I'm doing here. I've copy-pasted and then edited code from a previous codepen we did in class. It's not working but I'm not sure why or what another solution is. Will continue to work on it.

const openPopup1 = document.getElementById("openPopup1");
const popup = document.getElementsByClassName("cheese-popup")[0];
const closePopup = document.getElementById("close-popup");

openPopup1.addEventListener("click", function() {
  popup.classList.add("popup-open");
});

closePopup.addEventListener("click", function() {
  popup.classList.remove("popup-open");
});
