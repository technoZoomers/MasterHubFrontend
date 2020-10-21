import axios from 'axios';

const base = "http://213.219.214.220:5000/";

const httpClient = axios.create({
    baseURL: base,
});

export default httpClient;