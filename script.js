function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  //  pegar a tag img
  const img = document.querySelector("#profile img")

  //  substituir a imagem
  if(html.classList.contains("light")) {
//  se tiver light Mode, adicionar a image light
   img.setAttribute("src", "./assets/eloise-light.png")
  } else {
      //  se tiver sem light mode, manter a imagem normal 
    img.setAttribute("src", "./assets/eloise.png")
  }
}

function copiarEmail(event) {
  event.preventDefault() // Impede o link de abrir página ou recarregar

  const email = "eloise.ra3e@gmail.com" // Meu e-mail aqui
  const link = event.currentTarget
  const textoOriginal = link.innerText

  navigator.clipboard.writeText(email).then(() => {
    link.innerText = "E-mail copiado!"

    setTimeout(() => {
      link.innerText = textoOriginal
    }, 2000)
  }).catch((erro) => {
    console.error("Erro ao copiar:", erro)
  })
}