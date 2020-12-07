<template>
<div id="container">
    <li v-for="(product,index) in products" :key="index">{{product.title}} - {{product.price}}<br>
    <!-- :disabled 空字符串"" 以及0 数字： 返回true, 是禁用状态
                     null以及undefined 还有字符串: 返回false,是启用状态
      -->
      <!-- 0的非依旧是禁用的状态 但非0的数字非就不是禁用状态了 -->
        <button :disabled='!product.inventory' @click="goCart(product)">加入购物车</button>
    </li>
</div>
</template>
    
<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState({
            products:state => state.product.all 
        })
    },
    created(){
        this.$store.dispatch('product/pushGetAllproducts')
    },
    methods:{
        goCart(product){
          this.$store.dispatch('cart/pushToCart',product)  
        }
    }
}

</script>
