import refs from './refs';

refs.registerForm.addEventListener('input', onFormInput);
refs.registerForm.addEventListener('submit', onFormSummit);
refs.phoneInput.addEventListener('input', onPhoneInputChange);

function onFormSummit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    console.log(value);
    console.log(key);
  });
}

function onFormInput(e) {
  const data = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const values = Object.values(data);
  const isEmptyField = values.some((value) => !value);

  refs.submitFormBtn.disabled = isEmptyField ? true : false;
}

function onPhoneInputChange(e) {}
