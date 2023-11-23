//---------------Масиви та об'єкти:--------------//
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, true, 'bmw', 56, 55, false, 'ergerg', 89, 225, 333];
console.log(arr1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'Robots',
    pageCount: 100,
    genre: 'Fantastic'
}

let obj2 = {
    title: 'Rosalie and Fernando',
    pageCount: 5000,
    genre: 'Romantic'
}

let obj3 = {
    title: 'Cars',
    pageCount: 500,
    genre: 'Documentary'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let obj4 = {
    title: 'Robots',
    pageCount: 100,
    genre: 'Fantastic',
    authors: [
        {
            name: 'Elvin',
            age: 30
        }
    ]
}

let obj5 = {
    title: 'Rosalie and Fernando',
    pageCount: 5000,
    genre: 'Romantic',
    authors: [
        {
            name: 'Scotty',
            age: 35
        }
    ]
}

let obj6 = {
    title: 'Cars',
    pageCount: 500,
    genre: 'Documentary',
    authors: [
        {
            name: 'Kate',
            age: 19
        }
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let usersList = [
    {
        name: 'Leanne Graham',
        username: 'Bret',
        password: 'Sincere',
    },
    {
        name: 'Ervin Howell',
        username: 'Antonette',
        password: 'Shanna'
    },
    {
        name: 'Clementine Bauch',
        username: 'Samantha',
        password: 'Nathan'
    },
    {
        name: 'Patricia Lebsack',
        username: 'Karianne',
        password: 'Julianne.OConner'
    },
    {
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        password: 'Lucio_Hettinger'
    },
    {
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        password: 'Karley_Dac'
    },
    {
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        password: 'Telly.Hoeger'
    },
    {
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        password: 'Sherwood'
    },
    {
        name: 'Glenna Reichert',
        username: 'Delphine',
        password: 'Chaim_McDermott',
    },
    {
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        password: 'Rey.Padberg'
    }
];
usersList.forEach((user)=>console.log(user.password));

//---------------Логічні розгалуження:--------------//
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Введи число');

if (x !== 0){
    alert('Вірно');
} else {
    alert('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Введи годину');

if (time < 0 || time > 59) {
    alert('Введено невірний час');
} else {
    switch (true){
        case time < 15:
            alert('в першу частину');
            break;
        case time < 30:
            alert('в другу частину');
            break;
        case time < 45:
            alert('в третю частину');
            break;
        default: alert('в четверту частину');
    }
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введи дату');

    switch (true){
        case day < 0:
        case day > 31:
            alert('Введено невірну дату');
            break;
        case day < 11:
            alert('у першу декаду');
            break;
        case day < 21:
            alert('у другу декаду');
            break;
        default: alert('в третю декаду');
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = +prompt('Введи день неділі');

switch (weekDay){
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wednesday');
        break;
    case 4:
        alert('Thursday');
        break;
    case 5:
        alert('Friday');
        break;
    case 6:
        alert('Saturday');
        break;
    case 7:
        alert('Sunday');
        break;
    default: alert('Введено невірний день неділі');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt('Введи перше число');
let secondNum = +prompt('Введи друге число');

if (firstNum === secondNum) {
    alert('Введені рівні числа');
} else {
    alert(Math.max(firstNum, secondNum));
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x; // треба ввести змінній значення
    if (x === false || x === '' || x === 0 ||  x === null ||  isNaN(x) || typeof x === 'undefined') {
        console.log('default', x);
    } else {
        console.log(typeof x, x);
    }


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach((duration) =>{
    if (duration.monthDuration > 5) {
        console.log('Супер');
    }
}
)
