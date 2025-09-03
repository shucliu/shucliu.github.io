const buttonData = [
    // { href: 'mailto:shucliu “at symbol” mit.edu', imgSrc: 'assets/icon/envelope-fill.svg', buttonText: 'Email' },
    { href: 'https://github.com/shucliu', imgSrc: 'assets/icon/github.svg', buttonText: 'GitHub' },
    { href: 'https://scholar.google.com/citations?user=sR5joKcAAAAJ&hl=en', imgSrc: 'assets/icon/google-scholar_color.svg', buttonText: 'Scholar' },
    // { href: 'https://www.linkedin.com/in/bingxinke', imgSrc: 'assets/icon/LinkedIn_icon.svg', buttonText: 'LinkedIn' },
    // { href: 'https://twitter.com/KBingxin', imgSrc: 'assets/icon/X_logo_2023.svg', buttonText: '@KBingxin' },
    { href: 'https://orcid.org/0000-0003-4017-3224', imgSrc: 'assets/icon/ORCID_iD.svg', buttonText: 'ORCID'}
];


const container = document.getElementById('buttonContainer');

buttonData.forEach(data => {
    const link = document.createElement('a');
    link.href = data.href;
    link.target = '_self';

    const button = document.createElement('button');
    button.className = 'btn btn-outline-dark small-margin my-rounded';
    button.onclick = () => window.open(data.href, '_self');

    const img = document.createElement('img');
    img.src = data.imgSrc;
    img.className = 'd-inline-block align-text-bottom';
    img.width = 15;
    img.height = 15;

    const text = document.createTextNode(" " + data.buttonText);
    var span = document.createElement('span');
    span.style.fontSize = "0.9rem";
    span.appendChild(text);

    button.appendChild(img);
    button.appendChild(span);
    
    link.appendChild(button);

    container.appendChild(link);
});

