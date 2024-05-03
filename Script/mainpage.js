//Copypasta, mit einer Priese Eigenarbeit.
//seeehr inperformant
setInterval(updateRainbowTxt, 200);
function updateRainbowTxt() {
  var elements = document.getElementsByClassName("fun");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
}
function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = getRandomColor();
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
