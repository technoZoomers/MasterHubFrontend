import httpClient from "./httpClient";
const MASTER_END_POINT = '/masters';

export async function GetSearch(theme) {
    const response = await httpClient.get(MASTER_END_POINT + '?search=' + theme);
    if (response.status !== 200) {
        throw new Error(`Error to get master's info: ${response.status}`);
    }
    return response;
}

export async function SearchAllMasters() {
    const response = await httpClient.get(MASTER_END_POINT);
    if (response.status !== 200) {
        throw new Error(`Error to get master's info: ${response.status}`);
    }
    return response;
}

export async function GetSearchFilters(theme, query) {
    console.log(MASTER_END_POINT + '?search=' + theme + query)
    const response = await httpClient.get(MASTER_END_POINT + '?search=' + theme + query);
    if (response.status !== 200) {
        throw new Error(`Error to get master's info: ${response.status}`);
    }
    return response;
}