const popup = () => {
  const modalTab = document.querySelector('.modal_tab');
  const closeBtn = modalTab.querySelector('.close');
  const header = document.querySelector('.header');
  let modalShowIndex = true;
  let viewPortPoint = document.documentElement.clientWidth;

  const showModal = () => {
    modalTab.style.display = 'flex';
  };

  const hideModal = () => {
    closeBtn.addEventListener('click', () => {
      modalTab.style.display = 'none';
    });
  }

  const autoShowModal = () => {
    if (viewPortPoint > 576) {
      header.addEventListener('mouseover', () => {
        if (modalShowIndex) {
          showModal();
          modalShowIndex = false;
        }
      });
    }
  };

  setTimeout(showModal, 30000);
  autoShowModal();
  hideModal();
};

export default popup;