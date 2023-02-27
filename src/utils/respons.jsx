import axios from "axios";
import QueryString from "qs";


// https://www.kancloud.cn/yunye/axios/234845
// 错误处理
const errorHandle = (status,info)=>{
  switch(status){
    case 400:
      console.log('语义有误',info);
      break;
    case 401:
      console.log('服务器认证失败',info);
      break;
    case 403:
      console.log('服务器拒绝访问',info);
      break;
    case 404:
      console.log('地址有误',info);
      break;
    case 500:
      console.log('服务器遇到意外',info);
      break;
    case 502:
      console.log('服务器无响应',info);
      break;
    default:
      console.log(info)
      break
  }
}

const instance = axios.create({
  timeout:5000
});

// 请求数据之前
instance.interceptors.request.use(
  config => {
    if(config.method === 'post'){
      config.data = QueryString.stringify(config.data)
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 获取数据前
instance.interceptors.response.use(
  response =>{
    return response.status === 200 ? Promise.resolve(response) :Promise.reject(response)
  },
  error => {
    const { response } = error;
    errorHandle(response.status,response.info)
  }
);

export default instance;