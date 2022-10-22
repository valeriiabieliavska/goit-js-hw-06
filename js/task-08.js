"use strict";

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
 
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}



//  Метод preventDefault() интерфейса Event сообщает User agent,
//     что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно. страница не перезагружается
//  event.currentTarget.reset() - после отправки данных форма становиться пустой 