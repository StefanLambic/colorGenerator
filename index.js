// Selecting el. from HTML //
const colorContainer = document.getElementById("color");
const newButton = document.getElementById("newBtn");
const symbols = "0123456789ABCDEF";

//let not const because it's changing! //
let color = "";

newButton.addEventListener('click', function() {
  for(var i=0; i<6; i++) {
    color += symbols[Math.floor(Math.random() * 16 )];
  }
  colorContainer.innerHTML = "#" + color;
  document.body.style.background = "#"+color;
  color = "";
});