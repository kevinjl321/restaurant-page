const navLoad = function(){
    let navc = document.getElementById("nav");

    let nav = document.createElement('nav');
    nav.classList.add('menu-container');
    navc.appendChild(nav);

    let a = document.createElement('a');
    a.href = '#';
    a.classList.add('menu-logo');
    nav.appendChild(a);

    let img = document.createElement('img');
    img.src = "https://wweb.dev/resources/navigation-generator/logo-placeholder.png";
    a.appendChild(img);

    let menu = document.createElement('div');
    menu.classList.add('menu');
    nav.appendChild(menu);

    let ul = document.createElement('ul');
    menu.appendChild(ul);

    let liHome = document.createElement('li');
    let homeLink = document.createElement('a')
    homeLink.id = "home";
    homeLink.href = "#";
    homeLink.textContent = 'Home';
    liHome.appendChild(homeLink);
    ul.appendChild(liHome);

    let liAbout = document.createElement('li');
    let aboutLink = document.createElement('a')
    aboutLink.id = "about";
    aboutLink.href = "#";
    aboutLink.textContent = 'About';
    liAbout.appendChild(aboutLink);
    ul.appendChild(liAbout);

    let liMenu = document.createElement('li');
    let menuLink = document.createElement('a')
    menuLink.id = "menu";
    menuLink.href = "#";
    menuLink.textContent = 'Menu';
    liMenu.appendChild(menuLink);
    ul.appendChild(liMenu);
}

export default navLoad