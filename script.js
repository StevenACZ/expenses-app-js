// const STORE = {
//   gastos: [
//     {
//       amount: 10,
//       category: Shopping,
//       description: Iphone 20,
//       date: 2020-01-27
//     }
//   ]
// }

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

function renderList() {
  return `

  `
}

function renderForm() {
  return `

  `
}



// function listenCancelClick() {
//   const content = document.querySelector('.js-content');
//   content.addEventListener('click', (e) => {
//     e.preventDefault();
//     let target = content.querySelector('.js-button--cancel');
//     console.log(target)
//     // if (target == e.target) {
//     //   content.innerHTML = renderForm();
//     // }
//   })
// }

// function init() {
//   const content = document.querySelector('.js-content');
//   content.innerHTML = renderList();
//   addEventListeners();
//   // content.innerHTML = renderForm();
// }

// init();