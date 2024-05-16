const texts = [
  "Find the Imposter",
  "Find the sussy baka",
  "Find the sussus amogus",
  "sus sus",
  "amogus",
  "Who is Amposta"
];

const main = () => {
  const audio = new Audio("../Assets/amogus.mp3");
  document.addEventListener("mouseover", () => audio.play());

  document.getElementById("text").innerHTML =
    texts[Math.floor(Math.random() * texts.length)];

  const container = document.getElementById("amogiContainer");
  for (let i = 0; i < 10; ++i) {
    const button = document.createElement("button");
    button.classList.add("amogus");
    container.appendChild(button);
  }
  const imposter = Array.from(document.getElementsByClassName("amogus"))[
    Math.floor(Math.random() * 10)
  ];
  imposter.addEventListener("click", () => {
    document.getElementById("victory").innerHTML = "You win!";
  });
};

document.addEventListener("DOMContentLoaded", main);
