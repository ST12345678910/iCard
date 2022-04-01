const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#email-address-signup');
  const passwordEl = document.querySelector('#password-signup');

  const response = await fetch('/api/userRoutes/signup', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/index');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);