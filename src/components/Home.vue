<template>
<div>
        <Content/>
        <Postbody/>
</div>
</template>

<script>
import Content from './Content'
import Postbody from './Postbody'

export default {
    name: 'Home',
    components:{
       Content,
       Postbody
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