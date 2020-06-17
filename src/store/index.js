export const storage = {
    state: {
        AllPost: [],
        FevPost: []
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
        addFev(state, payload){

            state.FevPost.push(payload)
        }
    }
}