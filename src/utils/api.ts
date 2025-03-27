import axios from 'axios';

// Use import.meta.env for Vite environment variables
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default api;