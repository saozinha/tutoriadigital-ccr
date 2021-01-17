import axios from 'axios';

export const Api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

}) 