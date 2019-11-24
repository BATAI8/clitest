<template>
<div>
    <p>并发请求练习</p>
<van-cell-group>
  <van-cell title="单元格" value="内容" />
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group>
</div>
</template>
<script>
import axios from 'axios'
import { Dialog } from 'vant';

export default {
  created(){
    axios.all([
      axios.get('http://127.0.0.1:5000/text'),
      axios.get('http://127.0.0.1:5000/text'),
    ]).then(
      axios.spread((res1,res2)=>{
        console.log(res1,res2)
        
      })
      
    )
  },
   components: {
    [Dialog.Component.name]: Dialog.Component
  }
};
</script>
<style scoped>

</style>