import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date,description&key=ee567e86&city_name=Peruibe,SP',
});

export default api;