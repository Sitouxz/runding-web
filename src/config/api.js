import axios from 'axios';

const api = axios.create({
  baseURL: 'https://capstone-runding-back-end-production.up.railway.app/',
});

export default api;
