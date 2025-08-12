
const buttonOpen = document.getElementById('open-feedback')
const buttonOpenMob = document.getElementById('open-feedback-mob');
const buttonClosed = document.getElementById('aside__button-closed')

const aside = document.querySelector('.aside__feedback')
const overlay = document.querySelector('.feedback__overlay')


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