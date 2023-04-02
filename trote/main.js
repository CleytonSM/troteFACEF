const switchBtn = document.getElementById('botao');

switchBtn.addEventListener('click', event => {
    event.preventDefault();
    var html = document.documentElement
    var logo = document.getElementById('logo')
    if (html.classList.contains("dark")){
        html.classList.remove("dark")
        logo.src = '/trote/assets/logotrote.png'
    } else {
        html.classList.add("dark")
        logo.src = '/trote/assets/logotrote_branco.png'
    }
})