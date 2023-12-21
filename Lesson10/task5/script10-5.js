// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let h1 = document.createElement('h1');
let button = document.createElement('button');

h1.innerText = 'Text';
button.innerText = 'Click';
document.body.append(h1, button);

let flag = true;
button.addEventListener('click', () => {
    h1.style.display = flag ? 'none' : 'block';
    flag = !flag;
})