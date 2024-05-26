import axios from 'axios';

const API_BASE_URL = 'https://localhost:5011/api';

export const generateShortLink = async (url) => {

  let urlString = JSON.stringify(url);

  const response = await axios.post(`${API_BASE_URL}/generate`, urlString, 
        {
            headers: { 'Content-Type' : 'application/json' }
        }
    ) 
    .catch((error) => console.error("Error on generate api call: ", error));
    
  return response.data;
};

export const getShortLinks = async () => {
  const response = await axios.get(`${API_BASE_URL}/get-all`)
    .catch((error) => console.error("Error on get all api call: ", error));
  return response.data;
};

export const getActualLink = async (hash) => {
    const response = await axios.get(`${API_BASE_URL}/get-original/${hash}`)
        .catch((error) => console.error("Error on get original api call: ", error));
    return response.data;
  };
