import httpClient from "./httpClient";
const END_POINT = '/masters';
// masters/{id} 
// GET masters/{id}/videos/intro


export async function LoadNewInto(formData) {
  httpClient.post(END_POINT,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(function () {
    console.log('Success request');
  }).catch(function () {
      console.log('Failure request');
    });
}

export async function GetUserInfoById(id) {
  httpClient.get(END_POINT + "/" + id,
  ).then(function () {
    console.log('Success request');
  }).catch(function () {
      console.log('Failure request');
  });
}
