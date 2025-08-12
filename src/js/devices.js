const wrapperDevices = document.getElementById('devices__wrapper');
const button = document.getElementById('devices__button');
const buttonSpan = button.querySelector('span');
const buttonImg = button.querySelector('img');

const WIDTH_WRAPPER = 1055 
// 968

const MIN_NUMBER_OF_ELEMENTS = 3
const AVG_NUMBER_OF_ELEMENTS = 4
const MAX_NUMBER_OF_ELEMENTS = 8

let previousWidth = wrapperDevices.offsetWidth;
const arrDevicesCard = ['Ремонт ноутбуков', 'Ремонт планшетов', 'Ремонт ПК', 'Ремонт мониторов', 'Ремонт ноутбуков', 'Ремонт планшетов', 'Ремонт ПК', 'Ремонт мониторов']



const addDevice = (deviceName) => {
    const cardDevices = document.createElement('div')
    cardDevices.classList.add('devices__card')
    const service = document.createElement('p')
    service.textContent = `${deviceName}`


    const devicesButton = document.createElement('button')
    devicesButton.classList.add('devices__button')
    const imgButton = document.createElement('img')
    imgButton.setAttribute('src', 'img/ic/go.svg')
    devicesButton.append(imgButton)
    cardDevices.append(service, devicesButton)


    return cardDevices
}

const insertCards = (numberOfCards) => {
    for (let index = 0; index < numberOfCards; index++) {
        const element = arrDevicesCard[index];
        wrapperDevices.append(addDevice(element))   
       
    }
}

const checkNumberOfelements = (widthContainer) => {
    return widthContainer > WIDTH_WRAPPER ? AVG_NUMBER_OF_ELEMENTS : MIN_NUMBER_OF_ELEMENTS
}



if( wrapperDevices.offsetWidth <= WIDTH_WRAPPER){
    insertCards(MIN_NUMBER_OF_ELEMENTS)
}
if( wrapperDevices.offsetWidth > WIDTH_WRAPPER){
    insertCards(AVG_NUMBER_OF_ELEMENTS)
}

const showAll = () => {
    wrapperDevices.innerHTML = ''
 
    insertCards(MAX_NUMBER_OF_ELEMENTS);
  
    buttonSpan.textContent = 'Скрыть';
    buttonImg.src = 'img/ic/expand2.png';
    button.addEventListener('click', hideAll);
    button.removeEventListener('click', showAll)

}

const hideAll = () => {
    wrapperDevices.innerHTML = ''

    insertCards(checkNumberOfelements(wrapperDevices.offsetWidth));

    buttonSpan.textContent = 'Показать все';
    buttonImg.src = 'img/ic/expand.png';
    button.addEventListener('click', showAll);
    button.removeEventListener('click', hideAll)

}


button.addEventListener('click', showAll);


window.addEventListener('resize', function() {
  const currentWidth = wrapperDevices.offsetWidth;
  if (currentWidth !== previousWidth) {
    location.reload();
    previousWidth = currentWidth;
  }


});
