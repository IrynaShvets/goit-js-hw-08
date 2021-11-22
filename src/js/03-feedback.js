import  throttle    from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

populateInput();
function onFormSubmit(event) {
    event.preventDefault();
    console.log("Відправляємо форму");
    console.log({
    email: form.email.value,
    message: form.message.value,
});
    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput() {
const formData = {
    email: form.email.value,
    message: form.message.value,
};
    
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));  
}

function populateInput() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    const parsedForm = JSON.parse(savedForm);
    
    if (savedForm) {
        form.email.value = parsedForm.email;
        form.message.value = parsedForm.message;
    } 
}
