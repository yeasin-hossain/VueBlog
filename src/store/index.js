export const storage = {
    state: {
        AllPost: [
            {
                id:1,
                userName:'This Is State',
                bodyPost:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti, nihil alias exercitationem maiores cum optio nisi porro asperiores magni ipsa, iste quas iusto dignissimos ex fugiat debitis aperiam harum. '
            }
        ],
        FevPost: [
            {
                id:1,
                userName:'This Is Dummy fevorite Post'
            }
        ]
    },
    getters:{
        getAllPost(state){
            return state.AllPost
        },
        getFevPost(state){
            return state.FevPost
        }

    },
    mutations:{
        addNewPost(state,payload){
            state.AllPost.push({
                id:state.AllPost.length+1,
                userName: payload.userName,
                bodyPost: payload.bodyPost
            })
        },
        addFev(state, payload){

            state.FevPost.push(payload)
        },
        removeFev(state,payload){
            state.FevPost.splice(payload,1)
        },
        removePost(state,payload){
            state.AllPost.splice(payload,1)
        },
    }
}