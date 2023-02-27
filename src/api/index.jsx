import axios from '../utils/respons';
import path from './path';


const api = {
  getTestInfo:() => axios.get(path.baseUrl + path.getTestInfo)
}

// 调用方式
// api.getTestInfo().then(res=>{
//   console.log(res.data)
// }) 



export default api;
