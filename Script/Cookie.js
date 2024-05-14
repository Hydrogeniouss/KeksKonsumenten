class Player {
  cookies = 10000;
  clickmult = 1;
  totalmult = 1;
}
class Item {
  constructor(name, cost, effect) {
    this.name = name;
    this.cost = cost;
    this.effect = effect;
  }
  amount = 0;
}
class Improvement {
  constructor(name, cost, targetObject, targetProperty, effect) {
    this.name = name;
    this.cost = cost;
    this.targetObject = targetObject;
    this.targetProperty = targetProperty;
    this.effect = effect;
    this.bought = false;
  }

  buy() {
    if (this.cost <= player.cookies && !this.bought) {
      player.cookies -= this.cost;
      this.bought = true;
      this.targetObject[this.targetProperty] *= this.effect;
    }
  }
}

const player = new Player();
const upgrades = {
  grandma: new Item("grandma", 10, 1),
  mine: new Item("mine", 100, 10),
  school: new Item("school", 200, 25),
  flowergarden: new Item("flowergarden", 500, 30),
  solarpanels: new Item("solarpanels", 1000, 75),
  artgallery: new Item("artgallery", 5000, 125),
};
const improvements = [
  new Improvement("Better Tools", 500, player, "clickmult", 2),
  new Improvement("Efficient Production", 1000, player, "totalmult", 1.5),
  new Improvement("Advanced Machinery", 1500, player, "totalmult", 3),
  new Improvement("Automation Upgrade", 2000, player, "totalmult", 2.5),
  new Improvement("Research Breakthrough", 750, player, "clickmult", 3),
];

window.addEventListener("DOMContentLoaded", () => {
  //elements
  const cookie = document.getElementById("Cookie");
  const text = document.getElementById("Amount");
  const cps = document.getElementById("CPS");
  const improvementContainer = document.getElementById("improvementContainer");
  //functions

  const update = () => {
    for (const element of Object.keys(upgrades)) {
      player.cookies +=
        ((upgrades[element].amount * upgrades[element].effect) / 20) *
        player.totalmult;
    }

    cps.innerHTML = `Cps ${
      Object.values(upgrades)
        .map((x) => x.amount * x.effect)
        .reduce((a, b) => a + b) * player.totalmult
    }`;
    Object.keys(upgrades).map(
      (x) =>
        (document.getElementById(x).innerHTML = `${upgrades[x].name}: ${
          upgrades[x].amount
        } (${Math.floor(upgrades[x].cost)})`)
    );
    text.innerHTML = `${Math.floor(player.cookies)} Cookies`;
  };
  const buy = (item) => {
    if (player.cookies > upgrades[item].cost) {
      player.cookies -= upgrades[item].cost;
      upgrades[item].cost *= 1.5;
      upgrades[item].amount++;
    }
  };

  const createImpButton = (improvement) => {
    const button = document.createElement("button");
    button.textContent = `${improvement.name} (${improvement.cost})`;
    button.addEventListener("click", () => {
      improvement.buy();
      improvementContainer.removeChild(button);
    });
    return button;
  };
  const appendImp = () => {
    improvements.forEach((improvement) => {
      if (!improvement.bought) {
        const button = createImpButton(improvement);
        improvementContainer.appendChild(button);
      }
    });
  };
  //events
  cookie.addEventListener("click", () => (player.cookies += player.clickmult));
  Object.values(upgrades).map((x) =>
    document.getElementById(x.name).addEventListener("click", () => buy(x.name))
  );
  window.setInterval(update, 50);
  appendImp();
});
