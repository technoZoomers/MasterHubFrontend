import axios from 'axios';

const base = "https://sleepy-brushlands-78726.herokuapp.com";

const httpClient = axios.create({
    baseURL: base,
    timeout: 5000,
});

export default httpClient;