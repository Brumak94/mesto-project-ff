import {handleImg} from './modal.js';

const cardsContainer = document.querySelector('.places__list');

function createCard(cardData, onDelete, onLike, openImg) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  likeButton.addEventListener('click', () => {
    onLike(likeButton)
  });

  deleteButton.addEventListener('click', () => {
    onDelete(cardElement);
  });

  cardImage.addEventListener('click', () => {
    openImg(cardData)
  });

  return cardElement;
};

function handleLike(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active')
};

function handleDelete(cardElement) {
  cardElement.remove();
};

function renderCard(cardData) {
  const card = createCard(cardData, handleDelete, handleLike, handleImg);
  cardsContainer.appendChild(card);
};

export { cardsContainer,createCard,handleLike,handleDelete,renderCard };