<template>
  <div class="col-md-5">
        <div class="postes" >
            <div class="postBody" v-for="(posta, index) in getAllPost" :key="index" >
                <button @click="removeiteam(index)" class="btn btn-danger">X</button>
                <button @click="edititeam(posta)" v-if="fevButton" class="btn btn-dark" >❤</button>
                <h3>{{posta.userName}}</h3>
                <p>{{posta.bodyPost}}</p>
                <router-link :to="{path: '/post/'+posta.id}">
                <p>See more...</p>
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'Postbody',
    data(){
        return{
            fevButton:true,
            allpost:''
        }
    },
    computed:{
        getAllPost(){
            return this.$store.getters.getAllPost
        }
    },
    methods:{
        removeiteam(index){
           // this.allpost.splice(index,1)
            this.$store.commit('removePost',index)
        },
        edititeam(post){
           // this.$emit('edititeam',post)
            this.$store.commit('addFev', post)
            //this.fevButton = false
        },
        
    },

}
</script>

<style scoped>
    .postes button{
        font-size: 8px;
        font-weight: 900;
        float: right;
        margin: 2px;
    }
    .postBody{
        min-height: 150px;
        background-color: cornflowerblue;
        width: 85%;
        border-radius: 8px;
        margin: 15px;
        padding: 10px;
    }
    .postBody h3{
        padding: 10px;
        color: #fff;
        letter-spacing: 1px;
    }
    .postBody p{
        letter-spacing: 1px;
        text-align: center;
        padding: 10px;
        color: #fff;
        font-size: 13px;
    }
    .postBody a{
        text-decoration: none;
    }
    .postBody a>p{
        margin: 0;
        font-weight: 700;
        color: #000;
        letter-spacing: 2px;
    }
</style>