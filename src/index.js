import homeLoad from './home-content'
import aboutLoad from './about-content'
import menuLoad from './menu-content'
import navLoad from './navbar';

const content = document.getElementById('content');

navLoad();
homeLoad();

let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");

let home = document.getElementById("home-text");
let about = document.getElementById("about-text");
let menu = document.getElementById("menu-text");

homeBtn.onclick = homeLoad;
menuBtn.onclick = menuLoad;
aboutBtn.onclick = aboutLoad;
