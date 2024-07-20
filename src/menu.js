import img1 from './assets/cards/img-1.webp';
import img2 from './assets/cards/img-2.webp';
import img3 from './assets/cards/img-3.webp';
import img4 from './assets/cards/img-4.webp';
import img5 from './assets/cards/img-5.webp';
import img6 from './assets/cards/img-6.webp';
import card1 from './assets/cards/card-1.webp';
import card2 from './assets/cards/card-2.webp';
import card3 from './assets/cards/card-3.webp';
import card4 from './assets/cards/card-4.webp';
import card5 from './assets/cards/card-5.webp';
import card6 from './assets/cards/card-6.webp';

const menuItems = [
  { name: "Resolute", price: "10.00€", description: "Stone Fruit, Caramel, Milk Chocolate", defaultImg: img1, hoverImg: card1 },
  { name: "Las Chirimoyas", price: "10.00€", description: "Prune, Brown Sugar, Milk Chocolate", defaultImg: img2, hoverImg: card2 },
  { name: "Santa Elena", price: "12.00€", description: "Strawberry, Apricot, Dark Chocolate", defaultImg: img3, hoverImg: card3 },
  { name: "Meridian", price: "9.00€", description: "Plum, Hazelnut, Chocolate", defaultImg: img4, hoverImg: card4 },
  { name: "Beija Flor", price: "10.00€", description: "Apricot, Cashew, Praline", defaultImg: img5, hoverImg: card5 },
  { name: "Pathfinder", price: "10.00€", description: "Raspberry, Lime Butter", defaultImg: img6, hoverImg: card6 },
] 

function render() {
  const content = document.getElementById("content");
  content.textContent = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");
  content.appendChild(menu);

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.defaultImg}" class="card-img" data-default="${item.defaultImg}" data-hover="${item.hoverImg}">
      <div class="card-info">
        <div class="card-name">
          <h4>${item.name}</h4>
          <p>from ${item.price}</p>
        </div>
        <p>${item.description}</p>
      </div>
    `;
    menu.appendChild(card);
  });

  const cards = document.querySelectorAll(".card-img");
  cards.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.src = img.dataset.hover;
    });

    img.addEventListener("mouseout", () => {
      img.src = img.dataset.default;
    });
  })
}



export { render as menuRender };
