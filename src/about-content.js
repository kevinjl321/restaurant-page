const aboutLoad = function(){
    let content = document.getElementById('content');
    content.textContent = '';

    let aboutText = document.createElement('div')
    aboutText.id = 'about-text';
    content.appendChild(aboutText);

    let h1 = document.createElement('h1');
    h1.textContent = 'About';
    aboutText.appendChild(h1);

    let hr = document.createElement('hr');
    aboutText.appendChild(hr);

    let p = document.createElement('p');
    p.textContent = 'Welcome to our restaurant! We only use the best ingredients! Food is always fresh, never frozen. Come check us out!'
    aboutText.appendChild(p);
}

export default aboutLoad