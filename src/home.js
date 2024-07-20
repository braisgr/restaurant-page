function render(){
  const content = document.getElementById("content");
  content.textContent= "";

  //Creamos el container del home y lo añadimos al content
  const home = document.createElement("div");
  home.classList.add("home");
  content.appendChild(home);

  //Creamos el contenido
  const hero = document.createElement("div");
  hero.classList.add("hero");
  home.appendChild(hero);
  const title = document.createElement("h2");
  title.textContent = "Experience the Art of Specialty Coffee";
  hero.appendChild(title);
  const quote = document.createElement("p");
  quote.textContent = "Crafted with passion, served with love – your journey to the perfect cup starts here.";
  hero.appendChild(quote);
  const button = document.createElement("button");
  button.id = "hero-button";
  button.textContent = "Order Now";
  hero.appendChild(button);
}

export {render as homeRender};