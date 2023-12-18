import axios from 'axios';

// creating a URL base
export const clientAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
})