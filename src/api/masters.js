import httpClient from "./httpClient";
const MASTER_END_POINT = '/masters';

export async function LoadNewInto(formData, userId) {
  httpClient.post(MASTER_END_POINT + "/" + userId + "/videos/create",
    formData,
  ).then(response => {
    console.log(response.data);
  }).catch(e => {
    console.log(e);
  });
}

export async function GetUserInfo(userId) {
  httpClient.get(MASTER_END_POINT + "/" + userId
  ).then(response => {
    console.log(response.status)
    console.log(response.data)
  })
  .catch(e => {
    console.log(e);
  })
}

export async function GetMasterVideos(userId) {
  httpClient.get(MASTER_END_POINT + "/" + userId + "videos"
  ).then(response => {
    console.log(response.status)
    console.log(response.data)
  })
  .catch(e => {
    console.log(e);
  })
}

export async function GetVideoById(userId, videoId) {
  const response = await httpClient.get(MASTER_END_POINT + "/" + userId + "/videos/" + videoId, {responseType: 'blob'});
  if (response.status !== 200) {
    throw new Error(`Error get video by id: ${response.status}`);
  }
  return response;
}

export async function GetVideoDataById(userId, videoId) {
  let response = await httpClient.get(MASTER_END_POINT + "/" + userId + "/videos/" + videoId + "/data");
  if (response.status !== 200) {
    throw new Error(`Error get video data by id: ${response.status}`);
  }
  return response;
}