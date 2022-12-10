import axios from 'axios';

// Menyimpan url endpoint untuk request ke back-end
const api = axios.create({
  baseURL: 'https://capstone-runding-back-end-production.up.railway.app/',
});

export default api;
