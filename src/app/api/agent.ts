import axios, { AxiosResponse } from 'axios';
import { IToDo } from '../models/todo';
axios.defaults.baseURL='http://localhost:5000/apihttp://api.aparat.com/fa/v1/video/video/mostViewedVideos';
const ResponseBody=(response:AxiosResponse)=>response.data;
const requests={
    get:(url:string)=>axios.get(url).then(ResponseBody),
    // post:(url:string, body:{})=>axios.post(url, body).then(ResponseBody),
    // put:(url:string, body:{})=>axios.put(url, body).then(ResponseBody),
    // del:(url:string)=>axios.delete(url).then(ResponseBody)
};
const Films={
    list:()=> requests.get(''),
    // details:(Id:string)=>requests.get('/Activities/${Id}'),
    // create:(activity:IToDo)=>requests.post('/Activities',activity),
    // update:(activity:IToDo)=>requests.put('/Activities/${activity.Id}',activity),
    // delete:(Id:string)=>requests.del('/Activities/${Id}')
}
export default {Films}