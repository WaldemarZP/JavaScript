// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'Vova', 'Smith', 'VovaS@gmail.com', 380661234567);
console.log(user);

let arr1 = [
    new User(5, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
    new User(8, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
    new User(6, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
    new User(3, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
    new User(1, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
    new User(4, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
    new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
    new User(2, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777'),
];
// for (let i = 0; i < 11; i++) {
//     arr1.push(new User(i+1, 'Vova_' + (i+1), 'Smith', 'VovaS_'+(i+1)+'@gmail.com', 380661234567));
// }
console.log(arr1);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr1.filter((user) => !(user.id % 2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr1.sort((u1, u2) => (u1.id - u2.id)));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {

    constructor(id, name, surname, email, phone, order) {
        User.call(this, id, name, surname, email, phone);
        this.order = order;
    }
}

let clients = new Client (1, 'Vova', 'Smith', 'VovaS@gmail.com', 380661234567, 'kokos')
console.log(clients);

let arr2 = [
    new Client (1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client (2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client (3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client (4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client (5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear']),
    new Client (6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client (7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client (8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
];
// for (let i = 0; i < 11; i++) {
//     arr2.push(new Clients(i+1, 'Vova_' + (i+1), 'Smith', 'VovaS_'+(i+1)+'@gmail.com', 380661234567, ['kokos', 'abrikos', 'banana']));
// }
console.log(arr2);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(arr2.sort((c1, c2) => c1.order.length - c2.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, company, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    this.info = () => {
        console.log('-------------INFO-------------');
        console.log('model :', this.model);
        console.log('company :', this.company);
        console.log('year :', this.year);
        console.log('maxSpeed :', this.maxSpeed);
        console.log('engineCapacity :', this.engineCapacity);
        console.log('driver :', this.driver);
        console.log('-------------INFO-------------');
    }
    this.increaseMaxSpeed = (newSpeed) => {
        return this.maxSpeed += newSpeed;
    }
    this.changeYear = (newValue) => {
        return this.year = newValue;
    }
    this.addDriver = (driver) => {
        return this.driver = driver;
    }
}

let car = new Car('BMW', 'Bavaria Motors', 2020, 220, 2.2);

car.drive();
car.info();
car.increaseMaxSpeed(10);
car.info();
car.changeYear(2010);
car.info();
car.addDriver({name: 'Jack', age: 30, exp: 5});
car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2{
    constructor (model, company, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.company = company;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    info = () => {
        console.log('-------------INFO CLASS-------------');
        console.log('model :', this.model);
        console.log('company :', this.company);
        console.log('year :', this.year);
        console.log('maxSpeed :', this.maxSpeed);
        console.log('engineCapacity :', this.engineCapacity);
        console.log('driver :', this.driver);
        console.log('-------------INFO CLASS-------------');
    }
    increaseMaxSpeed = (newSpeed) => {
        return this.maxSpeed += newSpeed;
    }
    changeYear = (newValue) => {
        return this.year = newValue;
    }
    addDriver = (driver) => {
        return this.driver = driver;
    }
}

let car2 = new Car2('BMW', 'Bavaria Motors', 2020, 220, 2.2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
car2.info();
car2.changeYear(2010);
car2.info();
car2.addDriver({name: 'Jack', age: 30, exp: 5});
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age)
//         this.footSize = footSize;
//     }
// }
// class Prince extends Human {
//     constructor(name, age, bootSize) {
//         super(name, age)
//         this.bootSize = bootSize;
//     }
class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelArr = [
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46),
];

class Prince {

    constructor(name, age, bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
    findCinderella1(arr){
        for (const cinderella of arr) {
            if (cinderella.footSize === this.bootSize){
                return cinderella;
            }
        }
    }
    findCinderella2(arr){
        return arr.find((cinderella) => cinderella.footSize === this.bootSize);
    }
}
 
let prince = new Prince('Vova', 30, 39);
let cinderella1 = prince.findCinderella1(popelArr);
console.log('cinderella1: ', cinderella1);

let cinderella2 = prince.findCinderella2(popelArr);
console.log('cinderella2: ', cinderella2);