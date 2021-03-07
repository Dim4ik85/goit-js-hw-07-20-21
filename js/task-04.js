//Task 4
//  Счетчик состоит из спана и кнопок, которые должны 
//  увеличивать и уменьшать значение счетчика на 1.

//  1.Создай переменную counterValue в которой будет 
//  хранится текущее значение счетчика.
// 2. Создай функции increment и decrement для увеличения 
//   и уменьшения значения счетчика
// 3.  Добавь слушатели кликов на кнопки, вызовы функций 
//   и обновление интерфейса

const resultSpan = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);

function decrement() {
  const  counterValue = Number(resultSpan.textContent)
    resultSpan.textContent = counterValue - 1
}

function increment() {
  const  counterValue = Number(resultSpan.textContent)
    resultSpan.textContent = counterValue + 1
}