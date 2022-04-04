// const sequelize = require('../config/connection');
// const multer = require('multer');

const newFormHandler =  function(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const hp = document.querySelector('input[name="hp"]').value;
  const type = document.querySelector('select[name="type"]').value;
  const image = document.querySelector('input[name="image"]').value;
  const attack1name = document.querySelector('input[name="attack1name"]').value;
  const attack1damage = document.querySelector('select[name="attack1damage"]').value;
  const attack1description = document.querySelector('input[name="attack1description"]').value;
  const attack2name = document.querySelector('input[name="attack2name"]').value;
  const attack2damage = document.querySelector('select[name="attack2damage"]').value;
  const attack2description = document.querySelector('input[name="attack2description"]').value;

  console.log({
      name,
      hp,
      type,
      image,
      attack1name,
      attack1damage,
      attack1description,
      attack2name,
      attack2damage,
      attack2description,
    })

   fetch(`/api/card/create`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      hp,
      type,
      image,
      attack1name,
      attack1damage,
      attack1description,
      attack2name,
      attack2damage,
      attack2description,
    }),
    headers: { 'Content-Type': 'application/json' },
    
    
  }).catch((error) => (console.log(error)));

  console.log("test");

  document.location.replace('/loggedin');
};

document
  .querySelector('#newCard')
  .addEventListener('click', newFormHandler);


