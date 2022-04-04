const signupFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector('#email-address-signup').value;
  const password = document.querySelector('#password-signup').value;

  console.log(username)
  console.log(password)

  const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to sign up');
  }

  // document.location.replace('/');
};

document
  .querySelector('#signup-btn')
  .addEventListener('click', signupFormHandler);