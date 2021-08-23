import axios from 'axios';

const token =
  localStorage.getItem('token') !== null
    ? JSON.parse(localStorage.getItem('token') || '')
    : '';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});
console.log(token.length);
if (token.length > 0)
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
