const mainModal = () => {
  const mainModal = document.querySelector('.main_modal');
  const hamburgerMobile = document.querySelector('.hamburger_mobile');

  const showMobileMenu = () => {
    hamburgerMobile.addEventListener('click', () => {
      hamburgerMobile.classList.toggle('is-active');
      mainModal.classList.toggle('main_modal-active');
    });  
  };

  showMobileMenu();

};

export default mainModal;