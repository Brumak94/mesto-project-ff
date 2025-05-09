// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');

function createCard(cardData, onDelete) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener('click', () => {
    onDelete(cardElement);
  });
  return cardElement;
}

function handleDelete(cardElement) {
  cardElement.remove();
}

initialCards.forEach(cardData => {
  const card = createCard(cardData, handleDelete);
  cardsContainer.appendChild(card);
});