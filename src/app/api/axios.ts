import axios from 'axios';

const baseURL = process.env['HOST_URL'] || '/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
