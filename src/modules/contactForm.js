export const inputName = document.querySelector('.contact-form-name');
export const inputEmail = document.querySelector('.contact-form-email');
export const inputMessage = document.querySelector('.contact-form-message');
export const contactForm = document.querySelector('#contact-form');
export const btnSubmit = document.querySelector('.contact-form-submit');
export const spinner = document.querySelector('.spinner-container');

const formValues = {
  name: '',
  email: '',
  message: '',
};

const checkForm = () => {
  if (Object.values(formValues).includes('')) {
    btnSubmit.disabled = true;
    return;
  }
  btnSubmit.disabled = false;
};

// send the form
export const sendContatcForm = (e) => {
  e.preventDefault();

  // show the spinner
  spinner.style.display = 'flex';

  setTimeout(() => {
    spinner.style.display = 'none';

    // reset the form
    formValues.name = '';
    formValues.email = '';
    formValues.message = '';
    contactForm.reset();
    checkForm();

    // show the message
    const message = document.createElement('p');
    message.textContent = 'The message was sent successfully';
    message.classList.add('success-message');
    contactForm.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 3000);
  }, 3000);
};

const clearAllerts = (reference) => {
  // verify if there is an alert
  const allert = reference.querySelector('.allert');
  if (allert) {
    allert.remove();
  }
};

const showAllert = (message, reference) => {
  clearAllerts(reference);

  // create the alert
  const error = document.createElement('p');
  error.textContent = message;
  error.classList.add('allert');

  // insert the alert in the DOM
  reference.appendChild(error);
};

// validate the email
const validateEmail = (email) => {
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const result = regex.test(email);
  return result;
};

// Validate the form
const validateForm = (e) => {
  if (e.target.value.trim() === '') {
    showAllert(`The ${e.target.name} field is required`, e.target.previousElementSibling);
    formValues[e.target.name] = '';
    checkForm();
    return;
  }

  if (e.target.type === 'email' && !validateEmail(e.target.value)) {
    showAllert(`The ${e.target.name} field is not valid`, e.target.previousElementSibling);
    formValues[e.target.name] = '';
    checkForm();
    return;
  }

  clearAllerts(e.target.previousElementSibling);

  // Save the form values
  formValues[e.target.name] = e.target.value.trim().toLowerCase();

  // check the object values
  checkForm();
};

export default validateForm;