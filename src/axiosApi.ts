import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://dani4444-fr-default-rtdb.europe-west1.firebasedatabase.app',
});

export default axiosApi;