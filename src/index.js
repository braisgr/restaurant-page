import "./style.css";
import { homeRender } from "./home";
import { menuRender } from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  function setupEventListeners() {
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const heroButton = document.getElementById("hero-button");

    homeButton.addEventListener("click", renderHome);
    menuButton.addEventListener("click", renderMenu);
    if(heroButton){
      heroButton.addEventListener("click", renderMenu);
    }
  }

  function renderHome(){
    homeRender();
    setupEventListeners();
  }

  function renderMenu(){
    menuRender();
    setupEventListeners();
  }

  renderHome();
});
