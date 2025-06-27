// Идентификатор нашей когорты: wff-cohort-41
// Твой токен: 5fb77e1e-63b4-4627-a783-59a1f32db827

function initialProfile() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/users/me', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827'
  }
})
  .then(res => res.json())
}

    
function getCards() {
  return fetch('https://nomoreparties.co/v1/wff-cohort-41/cards', {
  headers: {
    authorization: '5fb77e1e-63b4-4627-a783-59a1f32db827'
  }
})
  .then(res => res.json())
}

export { initialProfile, getCards };