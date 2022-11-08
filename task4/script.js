
const replace = document.querySelector('a');

replace.addEventListener('click', () => {

    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
    console.log('Текст изменён на', userText);
    event.preventDefault()
})
