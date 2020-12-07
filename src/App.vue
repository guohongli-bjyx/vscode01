<template>
  <div id="app">
    <h1>购物车事例</h1>
    <p>账号:{{email}}</p>
    <hr>
    <h2>产品</h2>
    <ProductList/>
    <hr>
    <h2>清单</h2>
    <ShoppingCart/>
  </div>
</template>

<script>
import{mapState} from 'vuex'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
export default {
  computed:{
    ...mapState({
      email:state=>state.email
    })
  },                                     // 看看老师这里是怎么写的
  components:{
      ProductList,
      ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
