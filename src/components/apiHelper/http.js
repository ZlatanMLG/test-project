import axios from 'axios';

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

export { $authHost };