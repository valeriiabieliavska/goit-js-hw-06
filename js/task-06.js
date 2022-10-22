"use strict";


const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.dataset.length;

const input = document.querySelector('input');

inputEl.addEventListener("change", event => {
    const text = event.currentTarget.value;

    if (text.length === Number(dataLength)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
}    else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});

console.log(inputEl)




// Для отримання значення data-атрибута використовується властивість dataset, після якого стоїть ім'я атрибута.

// addEventListener - Додає слухача події на елемент.

// event.currentTarget.value - елемент, на якому виконується обробник події.
// change - Відбувається після зміни елемента форми. 

// +dataLength или Number(dataLength) - Конвертация строки в число с помощью оператора + или с помощью метода Number()