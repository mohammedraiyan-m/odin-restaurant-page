console.log("javascript");

import homeTab from "./homeTab";
import aboutTab from "./aboutTab";
import menuTab from "./menuTab";
import "./style.css";
loadPage(homeTab);

document.getElementById("home-btn").addEventListener("click", () => {
  loadPage(homeTab);
});
document.getElementById("menu-btn").addEventListener("click", () => {
  loadPage(menuTab);
});
document.getElementById("about-btn").addEventListener("click", () => {
  loadPage(aboutTab);
});

function loadPage(tapFunction) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";
  tapFunction(contentDiv);
}
