const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', event => {
    event.preventDefault();
    const html = document.documentElement;

    var img = document.getElementById('img_trote');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        img.setAttribute('src', '/assets/logotrote.png')
    }
    else {
        html.classList.add('dark');
        img.setAttribute('src', '/assets/logotrote_branco.png');
    } 
})


/*
function trocaSwitch() {
    const html = document.documentElement;
    var img = document.getElementById('img_trote');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        img.setAttribute('src', '/assets/logotrote.png')
    }
    else {
        html.classList.add('dark');
        img.setAttribute('src', '/assets/logotrote_branco.png');
    }
}
*/