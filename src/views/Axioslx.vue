<template>
<div>
    <p>数据请求练习</p>
</div>
</template>
<script>
import axios from 'axios'
export default {
  created(){
    // 不同的写法
    // axios.get('http://127.0.0.1:5000/text').then(res=>{
    //   console.log(res.data.imgdata)
    // })
    // 带参数
    //     axios.get('http://127.0.0.1:5000/text',{params:{
    //       id:12,
    //     }}).then(res=>{
    //       res.data.imgdata
    //   // console.log()
    // })
      // 不同的写法
    // axios({
    //   method:'get',
    //   url:'http://127.0.0.1:5000/text',
    //   params:{
    //     id:12
    //   }
    // }).then(res=>{
    //   res.data.imgdata
    // })

    // post
    let data={
      id:12
    }
    axios.post('http://127.0.0.1:5000/text',data).then(res=>{
      console.log(res.data.imgdata)
    })
  }
};
</script>
<style scoped>

</style>