 import axios from 'axios';

 export default axios.create({
     baseURL: 'https://api.unsplash.com',
     headers:{
         Authorization:
         'Client-ID jVuUjIH3AzRcxV6pjGgXByEIQO29bZ3bHVTxFm3Max8'
     }
 })