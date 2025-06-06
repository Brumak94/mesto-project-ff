import './index.css';
import { initialCards } from './components/cards.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
import { openModal, handleFormCard, profileFormEdit } from './components/modal.js';

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

buttonEdit.addEventListener('click', () => openModal(popupEdit));
buttonAdd.addEventListener('click', () => openModal(popupNew));

formElementCard.addEventListener('submit', (e) => handleFormCard(e, renderCard));
formElementProfile.addEventListener('submit', profileFormEdit); 
