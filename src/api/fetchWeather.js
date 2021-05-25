import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2e39744bb82cdaf7a7ff816e276ccd2b';

export const fetchWeather = async query => {
    const response = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return response.data;
};
