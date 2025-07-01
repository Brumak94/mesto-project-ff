const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-41',
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
    'Content-Type': 'application/json'
  }
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function initialProfile() {
  return fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
  })
  .then(handleResponse);
};
 
function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
  })
  .then(handleResponse);
};

function editProfile(data) {
  return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',  
  headers: config.headers,
  body: JSON.stringify(data)
  })
  .then(handleResponse);
};

function addNewCard(data) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data)
  })
  .then(handleResponse);
};

function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handleResponse);
};

function likeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(handleResponse);
};

function unlikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(handleResponse);
};

function avatarEdit(avatarUrl) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar: avatarUrl })
  })
  .then(handleResponse);
};

export { initialProfile, getCards, editProfile, addNewCard, deleteCard, likeCard, unlikeCard, avatarEdit };