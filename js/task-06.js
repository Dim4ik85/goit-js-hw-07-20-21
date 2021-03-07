// Task6 
//Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.


const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', inputFocus);

function inputFocus() {
    if (inputRef.value.length == inputRef.dataset.length) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
      //  console.log('green');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
     //   console.log('red');
    }
}

console.log(inputRef.dataset.length);