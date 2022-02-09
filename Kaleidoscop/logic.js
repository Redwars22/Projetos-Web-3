function reloadWindow(){
  window.location.reload(false)
}

function reportBug(){
  window.open('mailto:andrewpereira.megabyte@gmail.com')
}

function helpPage(){
  window.open('https://redwars22.notion.site/Ajuda-do-Project-Kaleidoscop-b2500850fdbb42b5b0860068772533e7')
}

function aboutBox(){
  window.alert(
    'ProjectKaleidoscop. Gerador de países criado por André Pereira(@Redwars22) usando PHP' +
    '(parte da lógica) e HTML e Bootstrap(parte visual). Fonte da interface: ' +
    'Stick.'
  )
}

function setFlag(){
  let flagURL = prompt("Insira o endereço de uma imagem para ser usada como bandeira:");

  $(".flag").attr("src", flagURL);
}