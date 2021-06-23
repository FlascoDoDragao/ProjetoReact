import axios from 'axios';

const api = axios.create({
    baseURL:"https://ecommerceflascododragao.herokuapp.com/"
})

export default api;