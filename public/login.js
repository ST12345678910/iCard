const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#email-address');
  const passwordEl = document.querySelector('#password');

  const response = await fetch('/api/userRoutes/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);