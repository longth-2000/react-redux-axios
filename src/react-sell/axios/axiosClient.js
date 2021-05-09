import axios from 'axios'
import * as Config from "../../react-axios/constant/Config"
export default function axiosClient (endpoint, method, data){
    return axios ({
        url: `${Config.URL}/${endpoint}`,
        method: method,
        data: data
    }).catch(err => {
        console.log(err)
    })
}