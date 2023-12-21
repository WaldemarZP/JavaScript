// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//---1

let sessions = localStorage.getItem('sessions');
let data = sessions ? JSON.parse(sessions) : [];

data.push({ date: new Date() });

localStorage.setItem('sessions', JSON.stringify(data));

//---2

let sessions = localStorage.getItem('sessions');
let data = sessions ? JSON.parse(sessions) : [];

for (const item of data) {
    let block = document.createElement('div');
    block.innerText = item.data;
    document.appendChild(block);
}