import './index.css';
import './components/api.js';
import { initialCards } from './components/cards.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { validationConfig, popupEdit, popupNew, popupImage, buttonEdit, buttonAdd, formElementProfile, formElementCard, imagePopupImg, imagePopupCaption, cardsContainer, placeInput,linkInput, profileTitle, profileDescription, nameInput, jobInput } from './components/constants.js';
import { getCards, initialProfile } from './components/api.js';


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
  openModal(popupImage, clearValidation);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
  imagePopupImg.alt = `Изображение места: ${cardImage.name}`;
};

function renderCard(cardData, typeAppend = 'append') {
  const card = createCard(cardData, handleDelete, handleLike, handleImg);
  
  if (typeAppend === 'prepend') {
    cardsContainer.prepend(card);
  } else {
    cardsContainer.appendChild(card);
  }
};



enableValidation(validationConfig);
clearValidation(formElementProfile, validationConfig);
clearValidation(formElementCard, validationConfig);

initialProfile();
getCards().then((res) => {
  res.forEach(cardData => renderCard(cardData, handleImg));
});
// initialCards.forEach(cardData => renderCard(cardData, handleImg));

buttonEdit.addEventListener('click', () => {
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;
  nameInput.value = currentName;
  jobInput.value = currentJob;
  openModal(popupEdit, clearValidation, validationConfig)
});

buttonAdd.addEventListener('click', () => {
  placeInput.value = '';
  linkInput.value = '';
  openModal(popupNew, clearValidation, validationConfig)});

formElementCard.addEventListener('submit', (e) => handleFormCard(e, renderCard));
formElementProfile.addEventListener('submit', profileFormEdit);
