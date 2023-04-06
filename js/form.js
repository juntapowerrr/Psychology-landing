const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidPhone = phone => {
    const re = /^((?:\+?3)?8)?[\s\-\(]*?(0\d{2})[\s\-\)]*?(\d{3})[\s\-]*?(\d{2})[\s\-]*?(\d{2})$/;
    return re.test(phone);
};

const isNonValidName = username => {
    const re = /[0-9]/;
    return re.test(username);
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();

    if (usernameValue === '') {
        setError(username, "Це обов'язкове поле");
    } else {
        setSuccess(username);
    }

    if (phoneValue === '') {
        setError(phone, "Це обов'язкове поле");
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, "Вкажіть дійсний номер телефону");
    } else {
        setSuccess(phone);
    }

    if (usernameValue === '') {
        setError(username, "Це обов'язкове поле");
    } else if (isNonValidName(usernameValue)) {
        setError(username, "Вкажіть дійсне ім'я");
    } else {
        setSuccess(username);
    }
};