const menuLoad = function(){
    let content = document.getElementById('content');
    content.textContent = '';

    let menuText = document.createElement('div')
    menuText.id = 'menu-text';
    content.appendChild(menuText);

    let h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    menuText.appendChild(h1);

    let hr = document.createElement('hr');
    menuText.appendChild(hr);

    let p = document.createElement('p');
    p.textContent = ' Welcome to our restaurant! We only use the best ingredients! Food is always fresh, never frozen. Come check us out!'
    menuText.appendChild(p);
}

export default menuLoad