//Task 02
//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну операцию 
//в список ul.ingredients. Для создания DOM-узлов 
//используй document.createElement()

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listIngredients = ingredients.map(ingredient => {
      const ingredientEl = document.createElement('li');
      console.log(ingredientEl);
      ingredientEl.textContent = ingredient;

      return ingredientEl;
  });
  console.log(listIngredients);

  const listEl = document.querySelector('ul');
  listEl.append(...listIngredients);
  console.log(listEl);