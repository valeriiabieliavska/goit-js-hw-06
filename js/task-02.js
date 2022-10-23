"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const itemArray = []

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  itemArray.push(itemEl)

});

ulEl.append(...itemArray);
 

// classList - зберігається об'єкт з методами для роботи з класами елемента.
//   textContent -  повертає текстовий контент всередині елемента.
//   createElement - Створює елемент з ім'ям "" і повертає посилання на нього як результат свого виконання ""
// ulEl.append - додає один або декілька елементів після всіх дітей елемента ulEl

// // const ulEl = document.querySelector('#ingredients');
// // console.log(ulEl)

// // for (let i = 0; i < ingredients.length; i += 1) {
// //   const itemEl = document.createElement('li')
// //   itemEl.classList.add('item');
// // itemEl.textContent = ingredients[i];
// //   console.log(itemEl)
// ulEl.append(itemEl);
// // }
