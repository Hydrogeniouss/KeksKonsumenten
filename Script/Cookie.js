class Player {
  cookies = 0;
}
class Item {
  constructor(name, cost, effect) {
    this.name = name;
    this.cost = cost;
    this.effect = effect;
  }
  amount = 0;
}

const player = new Player();
const upgrades = {
  grandma: new Item("Grandma", 10, 1),
  mine: new Item("Mine", 100, 10),
};

// Button Animation
const buttonClick = (event) => {
  const button = event.target;
  console.log(event);
  button.classList.add("enlarged");
  setTimeout(() => {
    button.classList.remove("enlarged");
  }, 3000); // Adjust the time (in milliseconds) as needed
};

window.addEventListener("DOMContentLoaded", () => {
  // Button Animation
  Array.from(document.getElementsByClassName("buttonsUpgrade")).forEach((x) => {
    x.addEventListener("click", buttonClick);
  });
  //elements
  const cookie = document.getElementById("Cookie");
  const text = document.getElementById("Amount");
  const cps = document.getElementById("CPS");
  //functions

  const update = () => {
    for (const element of Object.keys(upgrades)) {
      player.cookies +=
        (upgrades[element].amount * upgrades[element].effect) / 20;
    }

    cps.innerHTML = `Cps ${Object.values(upgrades)
      .map((x) => x.amount * x.effect)
      .reduce((a, b) => a + b)}`;
    text.innerHTML = `${Math.floor(player.cookies)} Cookies`;
  };
  const buy = (item) => {
    if (player.cookies > upgrades[item].cost) {
      player.cookies -= upgrades[item].cost;
      upgrades[item].cost *= 1.5;
      upgrades[item].amount++;
    }
  };
  //events
  cookie.addEventListener("click", () => player.cookies++);
  document
    .getElementById("Grandma")
    .addEventListener("click", () => buy("grandma"));
  document.getElementById("Mine").addEventListener("click", () => buy("mine"));
  -(
    //loops
    window.setInterval(update, 50)
  );
});
