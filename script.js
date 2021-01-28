const STORE = {
  gastos: [
    {
      amount: 10,
      category: 'Shopping',
      description: 'Iphone 20',
      date: '2020-01-27'
    },
    {
      amount: 200,
      category: 'Shopping',
      description: 'Pc gamer',
      date: '2020-01-01'
    },
    {
      amount: 500,
      category: 'Shopping',
      description: 'Macbook pro 20',
      date: '2021-08-01'
    }
  ]
}

const sectionContent = document.querySelector('.js-content');
const sectionForm = document.querySelector('.js-form');

const btnNewExpense = document.querySelector('.js-button-new-expense');
const btnCancel = document.querySelector('.js-button--cancel');

btnNewExpense.addEventListener('click', () => {
  sectionForm.classList.add('active');
})

btnCancel.addEventListener('click', () => {
  sectionForm.classList.remove('active');
})

function renderExpenses() {
  const contentList = document.querySelector('.content__list');

  STORE.gastos.forEach(({amount, category, description, date}) => {
    let contentItemElement = document.createElement('li');
    contentItemElement.classList.add('content__item')
    contentItemElement.innerHTML = `
    <div class="content__details">
      <h3>${category}</h3>
      <p>${description}</p>
    </div>
    
    <div class="content__actions">
      <p>$${amount}</p>
      <span>Eliminar</span>
    </div>
    `;

    contentList.appendChild(contentItemElement);
  })
}

function renderForm() {
  return `

  `
}

function init() {
  renderExpenses()
}

init();