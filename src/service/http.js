import axios from 'axios'
import service from './contactApi'
import {Toast} from 'vant'
let instance =axios.create({
  baseURL:'http://127.0.0.1:5000',
  timeout:1000,
})
const Http={}; //包裹请求方法的容器

for(let key in service){
  let api = service[key]

  Http[key] = async function(
    params,//请求参数get,url,put,post,patch(data)
    isFormDate=false,//标识是否是from-data请求
    config={}//配置参数
  ){
    let newParams={}
    
    if(params && isFormDate){
      newParams = new FormData()
      for(let i in params){
        
        newParams.append(i,params[i])
      }
    }else{
      newParams = params
    }

    // 不同请求判断
   
    let response ={};//请求的返回值
    // api['method'] 不等于 api.method,
    if(api['method'] === 'put'|| api['method'] === 'post'){
     try{
      response = await instance[api['method']](api.url,newParams,config)
     }catch(err){
      response = err
     }

    }else if(api['method'] === 'get'){
      console.log(api['method'])
      // get请求
      config.params = newParams
      try{
        response = await instance[api['method']](api.url,config)
  
       }catch(err){
        response = err
       }
    }
    return response //返回的相应值
  }

}


//请求 拦截器的添加
instance.interceptors.request.use(config=>{
  Toast.loading({
    mask:false,
    duration:0,
    forbidClick:true,
    message:'加载中。。。'

  })
  return config
},()=>{
  // 请求错误
  Toast.clear()
  Toast('请求错误')
})

//响应 拦截器的添加
instance.interceptors.response.use(res=>{
  Toast.clear()
  return res.data
},()=>{
  // 请求错误
  Toast.clear()
  Toast('请求错误')
})

export default Http