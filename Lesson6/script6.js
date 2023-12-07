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
let cards = [
    {cardSuit: 'spade', value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'], color: 'black'},
    {cardSuit: 'diamond', value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'], color: 'red'},
    {cardSuit: 'heart', value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'], color: 'red'},
    {cardSuit: 'clubs', value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'], color: 'black'}
];

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
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
    if (card.cardSuit === 'spade') {
        accumulator[0].push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator[1].push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator[2].push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator[3].push(card);
    }
    return accumulator;
}, []);
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