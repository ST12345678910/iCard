const logout = async function () {
  const response = await fetch('/api/userRoutes/logout', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#userLogout').addEventListener('click', logout);