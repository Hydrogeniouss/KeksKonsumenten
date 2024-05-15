const main = () => {
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
    console.log("you win!");
  });
};

document.addEventListener("DOMContentLoaded", main);
