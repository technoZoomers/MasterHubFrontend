import axios from 'axios';

const base = "https://sleepy-brushlands-78726.herokuapp.com";

const httpClient = axios.create({
    baseURL: base,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
});

export default httpClient;