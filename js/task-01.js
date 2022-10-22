"use strict";



const listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`);

const categoryEl = document.querySelectorAll('#categories > li');

categoryEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}, Elements: ${element.lastElementChild.children.length}`)
})



// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// elem.firstElementChild - вибере перший дочірній вузол - елемент всередині elem.
//     elem.children - псевдомасив, зберігає тільки дочірні вузли - елементи, тобто ті, що відповідають тегам.
//     elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
//     elem.textContent повертає текстовий контент всередині елемента.
// element.querySelectorAll(selector);

// Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором.
//     Наприклад, всі елементи списку з класом menu - item.


