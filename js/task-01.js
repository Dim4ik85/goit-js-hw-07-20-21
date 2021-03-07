//Task01
    //1. Напиши скрипт, который выполнит следующие операции.
    // Посчитает и выведет в консоль количество категорий в ul#categories, 
    // то есть элементов li.item. Получится 'В списке 3 категории.'.
    
    //2. Для каждого элемента li.item в списке ul#categories, найдет и выведет
    // в консоль текст заголовка элемента (тега h2) и количество элементов
    // в категории (всех вложенных в него элементов li).
    
    // Например для первой категории получится:

    // Категория: Животные
    // Количество элементов: 4

const itemCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemCategories.length} категории.`);

// const itemCategories = document.querySelector('#categories').children.length;
// console.log(`В списке ${itemCategories} категории.`);
itemCategories.forEach(itemCategorie => {
    console.log(`Категория: ${itemCategorie.firstElementChild.textContent}`); 
    console.log(`Количество элементов: ${itemCategorie.querySelectorAll('li').length}`);
    //console.log(itemCategorie.lastElementChild.children.length);
});

