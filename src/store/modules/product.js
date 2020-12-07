import shop from '../../api/shop.js'
const state = {
    all:[]
}

const getters = {}

const mutations ={
    getAllProducts(state,products){
        state.all = products
    }
}

const actions = {
    pushGetAllproducts({commit}){
        shop.getProducts(products => 
        commit('getAllProducts',products)
        )
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}