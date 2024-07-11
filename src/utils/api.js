export const API_BASE_URL = 'https://norma.nomoreparties.space/api';

export async function request(endpoint, options) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (res && res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}