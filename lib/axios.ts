// lib/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`, // All requests will be prefixed with /api
  withCredentials: true, // If using cookies/sessions
});
console.log(`Api url ${process.env.NEXT_PUBLIC_API_URL}`);

// 🔐 Request Interceptor – attach token (if using JWT)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ❌ Response Interceptor – handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized — maybe redirect to login?');
      // router.push('/login') if you're inside a React component
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
