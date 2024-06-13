import "./style.css";
import { Home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact";

Home();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", homeFunction);
menuBtn.addEventListener("click", menuFunction);
contactBtn.addEventListener("click", contactFunction);

function homeFunction() {
    Home();
}

function menuFunction() {
    menu();
}

function contactFunction() {
    contact();
}

