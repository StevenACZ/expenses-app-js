let STORE = {
  gastos: [
    {
      id: '13asdasd',
      amount: 10,
      category: 'Shopping',
      description: 'Iphone 20',
      date: '2020-01-27'
    },
    {
      id: '231SS',
      amount: 200,
      category: 'Shopping',
      description: 'Pc gamer',
      date: '2020-01-01'
    },
    {
      id: '213as2',
      amount: 500,
      category: 'Shopping',
      description: 'Macbook pro 20',
      date: '2021-08-01'
    }
  ]
}

// INITIAL CONST
const sectionContent = document.querySelector('.js-content');
const sectionForm = document.querySelector('.js-form');

const btnNewExpense = document.querySelector('.js-button-new-expense');
const btnCancel = document.querySelector('.js-button--cancel');

// BTN NEW EXPENSE
btnNewExpense.addEventListener('click', () => {
  sectionForm.classList.add('active');
})

// BTN CANCEL
btnCancel.addEventListener('click', () => {
  sectionForm.classList.remove('active');
})

// BTN ADD LISTENER DELETE
function btnAddEventListenerDelete() {
  const contentItems = document.querySelectorAll('.content__item');

  contentItems.forEach((contentItem) => {
    const btnDelete = contentItem.querySelector('span');
    btnDelete.addEventListener('click', (event) => {
      let newGastos = STORE.gastos.filter(expense => expense.id !== contentItem.id);
      sendNewGastosToServer(newGastos);
      renderExpenses();
    })
  })
}

// RENDER EXPENSES 
function renderExpenses() {
  const contentList = document.querySelector('.content__list');

  contentList.innerHTML = ''

  STORE.gastos.forEach(({id, amount, category, description}) => {
    let contentItemElement = document.createElement('li');
    contentItemElement.classList.add('content__item')
    contentItemElement.id = id
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

  btnAddEventListenerDelete()
}

// SEND NEW EXPENSES TO SERVER
function sendNewExpenseToServer(newExpense) {
  STORE.gastos.push(newExpense)
}

// SEND NEW GASTOS SERVER
function sendNewGastosToServer(newGastos) {
  STORE.gastos = newGastos;
}

// SUBMIT FORM
function submitForm() {
  const amount = contentForm.querySelector('.js-amount');
  const category = contentForm.querySelector('.js-category');
  const description = contentForm.querySelector('.js-description');
  
  const newExpense = {
    id: '12' + Math.floor(Math.random() * 1100) + '2312' + Math.floor(Math.random() * 2000) + Math.floor(Math.random() * 9999) + '123A',
    amount: amount.value,
    category: category.value,
    description: description.value
  }
  
  // SEND DATA TO SERVER
  sendNewExpenseToServer(newExpense)
  
  // CLEAR INPUTS
  amount.value = ''
  category.value = ''
  description.value = ''
}

const contentForm = document.querySelector('.js-content__form');

// CONTENT FORM
contentForm.addEventListener('submit', (event) => {
  event.preventDefault()
  submitForm()
  renderExpenses()
  sectionForm.classList.remove('active');
})

function init() {
  renderExpenses()
}

init();