const loginFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector('#email-address');
  const password = document.querySelector('#password');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to login');
  }

  document.location.replace('/');
};

document
  .querySelector('#login-btn')
  .addEventListener('click', loginFormHandler);
