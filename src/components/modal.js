function openModal(popup) {
  popup.classList.add('popup_is-opened');
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', closeModal);
  popup.addEventListener('click', closePopupClick);
  document.addEventListener('keydown', closeEscKey);
};

function closeModal() {
  const popup = document.querySelector('.popup_is-opened');
  if (popup) {
    popup.classList.remove('popup_is-opened');
    const closeButton = popup.querySelector('.popup__close');
    closeButton.removeEventListener('click', closeModal);
    popup.removeEventListener('click', closePopupClick);
    document.removeEventListener('keydown', closeEscKey);
  }
};

function closePopupClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

function closeEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
};

export { openModal, closeModal };