import './index.css';
import './components/api.js';
import { initialCards } from './components/cards.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { validationConfig, popupEdit, popupNew, popupImage, buttonEdit, buttonAdd, formElementProfile, formElementCard, imagePopupImg, imagePopupCaption, cardsContainer, placeInput,linkInput, profileTitle, profileDescription, nameInput, jobInput } from './components/constants.js';
import { getCards, initialProfile, editProfile, addNewCard, deleteCard } from './components/api.js';


function profileFormEdit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value.trim();
  const jobValue = jobInput.value.trim();

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  editProfile({name: nameValue, about: jobValue})
  nameInput.value = '';
  jobInput.value = '';
  closeModal();
};

function handleFormCard(evt, renderCard, addNewCard) {
  evt.preventDefault();

  const placeValue = placeInput.value.trim();
  const linkValue = linkInput.value.trim();
  
  addNewCard({name: placeValue, link: linkValue})
  .then((newCardData) => {
    renderCard(newCardData, 'prepend')
    evt.target.reset();
    closeModal();
  });
  
};

function handleImg(cardImage) {
  openModal(popupImage, clearValidation);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
  imagePopupImg.alt = `Изображение места: ${cardImage.name}`;
};

function renderCard(cardData, typeAppend = 'append') {
  const card = createCard(cardData, userId, handleDelete, handleLike, handleImg);
  
  if (typeAppend === 'prepend') {
    cardsContainer.prepend(card);
  } else {
    cardsContainer.appendChild(card);
  }
};

enableValidation(validationConfig);
clearValidation(formElementProfile, validationConfig);
clearValidation(formElementCard, validationConfig);

let userId = '';

Promise.all([initialProfile(), getCards()]).then(([userData, cards]) => {
  userId = userData._id;
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  cards.forEach(cardData => renderCard(cardData, handleImg));
}).catch(err => {
  console.log('Ошибка при загрузке данных:', err)
});

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
  openModal(popupNew, clearValidation, validationConfig)
});

formElementCard.addEventListener('submit', (e) => handleFormCard(e, renderCard, addNewCard));
formElementProfile.addEventListener('submit', profileFormEdit);
