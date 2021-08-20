'use strict';

let advert = document.querySelector('.adv');
console.log('advert: ', advert);
advert.remove();

let books = document.querySelectorAll('.book');
console.log('books: ', books);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// Исправить заголовок
books[4].querySelector('h2').querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

// Порядок книг
books[0].before(books[1]);
console.log('books: ', books);
books[0].after(books[4]);
books[4].after(books[3]);
books[5].after(books[2]);

// Порядок глав
let book2CL = books[0].querySelector('ul').querySelectorAll('li');
console.log('book2CL: ', book2CL);
book2CL[9].after(book2CL[2]);
book2CL[8].after(book2CL[4]);
book2CL[4].after(book2CL[5]);
book2CL[9].before(book2CL[7]);

let book5CL = books[5].querySelector('ul').querySelectorAll('li');
console.log('book5CL: ', book5CL);
book5CL[1].after(book5CL[9]);
book5CL[4].after(book5CL[2]);
book5CL[8].before(book5CL[5]);


// Добавить главу
let chaptersList = books[2].querySelector('ul').querySelectorAll('li');
console.log(' chaptersList: ', chaptersList);
let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
chaptersList[8].after(newChapter);