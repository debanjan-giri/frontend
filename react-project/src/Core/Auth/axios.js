import axios from 'axios';

const API_URL = 'https://your-api.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors globally (e.g., 401, 403)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Redirect to login or refresh token
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
