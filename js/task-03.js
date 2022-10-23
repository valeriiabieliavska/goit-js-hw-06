"use strict";

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const ulEl = document.querySelector('.gallery');

const markup = images.map(image => `<li><img src = "${image.url}" alt = "${image.alt}"  width = 280 height = 200></li>`).join("");

ulEl.insertAdjacentHTML('afterbegin', markup);

console.log(ulEl)

// ulEl.style.display = 'flex';
// ulEl.style.listStyle = 'none';
// ulEl.style.justifyContent = 'space-evenly';
// ulEl.style.marginTop = '100px';
// ulEl.style.gap = '15px';



// insertAdjacentHTML - Сучасний метод для додавання рядка з HTML - тегами перед, після або всередину елемента.
// elem.insertAdjacentHTML(position, string);
// 'afterbegin' - Аргумент position - це рядок, позиція щодо елемента