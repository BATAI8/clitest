<template>
  <div class="home">
   <List></List>
     
   <Cont></Cont>
   <router-link to='/car'>购物车</router-link>
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
