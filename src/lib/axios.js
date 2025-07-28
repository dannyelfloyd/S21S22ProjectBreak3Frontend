import axios from "axios";

const api = axios.create({
    baseURL: 'https://s21s22projectbreak3backend.onrender.com/api',
})

export default api;