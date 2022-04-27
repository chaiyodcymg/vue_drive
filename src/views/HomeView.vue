<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <div>Home</div>
   <div v-if="data != null">
     {{data.filenames[0]}}
<div  v-for="item in data.filenames" :key="item">
  <img :src="item.urlpreview" style="width:80px" alt="">
</div>
     
   </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'HomeView',
 data(){
   return{
     data:null
   }
 }
 ,
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
, async created(){
 await axios.get("http://localhost:3001/files/")
  .then((res)=>{
    this.data = res.data
  })
}

}
</script>
