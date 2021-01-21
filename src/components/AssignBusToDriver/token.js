let getToken = localStorage.getItem('authToken');

export const token = `Bearer ${getToken}`;

