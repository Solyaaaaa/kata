const tableList = document.getElementById('wrapper__table')
const tr = document.createElement('tr');

const arrTr = ['Ремонтные услуги', 'Бесплатно', 'Срок', '']

const arrService = [
  {
    service: 'Диагностика',
    price: 'Бесплатно',
    deadline: '30 мин',
    button: true,
  }, 
  {
    service: 'Замена дисплея',
    price: '1 000 ₽',
    deadline: '30-120 мин',
    button: true,
  }, 
  {
    service: 'Замена полифонического динамика',
    price: '1 000 ₽',
    deadline: '30-120 мин',
    button: true,
  }, 
  {
    service: 'Тестирование с выдачей технического заключения',
    price: '1 000 ₽',
    deadline: '30-120 мин',
    button: true,
  }, 
  {
    service: 'Замена программного обеспечения',
    price: '1 000 ₽',
    deadline: '30-120 мин',
    button: true,
  }
]

const exampleButton = {
  text: 'ЗАКАЗАТЬ',
  className: 'prices__button'
}

  const addButtonToTableRow = (parentNode) => {
    const button = document.createElement('button');
    const td = document.createElement('td')
    td.classList.add('table__desc')
    button.textContent = exampleButton.text;
    button.classList.add(exampleButton.className);

    td.append(button);
    parentNode.append(td)

  }
// Сделать хедер
for(let i = 0; i < arrTr.length; i++){
  const headerTable = document.createElement('th')
  headerTable.textContent = arrTr[i];
  headerTable.classList.add('table__header')
  tr.append(headerTable)
 
}

  tableList.append(tr)
for(let i = 0; i < arrService.length; i++){

  const tableRow = document.createElement('tr');
  tableRow.classList.add('table__row') 
  const td1 = document.createElement('td');
  td1.classList.add('table__desc')
  td1.textContent = arrService[i].service
  tableRow.appendChild(td1)
  const td2 = document.createElement('td');
  td2.classList.add('table__desc')
  td2.textContent = arrService[i].price
  tableRow.appendChild(td2)
  const td3 = document.createElement('td');
  td3.classList.add('table__desc')
  td3.textContent = arrService[i].deadline
  tableRow.appendChild(td3)
  addButtonToTableRow(tableRow)

  tableList.append(tableRow)

}
