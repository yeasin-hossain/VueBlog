<template>
  <div>
    <div class="container">
      <div class="row">

        <div class="col-md-9">
          <div class="singlepost"  v-for="post in getSinglePost" :key="post.id">
            <h2>{{post.userName}}</h2>
            <p>{{post.bodyPost}}</p>
          </div>
        </div>
        <Fevorite/>
      </div>
    </div>

  </div>  
</template>

<script>
import Fevorite from './Fevorite'
export default {
    name:'Post',
    data(){
      return{
        po:null
      }
    },
    components:{
      Fevorite,
      
    },
    computed:{
      getSinglePost(){
            return this.$store.getters.getSinglePost
        }
    },
}
</script>

<style scoped>
  .singlepost{
    margin-top: 15px;
    background: whitesmoke;
    padding: 20px;
  }
  .singlepost h2{
    font-size: 35px;
  }
  .singlepost p{
    text-align: left;
  }
</style>