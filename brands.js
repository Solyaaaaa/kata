const wrapperBrands = document.getElementById('brands__wrapper');
const button = document.getElementById('button');
const buttonSpan = button.querySelector('span');
const buttonImg = button.querySelector('img');

const WIDTH_WRAPPER = 968
const MIN_NUMBER_OF_ELEMENTS = 6
const AVG_NUMBER_OF_ELEMENTS = 8
const MAX_NUMBER_OF_ELEMENTS = 11

let previousWidth = wrapperBrands.offsetWidth;
let flag = false;
const arrBrandsCard = ['Lenovo', 'samsung', 'apple', 'ViewSonic', 'bosch', 'hp', 'acer', 'sony', 'Lenovo', 'samsung', 'apple']



const addBrand = (brandName) => {
    const cardBrands = document.createElement('div')
    cardBrands.classList.add('brands__card')
    const logo = document.createElement('img')
    logo.classList.add('logo__img')
    logo.setAttribute('src', `brands_img/${brandName}.png`)
    logo.setAttribute('alt', `Логотип ${brandName}`)


    const brandsButton = document.createElement('button')
    brandsButton.classList.add('brands__button')
    const imgButton = document.createElement('img')
    imgButton.setAttribute('src', 'brands_img/ic/go.svg')
    brandsButton.append(imgButton)
    cardBrands.append(logo, brandsButton)


    return cardBrands
}

const insertCards = (numberOfCards) => {
    for (let index = 0; index < numberOfCards; index++) {
        const element = arrBrandsCard[index];
        wrapperBrands.append(addBrand(element))   
       
    }
}

const checkNumberOfelements = (widthContainer) => {
    return widthContainer > WIDTH_WRAPPER ? AVG_NUMBER_OF_ELEMENTS : MIN_NUMBER_OF_ELEMENTS
}



if( wrapperBrands.offsetWidth <= WIDTH_WRAPPER){
    insertCards(MIN_NUMBER_OF_ELEMENTS)
}
if( wrapperBrands.offsetWidth > WIDTH_WRAPPER){
    insertCards(AVG_NUMBER_OF_ELEMENTS)
}



window.addEventListener('resize', function() {
  const currentWidth = wrapperBrands.offsetWidth;
  if (currentWidth !== previousWidth) {
    location.reload();
    previousWidth = currentWidth;
  }
  console.log(wrapperBrands.offsetWidth)

});

button.addEventListener('click', () => {
   flag = !flag;
   wrapperBrands.innerHTML = ''
 
   flag ? insertCards(MAX_NUMBER_OF_ELEMENTS) : insertCards(checkNumberOfelements(wrapperBrands.offsetWidth));
  
   buttonSpan.textContent = flag ? 'Скрыть' : 'Показать все';
   buttonImg.src = flag ? 'brands_img/ic/expand2.png' : 'brands_img/ic/expand.png';

  });

