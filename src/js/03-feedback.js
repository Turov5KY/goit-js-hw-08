import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onSaveDataInLocalStorage, 500));

form.addEventListener('submit', onSubmitForm);

onUpdateForm();

function onSaveDataInLocalStorage(evt) {
  evt.preventDefault();

  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();

  if (
    form.elements.email.value.trim() === '' ||
    form.elements.message.value.trim() === ''
  ) {
    alert('All fields must be filled');
    return;
  }

  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function onUpdateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (savedData === null) {
    return;
  }
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}
