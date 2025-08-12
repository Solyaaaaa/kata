
const buttonOpen = document.getElementById('open-callback')
const buttonOpenMob = document.getElementById('open-callback-mob');
const buttonClosed = document.getElementById('aside__button-callback')

const aside = document.querySelector('.aside__callback')
const overlay = document.querySelector('.callback__overlay')


buttonOpen.addEventListener('click', () => {
aside.classList.add('active')
overlay.classList.add('active')
})
buttonOpenMob.addEventListener('click', () => {
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