import axios from 'axios'
const api="http://www.omdbapi.com/?apikey=7f91b37a&"
export const fetchMovie=(title)=>
{
    //call server
   return axios.get(api + "t=" +title);
}