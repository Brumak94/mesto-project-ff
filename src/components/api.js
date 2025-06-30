function initialProfile() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827'
  }
  })
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};
 
function getCards() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
    'Content-Type': 'application/json'
  }
  })
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
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
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
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
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

function likeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

function unlikeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-41/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827',
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
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
  .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

export { initialProfile, getCards, editProfile, addNewCard, deleteCard, likeCard, unlikeCard, avatarEdit };