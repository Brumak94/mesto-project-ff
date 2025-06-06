const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const placeInput = document.querySelector('.popup__input_type_card-name');
const linkInput = document.querySelector('.popup__input_type_url');

function openModal(popup) {
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
  popup.classList.add('popup_is-opened');
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', closeModal);
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closeModal();
    }
  });
  document.addEventListener('keydown', handleEscKey);
};

function closeModal() {
  const popup = document.querySelector('.popup_is-opened');
  if (popup) {
    popup.classList.remove('popup_is-opened');
    const closeButton = popup.querySelector('.popup__close');
    closeButton.removeEventListener('click', closeModal);
    popup.removeEventListener('click', (evt) => {
    if (evt.target === popup) {
      closeModal();
    }
  });
    document.removeEventListener('keydown', handleEscKey);
  }
};

function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function profileFormEdit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value.trim();
  const jobValue = jobInput.value.trim();
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  nameInput.value = '';
  jobInput.value = '';
  closeModal();
};

function handleFormCard(evt, renderCard) {
  evt.preventDefault();
  const placeValue = placeInput.value.trim();
  const linkValue = linkInput.value.trim();
  renderCard({name: placeValue, link: linkValue}, 'prepend');
  evt.target.reset();
  closeModal();
};

export { openModal, handleFormCard, profileFormEdit };