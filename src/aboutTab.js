export default function createHomeTab(container) {
  const heading = document.createElement("h1");
  heading.textContent = "About Us";

  const mama = document.createElement("div");
  mama.classList.add("bear");
  mama.innerHTML = `<h4>Mama Bear</h4>
                       <p>Chef </br>555-555-5554 </br>Totallyrealemain@notfake.com</p>
                       `;
  const papa = document.createElement("div");
  papa.classList.add("bear");
  papa.innerHTML = `<h4>papa Bear</h4>
                       <p>Chef </br>555-555-5554 </br>Totallyrealemain@notfake.com</p>
                       `;
  const baby = document.createElement("div");
  baby.classList.add("bear");
  baby.innerHTML = `<h4>baby Bear</h4>
                       <p>Chef </br>555-555-5554 </br>Totallyrealemain@notfake.com</p>
                       `;
  container.appendChild(heading);
  container.appendChild(mama);
  container.appendChild(papa);
  container.appendChild(baby);
}
