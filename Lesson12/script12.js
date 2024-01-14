// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

// fetch('https://dummyjson.com/users')
//
//     .then(value => value.json())
//     .then(({users}) => {
//         console.log(users);
//
//         let ul = document.getElementById('list');
//
//         for (let user of users) {
//             let li = document.createElement('li');
//             let a = document.createElement('a');
//             a.innerText = `${user.id} - ${user.username}`;
//             a.href = './user-details.html?id=' + JSON.stringify(user);
//
//             li.appendChild(a);
//             ul.appendChild(li);
//         }
//
//     });

const foo = async () => {
    let api = await fetch('http://jsonplaceholder.typicode.com/users');
    let users = await api.json();
    console.log(users);
    let wrap = document.getElementById('wrap');

    for (const user of users) {
        let div = document.createElement('div');
        let btn = document.createElement('button');

        div.innerText = `${user.id} - ${user.name} `;
        btn.innerText = 'more';

        div.appendChild(btn);
        wrap.appendChild(div);

        btn.onclick = function () {
            location.href = `./user-details.html?userID=${user.id}`;
        }
    }
}

void foo();