import './index.css';
import './components/api.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import { popupDeleteCard, deleteConfirmButton, popupAvatar, formElementAvatar, avatarInput, profileImage, validationConfig, popupEdit, popupNew, popupImage, buttonEdit, buttonAdd, formElementProfile, formElementCard, imagePopupImg, imagePopupCaption, cardsContainer, placeInput,linkInput, profileTitle, profileDescription, nameInput, jobInput } from './components/constants.js';
import { getCards, initialProfile, editProfile, addNewCard, avatarEdit } from './components/api.js';

let idCardForDelete;
let сardForDelete;
let userId = '';

function renderAvatar(userData) {
  if (userData.avatar) {
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
  } else {
    profileImage.style.backgroundImage = `url(${defaultAvatarPath})`;
  }
}

function profileImgEdit(evt) {
  evt.preventDefault();
  const linkAvatarUrl = avatarInput.value.trim();

  const submitButton = evt.target.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  avatarEdit(linkAvatarUrl)
    .then(userData => {
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    evt.target.reset();
    closeModal();
  })
  .catch((err) => {
    console.log('Ошибка обновления аватара:', err)  
  })
  .finally(() => {
    submitButton.textContent = originalText;
  });  
};

function profileFormEdit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value.trim();
  const jobValue = jobInput.value.trim();
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  
  const submitButton = evt.target.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  editProfile({name: nameValue, about: jobValue})
  .then(() => {
    nameInput.value = '';
    jobInput.value = '';
    closeModal();
  })
  .catch((err) => {
    console.log('Ошибка обновления профиля:', err)  
  })
  .finally(() => {
    submitButton.textContent = originalText;
  }); 
  
};

function handleFormCard(evt, renderCard, addNewCard) {
  evt.preventDefault();
  const placeValue = placeInput.value.trim();
  const linkValue = linkInput.value.trim();

  const submitButton = evt.target.querySelector('.popup__button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Сохранение...';

  addNewCard({name: placeValue, link: linkValue})
  .then((newCardData) => {
    renderCard(newCardData, 'prepend')
    evt.target.reset();
    closeModal();
  })
  .catch((err) => {
    console.log('Ошибка добавления карточки:', err);  
  })
  .finally(() => {
    submitButton.textContent = originalText;
  });
};

function openDeletePopup(cardId, cardElement) {
  openModal(popupDeleteCard);
  idCardForDelete = cardId;
  сardForDelete = cardElement;
};

function handleImg(cardImage) {
  openModal(popupImage, clearValidation, validationConfig);
  imagePopupImg.src = cardImage.link;
  imagePopupCaption.textContent = cardImage.name;
  imagePopupImg.alt = `Изображение места: ${cardImage.name}`;
};

function renderCard(cardData, typeAppend = 'append') {
  const card = createCard(cardData, userId, openDeletePopup, handleLike, handleImg);
  if (typeAppend === 'prepend') {
    cardsContainer.prepend(card);
  } else {
    cardsContainer.appendChild(card);
  }
};

enableValidation(validationConfig);
clearValidation(formElementProfile, validationConfig);
clearValidation(formElementCard, validationConfig);

Promise.all([initialProfile(), getCards()]).then(([userData, cards]) => {
  userId = userData._id;
  profileTitle.textContent = userData.name;
  profileDescription.textContent = userData.about;
  renderAvatar(userData);
  cards.forEach(cardData => renderCard(cardData, handleImg));
}).catch(err => {
  console.log('Ошибка при загрузке данных:', err)
});

deleteConfirmButton.addEventListener('click', () => {
  handleDelete(idCardForDelete, сardForDelete)
  closeModal(popupDeleteCard);
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

profileImage.addEventListener('click', () => {
  avatarInput.value = '';
  openModal(popupAvatar, clearValidation, validationConfig)
});

formElementCard.addEventListener('submit', (e) => handleFormCard(e, renderCard, addNewCard));
formElementProfile.addEventListener('submit', profileFormEdit);
formElementAvatar.addEventListener('submit', profileImgEdit);