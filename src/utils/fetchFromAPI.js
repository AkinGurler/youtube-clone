import axios from "axios";


const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    /* method: 'GET', it is unnecessary we use axios */
    url:BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'e61d572c6fmsh56b7b8664e53b68p154217jsn456ab51a0845',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
   const {data} = await axios.get(`${BASE_URL}/${url}`,options)
   return data;
  }