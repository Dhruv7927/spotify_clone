import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://spotify-backend-pvtu.onrender.com/api" : "https://spotify-backend-pvtu.onrender.com/api/api"
});