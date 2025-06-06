import './index.css';
import { initialCards } from './components/cards.js';
import { renderCard } from './components/card.js';
import { openModal, handleFormCard, handleFormSubmit,formElementCard } from './components/modal.js';

const popupEdit = document.querySelector('.popup_type_edit');
const popupNew = document.querySelector('.popup_type_new-card');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const formElementProfile = document.querySelector('.popup_type_edit .popup__form');

initialCards.forEach(renderCard);
buttonEdit.addEventListener('click', () => openModal(popupEdit));
buttonAdd.addEventListener('click', () => openModal(popupNew));
formElementCard.addEventListener('submit', handleFormCard);
formElementProfile.addEventListener('submit', handleFormSubmit); 
