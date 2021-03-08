//Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и 
//нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число. Функция создает столько div, сколько указано в 
//amount и добавляет их в div#boxes.

//Каждый созданный div:
//-Имеет случайный rgb цвет фона
//-Размеры самого первого div - 30px на 30px
//-Каждый следующий div после первого, должен быть шире и выше 
//предыдущего на 10px

//Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const inputDivControls = document.querySelector("#controls input");
const boxes = document.getElementById('boxes');
console.log(boxes);
renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(){  //getAmount
    //получение значения числа inputa при увеличении шага 
    let amount = +inputDivControls.value;
   
    console.log('Показать добавление числа input', amount);
    
    createDives(amount);
}

function createDives(amount){  
    boxes.innerHTML = "";
    const basicSize = 30;
    let dives = [];

for (let i = 0; i < amount; i ++){
    let size = basicSize + i * 10;
    const creatDiv = document.createElement("div");
    creatDiv.style.cssText = `width: ${size}px;
                                height: ${size}px;
                                background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    dives.push(creatDiv);
    
    }
console.log(dives);
    boxes.append(...dives);

   //console.log(createDives(amount));

}

function destroyBoxes() {
    console.log('Показать снятие клика');
    boxes.innerHTML = "";
  }
  
  function random() {
    return Math.floor(Math.random() * 256);
  }