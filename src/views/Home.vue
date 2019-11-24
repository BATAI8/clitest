<template>
  <div class="home">
   <List></List>
     
   <Cont></Cont>
  <p> <router-link to='/car'>购物车</router-link></p>
  <p> <router-link to='/axioslx'>数据请求练习</router-link></p>
  <p> <router-link to='/bf'>并发请求练习</router-link></p>
  <p> <router-link to='/axiossz'>axis实战</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import Cont from '@/components/Cont.vue'
export default {
  name: 'home',
  components: {
    List,
    Cont
  }
}
</script>
