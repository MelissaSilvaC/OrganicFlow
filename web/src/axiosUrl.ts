import axios from 'axios';

const api = axios.create({
  baseURL: 'https://organicflow-server.vercel.app/',
});

const token = localStorage.getItem('token'); // Obtendo o token do localStorage

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Adicionando o token ao cabeçalho
}

export default api;
