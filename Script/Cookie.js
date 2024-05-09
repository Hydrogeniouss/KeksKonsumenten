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
  school: new Item("school", 1000, 10),
};
const improvements = [new Improvement("We win", 1000, player, "totalmult", 2)];

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
    button.addEventListener("click", () => improvement.buy());
    return button;
  };
  const appendImp = () => {
    improvementContainer.innerHTML = "";
    improvements.forEach((improvement) => {
      if (!improvement.bought) {
        const button = createImpButton(improvement);
        improvementContainer.appendChild(button);
      }
    });
  };
  //events
  cookie.addEventListener("click", () => player.cookies++);
  Object.values(upgrades).map((x) =>
    document.getElementById(x.name).addEventListener("click", () => buy(x.name))
  );
  window.setInterval(update, 50);
  window.setInterval(appendImp, 1000);
});
