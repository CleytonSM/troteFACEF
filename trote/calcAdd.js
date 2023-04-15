const btnCalcularAdd = document.getElementById('calcular2')
btnCalcularAdd.addEventListener('click', event => {
  event.preventDefault();
  const ensure = document.getElementById('ensure')
  const ensure_quantity = Number(document.getElementById('ensure_quantity').value)

  const macarrao = document.getElementById('macarrao')
  const macarrao_quantity = Number(document.getElementById('macarrao_quantity').value)

  const arroz5 = document.getElementById('arroz5')
  const arroz5_quantity = Number(document.getElementById('arroz5_quantity').value)

  const arroz1 = document.getElementById('arroz1')
  const arroz1_quantity = Number(document.getElementById('arroz1_quantity').value)

  const feijao2 = document.getElementById('feijao2')
  const feijao2_quantity = Number(document.getElementById('feijao2_quantity').value)

  const feijao1 = document.getElementById('feijao1')
  const feijao1_quantity = Number(document.getElementById('feijao1_quantity').value)

  const kit = document.getElementById('kit')
  const kit_quantity = Number(document.getElementById('kit_quantity').value)

  const oleo = document.getElementById('oleo')
  const oleo_quantity = Number(document.getElementById('oleo_quantity').value)

  let pontos

  if(ensure.checked){
    pontos = ((ensure_quantity) * 10)
  }
  if(macarrao.checked){
    pontos = ((macarrao_quantity) * 0,5) 
  }
  if(arroz5.checked){
    pontos = ((arroz5_quantity) * 5)
  }
  if(arroz1.checked){
    pontos = ((arroz1_quantity) * 1)
  }
  if(feijao2.checked){
    pontos = ((feijao2_quantity) * 2)
  }
  if(feijao1.checked){
    pontos = ((feijao1_quantity) * 1)
  }
  if(kit.checked){
    pontos = ((kit_quantity) * 25)
  }
  if(oleo.checked){
    pontos = ((oleo_quantity) * 1)
  }

  document.getElementById('mostrar').innerHTML = `A sua pontuação foi ${pontos}`
})