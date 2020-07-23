//Tentative code

homeBtn = document.getElementById("home");
menuBtn = document.getElementById("menu");
contactBtn = document.getElementById("contact");

tabHome = document.getElementById("tab-home");
tabMenu = document.getElementById("tab-menu");
tabContact = document.getElementById("tab-contact");

homeBtn.addEventListener("click", event =>{
    tabHome.style.display = 'flex';
    tabMenu.style.display = 'none';
    tabContact.style.display = 'none';
});

menuBtn.addEventListener("click", event =>{
    tabHome.style.display = 'none';
    tabMenu.style.display = 'flex';
    tabContact.style.display = 'none';
});

contactBtn.addEventListener("click", event =>{
    tabHome.style.display = 'none';
    tabMenu.style.display = 'none';
    tabContact.style.display = 'flex';
});
