"use strict";


const counterValue = 0;
const valueEl = document.querySelector("#value");

const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;

  console.log(buttonIncrement);
});

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;

  console.log(buttonDecrement);
});





// element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// getElementById - Возвращает ссылку на элемент по его идентификатору (ID);