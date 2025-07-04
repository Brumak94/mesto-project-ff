const popupEdit = document.querySelector('.popup_type_edit');
const popupNew = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupAvatar = document.querySelector('.popup_type_avatar');
const popupDeleteCard = document.querySelector('.popup_type_delete-card');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const formElementProfile = document.querySelector('.popup_type_edit .popup__form');
const formElementCard = document.querySelector('.popup_type_new-card .popup__form');
const formElementAvatar = document.querySelector('.popup_type_avatar .popup__form');

const imagePopupImg = popupImage.querySelector('.popup__image');
const imagePopupCaption = popupImage.querySelector('.popup__caption');
const cardsContainer = document.querySelector(".places__list");
const placeInput = document.querySelector('.popup__input_type_card-name');
const linkInput = document.querySelector('.popup__input_type_url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const avatarInput = document.querySelector('.popup__input_type_avatar');
const profileImage = document.querySelector('.profile__image');
const deleteConfirmButton = popupDeleteCard.querySelector('.popup__button');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

export { popupDeleteCard, deleteConfirmButton, popupAvatar, formElementAvatar, avatarInput, profileImage, validationConfig, popupEdit, popupNew, popupImage, buttonEdit, buttonAdd, formElementProfile, formElementCard, imagePopupImg, imagePopupCaption, cardsContainer, placeInput,linkInput, profileTitle, profileDescription, nameInput, jobInput };