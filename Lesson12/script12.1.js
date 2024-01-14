// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


let userID = new URL(location.href).searchParams.get('userID');
// console.log(userID);

const foo = async () => {
    let api = await fetch(`http://jsonplaceholder.typicode.com/users/${userID}`);
    let user = await api.json();

    let wrap = document.getElementById('wrap');

    let ul = document.createElement('ul');
    let id = document.createElement('li');
    let username = document.createElement('li');
    let email = document.createElement('li');
    let phone = document.createElement('li');
    let street = document.createElement('li');
    let suite = document.createElement('li');
    let city = document.createElement('li');
    let zipcode = document.createElement('li');
    let lat = document.createElement('li');
    let lng = document.createElement('li');
    let website = document.createElement('li');
    let companyName = document.createElement('li');
    let catchPhrase = document.createElement('li');
    let bs = document.createElement('li');

    id.textContent = `id: ${user.id}`;
    username.textContent = `username: ${user.username}`;
    email.textContent = `email: ${user.email}`;
    phone.textContent = `phone: ${user.phone}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    city.textContent = `city: ${user.address.city}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;
    lat.textContent = `lat: ${user.address.geo.lat}`;
    lng.textContent = `lng: ${user.address.geo.lng}`;
    website.textContent = `website: ${user.website}`;
    companyName.textContent = `companyName: ${user.company.name}`;
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    bs.textContent = `bs: ${user.company.bs}`;

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    wrap.appendChild(ul);

}
void foo();

