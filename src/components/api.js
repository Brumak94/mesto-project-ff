// Идентификатор нашей когорты: wff-cohort-41
// Твой токен: 5fb77e1e-63b4-4627-a783-59a1f32db827

function initialProfile() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827'
  }
  })
  .then(res => res.json())
};

    
function getCards() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
    'Content-Type': 'application/json'
  }
  })
  .then(res => res.json())
};

function editProfile(data) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
  method: 'PATCH',  
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(res => res.json())
};

function addNewCard(data) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
    method: 'POST',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
};

function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
    
  })
  .then(res => res.json())
};

function likeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
};

function unlikeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
};

function avatarEdit(avatarUrl) {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ avatar: avatarUrl })
  })
  .then(res => res.json())
};
export { initialProfile, getCards, editProfile, addNewCard, deleteCard, likeCard, unlikeCard, avatarEdit };