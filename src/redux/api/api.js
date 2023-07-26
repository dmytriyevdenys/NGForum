import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: "https://archdrdr.pythonanywhere.com/api/",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');

  if (refreshToken) {
    try {
      const response = await axiosInstance.post('/token/refresh', { refresh: refreshToken });
      const { access } = response.data;
      Cookies.set('accessToken', access);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Cookies.remove('refreshToken');
      }
      console.error(error);
      throw error;
    }
  }

  return null;
};



axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      originalRequest.headers['Authorization'].includes('Bearer ')
    ) {
      originalRequest._retry = true; 

      try {
        const refreshToken = Cookies.get('refreshToken');
        if (refreshToken) {
          const accessToken = await refreshToken();
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
  
          return axiosInstance(originalRequest);
        }
       
      } catch (refreshError) {
        console.error(refreshError);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);


