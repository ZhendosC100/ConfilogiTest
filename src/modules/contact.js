const contact = () => {
  const contactForm = document.querySelector('.contact_form');
  const contactInput = contactForm.querySelector('.contact_form__email');
  const inputWrapper = contactForm.querySelector('.input_wrapper');
  const contactBtn = contactForm.querySelector('.contact_btn');

  let patt = /^[^@]+@[^@.]+\.[^@]+$/;
  let result = '';

  const removeErrorMessage = () => {
    inputWrapper.classList.remove('input_wrapper-active');
  };

  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    result = contactInput.value.match(patt);

    if(contactInput.value === '' || result === null) {
      inputWrapper.classList.add('input_wrapper-active');
    } else {
      removeErrorMessage()
    }
  });

  contactInput.addEventListener('input', () => {
    removeErrorMessage();
  });


};

export default contact;