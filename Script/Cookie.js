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
  grandma: new Item("grandma", 10, 1),
  mine: new Item("mine", 100, 10),
};


window.addEventListener("DOMContentLoaded", () => {
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
  console.log(Object.values(upgrades));
  Object.values(upgrades).map((x) =>
    document.getElementById(x.name).addEventListener("click", () => buy(x.name))
  );
  window.setInterval(update, 50);
});
