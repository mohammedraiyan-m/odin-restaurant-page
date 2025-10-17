// import { container } from "webpack";

export default function createHomeTab(container) {
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
     
    const food = document.createElement('div');
    food.innerHTML = `<p>🍝 Spaghetti Carbonara — ₱250</p>
                    <p>🍕 Margherita Pizza — ₱300</p>
                    <p>🥗 Caesar Salad — ₱180</p>
                    <p>🍰 Cheesecake — ₱220</p>
                    <p>🍗 Fried Chicken Platter — ₱320</p>
                    <p>🍛 Chicken Curry — ₱270</p>
                    <p>🍤 Garlic Butter Shrimp — ₱350</p>
                    <p>🥩 Grilled Ribeye Steak — ₱600</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
                    <p>🍚 Pork Adobo Rice Bowl — ₱230</p>
    `
                    
    container.appendChild(heading);
    container.appendChild(food);

}