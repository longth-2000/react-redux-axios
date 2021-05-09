import axios from 'axios';
import * as Config from "./constant/Config"
export default function axiosClient(endpoint, method, data) {
  return axios({
    method: method,
    url: `${Config.URL}/${endpoint}`,
    data: data
  }).catch(error => {
    console.log(error)
  });
}