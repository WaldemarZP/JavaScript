// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';

console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';

console.log(str7.toLowerCase());
console.log(str8.toLowerCase());
console.log(str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str10 = ' dirty string   ';

console.log(str10.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str11 = 'Ревуть воли як ясла повні';
let arr = str11.split();
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
let arr2 = arr1.map((item) => {
    let newUser = item.toString();
    return newUser;
});
console.log(arr2);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(array, direction) {
    let sortArr = array.sort((a, b) => {
        if (direction === 'ascending') {
            return a - b;
        } else if (direction === 'descending') {
            return b - a;
        }
    });
    return (sortArr);
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sortMonthDuration);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonthDuration = coursesAndDurationArray.filter((item) => {
    if (item.monthDuration > 5) {
        return item;
    }
})
console.log(filterMonthDuration);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCoursesAndDurationArray = coursesAndDurationArray.map(((value, index) => {
    return{
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
}));
console.log(mapCoursesAndDurationArray);

// =========================
// описати колоду карт (від 6 до туза без джокерів)
// let carsSuits = ['spade', 'diamond', 'clubs', 'heart'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// let desk = (carsSuits, values) => {
//     let arr = [];
//     for (const carsSuit of carsSuits) {
//         for (const value of values) {
//             arr.push(
//                 {carsSuit: carsSuit, value: value}
//             )
//         }
//     }
//     arr.map((item) => (item.carsSuit === 'diamond' || item.carsSuit === 'heart') ? item.color = 'red' : item.color = 'black');
//     return arr;
// }
// let doneDesk = desk(carsSuits, values);
// console.log(doneDesk);


let cards= [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]

// - знайти піковий туз
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace'));

// - всі шістки
console.log(cards.filter((card) => card.value === '6'));

// - всі червоні карти
console.log(cards.filter((card) => card.color === 'red'));

// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let suit = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spades') {
        accumulator.spades.push(card);
    }
    if (card.cardSuit === 'diamonds') {
        accumulator.diamonds.push(card);
    }
    if (card.cardSuit === 'hearts') {
        accumulator.hearts.push(card);
    }
    if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    // accumulator[card.cardSuit].push(card);

    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(suit);


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
coursesArray.forEach (function (course){
    if (course.modules.includes('sass')){
        console.log(course);
    }
})


// --написати пошук всіх об'єктів, в який в modules є docker
coursesArray.forEach (function (course){
    if (course.modules.includes('docker')){
        console.log(course);
    }
})