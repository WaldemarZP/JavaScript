//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.checker;
form.onsubmit = function (e) {
    e.preventDefault();
    if (Number(this.age.value) < 18) {
        return alert ('GO away');
    }
    return alert ('Welcome');
}