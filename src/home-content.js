const homeLoad = function(){
    let content = document.getElementById('content');
    content.textContent = '';

    let homeText = document.createElement('div')
    homeText.id = 'home-text';
    content.appendChild(homeText);

    let h12 = document.createElement('h1');
    h12.textContent = 'Home';
    homeText.appendChild(h12);

    let hr1 = document.createElement('hr');
    homeText.appendChild(hr1);

    let p1 = document.createElement('p');
    p1.textContent = 'Welcome to our restaurant! We only use the best ingredients! Food is always fresh, never frozen. Come check us out!';
    homeText.appendChild(p1);
}

export default homeLoad