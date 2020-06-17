<template>

    <div class="col-md-3">
        <div class="fevorite" >
            <div class="post" v-for="(iteam, index) in iteams" :key="index">
            <p>{{iteam.userName}}</p>
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
    }
}
</script>

<style scoped>
.fevorite{
    margin-top: 15px;
}
.post p{
    background: darkcyan;
    color: #fff;
    padding: 5px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 3px;
}
</style>