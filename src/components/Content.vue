<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">

                <div class="content" v-if="!updatetext">
                    <form @submit.prevent='dataSend'  >
                        <input 
                        v-model="newitem.userName" 
                        type="text" value="Name Of User" 
                        class="form-control" placeholder="Title">
                        <textarea 
                        v-model="newitem.bodyPost" 
                        @keyup="remaincharCount()"
                        cols="30" rows="7" 
                        placeholder="Write Your Felling" 
                        class="form-control"></textarea>
                        <p>{{ remaincharactersText }}</p>
                        <button> Post </button>
                    </form>
                </div>

                <div class="content" v-else>
                    <form @submit.prevent="editDataSave">
                        <input type="text" 
                        v-model="updatecon.userName" 
                        class="form-control" 
                        placeholder="Title">
                        <textarea
                        v-model="updatecon.bodyPost"
                        @keyup='remaincharCount()'
                        cols="30" rows="7" 
                        placeholder="Write Your Felling"
                        class="form-control">
                        </textarea>
                        <p>{{ remaincharactersText }}</p>
                        <button> Update </button>
                    </form>
                </div>

            </div>

            <Postbody v-on:edititeam="editdata($event)" />
            <Fevorite/>
        </div>
    </div>
    
</template>

<script>
import Postbody from './Postbody'
import Fevorite from './Fevorite'

export default {
    
    name:'Content',
    components:{
        Postbody,
        Fevorite,
    },
    data(){
        return {
            msg:null,
            updatetext: false,
            updatecon:{
                userName:null,
                bodyPost:null
            },
            newitem: {
                userName: '',
                bodyPost:''
            },
             maxcharacter: 140,
             remaincharactersText: "Remaining 140 characters."
        }
    },
    methods:{
        dataSend(){
            if(this.newitem.userName && this.newitem.bodyPost){

                // this.post.push({        
                //     userName:this.newitem.userName,
                //     bodyPost:this.newitem.bodyPost
                // }),
                this.$store.commit('addNewPost',this.newitem)

                this.newitem.userName='',
                this.newitem.bodyPost=''
            }else{
                
                this.msg ='Name OR body required!'
                console.log(this.msg);
            }
        },
        remaincharCount: function(){

            if(this.newitem.bodyPost.length > this.maxcharacter){

                this.remaincharactersText = "Exceeded "+this.maxcharacter+" characters limit.";
                
                }else{

                    var remainCharacters = this.maxcharacter - this.newitem.bodyPost.length;
                    this.remaincharactersText = "Remaining " + remainCharacters + " characters.";

            }
       },
        editdata(editpost){
            this.updatetext = true,
            this.updatecon.userName = editpost.userName,
            this.updatecon.bodyPost = editpost.bodyPost
            console.log(editpost)
        },
        editDataSave(){
            this.post.push({
                userName:this.updatecon.userName,
                bodyPost:this.updatecon.bodyPost
            })
        }
    }
}
</script>

<style scoped>

    .content{
        width: 350px;
        background-color: darkcyan;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-top: 15px;
        z-index: 9999;
        position: sticky;
        top: 75px;
    }
/*     
    .content form{}
    .content form h1{} */
    .content form textarea{
        border: #ff9b05 solid 2px;
        resize: none;
        border-radius: 3px;
        padding: 6px;
        font-size: 13px;
        margin: 5px 0px;
    }
    .content form p{
        color: #fff;
        font-size: 15px;
    }
    .content form button{
        padding: 10px 30px;
        border-radius: 5px;
        border: navajowhite;
        font-weight: 700;
        cursor: pointer;
    }

</style>