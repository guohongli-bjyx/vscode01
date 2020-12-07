const state = {
    lists:[]
}

const getters = {}

const mutations ={
    toCart(state,product){
        state.lists.push(product) 
    }
}

const actions = {
    pushToCart({commit},product){
          commit('toCart',product)
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}