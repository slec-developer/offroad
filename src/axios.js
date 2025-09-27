import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // or VITE_APP_API_URL if you're using the API endpoint
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const TOKEN = localStorage.getItem('token'); // get user from local storage

    if (TOKEN) {
      config.headers['Authorization'] = 'Bearer ' + TOKEN;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
