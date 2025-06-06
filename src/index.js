import './index.css';
import { initialCards } from './components/cards.js';
import { renderCard } from './components/card.js';
import { openModal, handleFormCard, handleFormSubmit } from './components/modal.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNew = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementProfile = document.querySelector('.popup_type_edit .popup__form');
const formElementCard = document.querySelector('.popup_type_new-card .popup__form');

const imagePopupImg = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');

function handleImg(cardImage) {
  openModal(popupImage);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
}

initialCards.forEach(cardData => renderCard(cardData, handleImg));

buttonEdit.addEventListener('click', () => openModal(popupEdit));
buttonAdd.addEventListener('click', () => openModal(popupNew));

formElementCard.addEventListener('submit', (e) => handleFormCard(e, handleImg));
formElementProfile.addEventListener('submit', handleFormSubmit); 
