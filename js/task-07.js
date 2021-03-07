//Task 7
// Напиши скрипт, который реагирует
// изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
console.log(spanRef.style);
inputRef.addEventListener('input', onInputFocus);

function onInputFocus(event) {
    //console.log(inputRef.currentTarget.value);
    spanRef.style.fontSize = event.currentTarget.value +"px";
    //spanRef.style.fontStyle = "italic";
}