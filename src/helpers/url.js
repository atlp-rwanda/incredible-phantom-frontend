export const BACKEND_URL = 'https://incredible-phantom.herokuapp.com';
export const token = localStorage.getItem('authToken');
export const BACKEND_TOKEN = `Bearer ${token}`;
const userId = JSON.parse(localStorage.getItem('loggedInUser'));
export const Id= userId.id
