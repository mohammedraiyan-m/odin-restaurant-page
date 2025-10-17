import RestaurantImage from "./image.jpg";

export default function createHomeTab(container) {
  const schedule = document.createElement("h1");
  schedule.classList.add("bar");
  schedule.textContent = "TOP RESTAURANT";

  const img = document.createElement("img");
  img.classList.add("imgshope");
  img.src = RestaurantImage;

  container.append(img);

  const hours = document.createElement("div");

  hours.innerHTML = `<h2 class = "hours">Hours</h2>
                   <p>Sunday: 8am - 8pm</p>
                   <p>Monday: 6am - 6pm</p> 
                   <p>Tuesday: 6am - 6pm</p>
                   <p>Wednesday: 6am - 6pm</p>
                   <p>Thursday: 6am - 10pm</p>
                   <p>Friday: 6am - 10pm</p>
                   <p>Saturday: 8am - 10pm</p>
                   `;

  const location = document.createElement("div");
  location.innerHTML = `
                  <h3>Location</h3>
                  <p>123 Forest Drive, Forestville, Maine</p>                 
     `;

  container.appendChild(schedule);
  container.appendChild(img);
  container.appendChild(hours);
}
