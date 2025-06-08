import './index.css';
import { initialCards } from './components/cards.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNew = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementProfile = document.querySelector('.popup_type_edit .popup__form');
const formElementCard = document.querySelector('.popup_type_new-card .popup__form');
const imagePopupImg = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');
const cardsContainer = document.querySelector(".places__list");
const placeInput = document.querySelector('.popup__input_type_card-name');
const linkInput = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

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

function handleImg(cardImage) {
  openModal(popupImage);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
  imagePopupImg.alt = `Изображение места: ${cardImage.name}`;
}

function renderCard(cardData, typeAppend = 'append') {
  const card = createCard(cardData, handleDelete, handleLike, handleImg);
  
  if (typeAppend === 'prepend') {
    cardsContainer.prepend(card);
  } else {
    cardsContainer.appendChild(card);
  }
}

initialCards.forEach(cardData => renderCard(cardData, handleImg));

buttonEdit.addEventListener('click', () => {
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
  openModal(popupEdit)
});
buttonAdd.addEventListener('click', () => openModal(popupNew));

formElementCard.addEventListener('submit', (e) => handleFormCard(e, renderCard));
formElementProfile.addEventListener('submit', profileFormEdit);
