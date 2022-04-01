const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#email-address-signup').value;
  const passwordEl = document.querySelector('#password-signup').value;

  console.log(usernameEl)
  console.log(passwordEl)

  const response = await fetch('/api/user/signup', {
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

  document.location.replace('/');
};

document
  .querySelector('#signup-form')
  .addEventListener('click', signupFormHandler);