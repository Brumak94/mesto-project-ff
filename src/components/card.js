import { deleteCard, likeCard, unlikeCard } from './api.js';

function createCard(cardData, userId, onDelete, onLike, openImg) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeCount.textContent = cardData.likes.length;

  const isLiked = cardData.likes.some(like => like._id === userId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  const isOwner = cardData.owner._id === userId;
  deleteButton.style.display = isOwner ? "block" : "none";

  likeButton.addEventListener("click", () => {
    onLike(cardData, likeButton, likeCount);
  });

  if(isOwner) {
    deleteButton.addEventListener("click", () => {
      onDelete(cardData._id, cardElement);
    })
  }

  cardImage.addEventListener("click", () => {
    openImg(cardData);
  });

  return cardElement;
};

function handleLike(cardData, likeButton, likeCount) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  const methodLike = isLiked ? unlikeCard : likeCard;
  methodLike(cardData._id).then(updatedCard => {
    likeCount.textContent = updatedCard.likes.length;
    likeButton.classList.toggle("card__like-button_is-active");
  })
  .catch(err => console.log('Ошибка при обновлении лайка:', err))
};

function handleDelete(cardId, cardElement) {
  deleteCard(cardId)
  .then(() => {
    cardElement.remove() 
  })
  .catch(err => console.log('Ошибка удаления карточки:', err))
};

export {createCard, handleDelete, handleLike};