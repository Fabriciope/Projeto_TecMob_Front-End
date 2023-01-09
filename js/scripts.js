const elements= document.querySelectorAll('.limitt h3.info-produto')
const LIMIT= 67

for (let h3 of elements) {
  const aboveLimit= h3.innerText.lenght > LIMIT
  const dotsOrEmpty= aboveLimit ? '' : '...'
  h3.innerText= h3.innerText.substring(0, LIMIT) + dotsOrEmpty
}

const elements2= document.querySelectorAll('#section #container-section h3')
const LIMIT2= 78

for (let h3 of elements2) {
  const aboveLimit2= h3.innerText.lenght > LIMIT2
  const dotsOrEmpty2= aboveLimit2 ? '' : '...'
  h3.innerText= h3.innerText.substring(0, LIMIT2) + dotsOrEmpty2
}

const btnMobile= document.getElementById('btn-mobile')

function abrirMenu(){
  const nav= document.getElementById('nav')
  nav.classList.toggle('menu-ativo')
}
btnMobile.addEventListener('click', abrirMenu)

const btnCategoria= document.getElementById('h2-categorias')

function abrirCategoria (){
  const asideHeader= document.getElementById('aside-header')
  asideHeader.classList.toggle('aside-header-ativo')
}

btnCategoria.addEventListener('click', abrirCategoria)