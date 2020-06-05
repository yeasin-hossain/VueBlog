<template>
  <div class="col-md-5">
        <div class="postes" >
            <div class="postBody" v-for="(posta, index) in postdata" :key="index" >
                <button @click="removeiteam(index)" class="btn btn-danger">X</button>
                <h3>{{posta.userName}}</h3>
                <p>{{posta.bodyPost}}</p>
            </div>
        </div> 
  </div>
</template>

<script>
export default {
    name:'Postbody',
    props:['postdata'],
    methods:{
        removeiteam(index){
            this.postdata.splice(index,1)
        }
    }
}
</script>

<style>
    .postes button{
        font-size: 8px;
        font-weight: 900;
        float: right;
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
        text-align: left;
        padding: 10px;
        color: #fff;
        font-size: 13px;
    }
</style>