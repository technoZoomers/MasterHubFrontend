import httpClient from "./httpClient";
const THEMES_END_POINT = '/themes';

export async function GetAllThemes() {
    const response = await httpClient.get(THEMES_END_POINT);
    if (response.status !== 200) {
      throw new Error(`Error to get master's info: ${response.status}`);
    }
    return response;
}