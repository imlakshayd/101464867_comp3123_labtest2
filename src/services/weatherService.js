import axios from 'axios';

const API_KEY = '4e110dc414d6f5e49d0dfb4a8c211daa';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Use metric for Celsius
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
