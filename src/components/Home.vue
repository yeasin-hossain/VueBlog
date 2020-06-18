<template>
<div>
        <Content/>
</div>
</template>

<script>
import Content from './Content'

export default {
    name: 'Home',
    components:{
       Content,
    },
    data(){
        return{
            name:'Welcome To Home!'
        }
    }    
}
</script>

<style>

</style>