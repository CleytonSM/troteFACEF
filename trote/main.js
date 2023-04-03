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


const btnCalcular = document.getElementById('calcular')
btnCalcular.addEventListener('click', event => {
    event.preventDefault();
    const kits = document.getElementById('kits').value
    let pontos
    if(kits >= 80){
        pontos = 5000
    }
    else if((kits >= 64) && (kits < 80)){
        pontos = 4000
    }
    else if((kits >= 40) && (kits < 64)){
        pontos = 2500
    }
    else if((kits >= 16) && (kits < 40)){
        pontos = 1000
    }
    else if((kits >= 0) && (kits < 16)){
        pontos = 0
    }
    if (kits <= -1){
        alert('Impossível calcular')
    }
    else {
        document.getElementById('mostrar').innerHTML = `A pontuação da sua equipe foi de ${pontos} pontos`
    }
    
})