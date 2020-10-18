import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw3-backend.herokuapp.com',
})

export default api;