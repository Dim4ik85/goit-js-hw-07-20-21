//Task 5
//Напиши скрипт который, при наборе текста 
//в инпуте input#name-input (событие input), 
//подставляет его текущее значение в 
//span#name-output. Если инпут пустой, в 
//спане должна отображаться строка 'незнакомец'

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputFocus);

// function onInputFocus(event) {
//     console.log(event.currentTarget.value);
// }

function onInputFocus(event) {
    if (event.currentTarget.value) {
        outputName.textContent = event.currentTarget.value;
    } else {
        outputName.textContent = 'незнакомец';
    }
}