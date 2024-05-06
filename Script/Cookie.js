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
window.addEventListener("DOMContentLoaded", (event) => {
  //elements
  const cookie = document.getElementById("Cookie");
  const text = document.getElementById("Amount");
  //functions
  const update = () => {
    for (const element of Object.keys(upgrades)) {
      player.cookies +=
        (upgrades[element].amount * upgrades[element].effect) / 20;
    }
    text.innerHTML = `You currently have ${Math.floor(player.cookies)} Cookies`;
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

  //loops
  window.setInterval(update, 50);
});
