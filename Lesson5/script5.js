// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(5, 5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareCircle = (r) => Math.PI * Math.pow(r, 2);
console.log(squareCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let squareCylinder = (r, h) =>2 * Math.PI * r * (r + h);
console.log(squareCylinder(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayShow = (arr) => {
    arr.forEach((item) => document.write(item));
}
arrayShow([1,2,3]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textP = (text) => document.write(`<p>${text}</p>`);
textP('hello Vova');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUlList = (Text) => {
    document.write(`<ul>
            <li>${Text}</li>
            <li>${Text}</li>
            <li>${Text}</li>
                    </ul>`)
}
createUlList('Hello Im here');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlList2 = (Text, amountLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < amountLi; i++) {
        document.write(`<li>${Text}</li>`)
    }
    document.write(`</ul>`);
}
createUlList2('Hello Im here2', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let argList = (arr) => {
    document.write(`<ul>`);
    arr.forEach((item) => document.write(`<li>${item}</li>`));
    document.write(`</ul>`);
}
argList([1, 2, 3, true, [1,2,3]]);
// document.write(`<ul>` + arr.forEach ((item) => `<li>${item}</li>`) + `</ul>`); // намагався якось так написати, але щось не вийшло)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];
users.forEach((item) => document.write(`<div>${item.id} - ${item.name} - ${item.age}</div>`));

// - створити функцію яка повертає найменьше число з масиву
const numbers = [3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];
let minAmount = (array) => {
    let min = array[0];
    array.forEach((num) => min = min > num ? num : min);
    return min;
}
console.log(minAmount(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sum = 0;
    arr.forEach((newVal) => sum += newVal);
    return sum;
}
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let oldVal1 = arr[index1];
    arr[index1] = arr[index2];

    arr[index2] = oldVal1;

    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const money of currencyValues) {
//         if (money.currency === exchangeCurrency){
//             return sumUAH / money.value;
//         }
//     }
// };
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    currencyValues.forEach((money) => {
        if (money.currency === exchangeCurrency){
            sumUAH = sumUAH / money.value;
        }
    });
    return sumUAH;
};
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));