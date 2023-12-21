// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let count = localStorage.getItem('count') ?? 0;
let block = document.getElementById('count');
let newResult = (Number(count)+1).toString();

block.innerText = newResult;
localStorage.setItem('count', newResult);