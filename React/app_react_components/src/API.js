import axios from 'axios';


const getTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

const getWeatherinfo = async (q) => {
    return await axios.get(`http://api.weatherstack.com/current?access_key=7431c1d9d4a376a5014bdbc0d55f9a7c&query=${q}`);
}
export {
    getTodos,
    getWeatherinfo
}