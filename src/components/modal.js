import { cardsContainer,createCard,handleDelete,handleLike } from './card';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const placeInput = document.querySelector('.popup__input_type_card-name');
const linkInput = document.querySelector('.popup__input_type_url');
const popupImage = document.querySelector('.popup_type_image');
const imagePopupImg = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');
const formElementCard = document.querySelector('.popup_type_new-card .popup__form');

function handleImg(cardImage) {
  openModal(popupImage);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
};

function openModal(popup) {
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
  popup.classList.add('popup_is-opened');
  const overlay = document.createElement('div');
  overlay.classList.add('popup__overlay');
  popup.appendChild(overlay);
  const closeButton = popup.querySelector('.popup__close');
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', handleEscKey);
};

function closeModal() {
  const popup = document.querySelector('.popup_is-opened');
  if (popup) {
    popup.classList.remove('popup_is-opened');
    const closeButton = popup.querySelector('.popup__close');
    closeButton.removeEventListener('click', closeModal);
    const overlay = popup.querySelector('.popup__overlay');
    overlay.removeEventListener('click', closeModal);
    overlay.remove();
    document.removeEventListener('keydown', handleEscKey);
  }
};

function handleEscKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value.trim();
  const jobValue = jobInput.value.trim();
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  nameInput.value = '';
  jobInput.value = '';
  closeModal();
};

function handleFormCard(evt) {
  evt.preventDefault();
  const placeValue = placeInput.value.trim();
  const linkValue = linkInput.value.trim();
  addCard({name: placeValue, link: linkValue});
  formElementCard.reset();
  closeModal();
};

function addCard(cardData) {
  const card = createCard(cardData, handleDelete, handleLike, handleImg);
  cardsContainer.prepend(card);
};

export { openModal, closeModal, handleFormCard, handleFormSubmit, handleImg, addCard, handleEscKey, formElementCard };