export const BACKEND_URL = 'https://incredible-phantom.herokuapp.com';
export const token = localStorage.getItem('authToken');
export const BACKEND_TOKEN = `Bearer ${token}`;
export const id = localStorage.getItem('loggedInUser');
