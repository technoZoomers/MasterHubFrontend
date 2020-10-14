import httpClient from "./httpClient";
const LANGUAGES_END_POINT = '/languages';

export async function GetAllLanguages() {
    const response = await httpClient.get(LANGUAGES_END_POINT);
    if (response.status !== 200) {
      throw new Error(`Error to get master's info: ${response.status}`);
    }
    return response;
}