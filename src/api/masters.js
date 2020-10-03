
/*import httpClient from './httpClient';
import axios from 'axios';
const END_POINT = '/masters';

// masters/{id} 
// GET masters/{id}/videos/intro

const getCountries = async (currencyCode) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
return response.data.map(country => country.name);
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};

export async function LoadNewInto(formData) {
  alert("LoadNewInto");

  try {
    const response = await httpClient.post(END_POINT,  formData,
    {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }
    );
    return response.data;
  } catch (error) {
    alert("error");
    const errorCode = response.errorCode;
    console.log(errorCode);
    throw new Error(`Unable to load intro, code: ${errorCode}`);
  }
}

export async function LoadNewLesson() {

}
*/