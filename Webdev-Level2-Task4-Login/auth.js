function hashPassword(password) {
  // Simple djb2-based hash — works in all contexts including file:// URLs.
  // crypto.subtle requires HTTPS or localhost (secure context) and fails silently
  // when opened directly as a local file.
  let hash = 5381;
  for (let i = 0; i < password.length; i++) {
    hash = ((hash << 5) + hash) ^ password.charCodeAt(i);
    hash |= 0; // keep it 32-bit
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function isValidPassword(password) {
  return /^(?=.*\d).{8,}$/.test(password);
}

function findUserByIdentifier(identifier) {
  const users = getUsers();
  const value = identifier.trim().toLowerCase();
  return users.find(
    (u) => u.username.toLowerCase() === value || u.email.toLowerCase() === value
  );
}

function setSession(username) {
  localStorage.setItem(
    'session',
    JSON.stringify({ username, loggedInAt: Date.now() })
  );
}

function getSession() {
  return JSON.parse(localStorage.getItem('session'));
}

function clearSession() {
  localStorage.removeItem('session');
}

function requireAuth() {
  if (!getSession()) {
    window.location.href = 'index.html';
  }
}