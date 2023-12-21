// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form = document.forms.creator;

form.onsubmit = function (e) {
    e.preventDefault();

    let wrapper = document.createElement('div');
    let name = document.createElement('div');
    let surname = document.createElement('div');
    let age = document.createElement('div');

    name.innerText = `name: ${this.name.value}`;
    surname.innerText = `name: ${this.surname.value}`;
    age.innerText = `name: ${this.age.value}`;

    wrapper.classList.add('item', 'wrapper');

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);
}