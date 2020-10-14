import httpClient from "./httpClient";
const MASTER_END_POINT = '/masters';

export async function LoadNewVideo(formData, userId) {
  httpClient.post(MASTER_END_POINT + "/" + userId + "/videos/create", formData, 
  {
    headers: {"Content-Type" :"multipart/form-data"},
  });
  if (response.status !== 200) {
    throw new Error(`Error to load video ${response.status}`);
  }
  return response;
}

export async function GetMasterInfo(userId) {
  const response = await httpClient.get(MASTER_END_POINT + "/" + userId);
  if (response.status !== 200) {
    throw new Error(`Error to get master's info: ${response.status}`);
  }
  return response;
}

export async function GetMasterVideosInfo(userId) {
  const response = await httpClient.get(MASTER_END_POINT + "/" + userId + "/videos");
  if (response.status !== 200) {
    throw new Error(`Error to get master's videos: ${response.status}`);
  }
  return response;
}

export async function GetVideoById(userId, videoId) {
  const response = await httpClient.get(MASTER_END_POINT + "/" + userId + "/videos/" + videoId, {responseType: 'blob'});
  if (response.status !== 200) {
    throw new Error(`Error to get video by id: ${response.status}`);
  }
  return response;
}

export async function GetVideoDataById(userId, videoId) {
  let response = await httpClient.get(MASTER_END_POINT + "/" + userId + "/videos/" + videoId + "/data");
  if (response.status !== 200) {
    throw new Error(`Error to get video data by id: ${response.status}`);
  }
  return response;
}