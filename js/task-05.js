
"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    nameInput.textContent = event.currentTarget.value;
    nameOutput.textContent = event.currentTarget.value;
    
    console.log(nameInput);
});


// addEventListener Додає слухача події на елемент.

// element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек - функція, яка буде викликана під час настання події.
//     options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
    
// event.currentTarget.value - елемент, на якому виконується обробник події.