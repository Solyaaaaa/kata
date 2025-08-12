

const buttonOpen = document.getElementById('menu__button-open')
const buttonClosed = document.getElementById('menu__button-closed')

const aside = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')


buttonOpen.addEventListener('click', () => {
aside.classList.add('active')
overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
aside.classList.remove('active')
overlay.classList.remove('active')
} )
buttonClosed.addEventListener('click', () => {
aside.classList.remove('active')
overlay.classList.remove('active')
})
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape'){
    aside.classList.remove('active')
    overlay.classList.remove('active')
  }
})