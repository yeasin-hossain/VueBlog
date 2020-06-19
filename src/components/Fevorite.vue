<template>
    <div class="col-md-3">
        <div class="fevorite">
            <div class="post" v-for="(iteam, index) in iteams" :key="index">
                <router-link :to="{path: '/post/'+iteam.id}">
                    <p @click="singlePost(iteam)">{{iteam.userName}}</p>
                </router-link>
                    <button @click="removeiteam(index)" class="btn btn-danger">X</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Fevorite',
    computed:{
        iteams(){
            return this.$store.getters.getFevPost
        }
    },
    methods:{
        removeiteam(index){
            this.$store.commit('removeFev',index)
        },
        singlePost(post){
            this.$store.commit('AddSinglePost',post)
        }
    }
}
</script>

<style scoped>
.fevorite{
    margin-top: 15px;
    z-index: 9999;
    position: sticky;
    top: 75px;
}
.post{
    display: flex;
    min-height: 45px;
    background: darkcyan;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: auto;
    margin-top: 5px;
}
.post a{
    text-decoration: none;
}
.post p{
    color: #fff;
    padding: 8px;
    font-weight: 600;
    font-size: 15px;
    margin: 0;
}
.post button{
    font-size: 10px;
    font-weight: 900;
}
</style>