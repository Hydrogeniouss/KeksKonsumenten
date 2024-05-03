window.addEventListener("DOMContentLoaded", (event) => {
  //elements
  const cookie = document.getElementById("Cookie");
  const text = document.getElementById("Amount");
  //runtime variables
  let cookies = 0;
  //functions
  const update = () => {
    text.innerHTML = `You currently have ${cookies} Cookies`;
  };
  //events
  cookie.addEventListener("click", () => cookies++);
  //loops
  window.setInterval(update, 50);
});
