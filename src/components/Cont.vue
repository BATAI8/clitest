<template>
  <div >
    <div class="box">{{kk}}</div>
  </div>
</template>
<script>
import Msg from './Msg.js'
export default {
  data(){
   return{
     kk:0
   }
  },
  mounted:function(){
    var _this = this
    Msg.$on('val',function(m){
      _this.kk=m
    })
  }
}
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
.box{
  width: 500px;
  height:300px;
  border:1px solid red;
  float: left;
  margin-left:10px;
}

</style>