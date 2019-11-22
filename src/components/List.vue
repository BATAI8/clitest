<template>
  <div class="box">
    <p>热门选择</p>
    <ul class="lilist">
      <li @click="test1">家人</li>
      <li @click="test2">朋友</li>
      <li @click="test3">同事</li>
    </ul>
  </div>
</template>
<script>
import Msg from './Msg.js'
export default {
  methods:{
    test1:function(){
     Msg.$emit('val','1')
    },
    test2:function(){
      Msg.$emit('val','2')
    },
    test3:function(){
      Msg.$emit('val','3')
    },
  }
  
}
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
.box{
  float: left;
}
p{
  width:100px;
  text-align:center;
  background:pink;
  margin-bottom:10px;
}
.lilist li{
   width:100px;
   text-align:center;
  list-style: none;
  background:#555;
  margin-bottom:10px;
  cursor: pointer;
}
</style>