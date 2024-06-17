import refs from './refs';

refs.registerForm.addEventListener('input', onFormInput);
refs.phoneInput.addEventListener('input', onPhoneInputChange);

const phoneInputPrefix = '+380 ';

if (!refs.phoneInput.value) {
  refs.phoneInput.value = phoneInputPrefix;
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
