import axios from 'axios';

const acessToken = process.env.REACT_APP_GITHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${acessToken}`,
  },
});

export default api;
