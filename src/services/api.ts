import axios from 'axios';

const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    if (window.location.protocol === 'https:' || !process.env.NEXT_PUBLIC_API_URL) {
      return '/api/v1';
    }
  }
  return process.env.NEXT_PUBLIC_API_URL || '/api/v1';
};

export const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

