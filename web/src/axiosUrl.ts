import axios from 'axios';

const api = axios.create({
  baseURL: 'mysql://apepnj8l8jh2czwiidk8:pscale_pw_e24oiliiwCuMYZY4dfZXSC2HBRqJcOUE15Y75I7vL0D@aws.connect.psdb.cloud/organicflow?sslaccept=strict',
});

const token = localStorage.getItem('token'); // Obtendo o token do localStorage

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Adicionando o token ao cabeçalho
}

export default api;
