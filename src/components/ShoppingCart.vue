<template>
    <div>
        <p v-show="!lists.length">请添加产品到购物车</p>
         
        <li v-for="(list,index) in lists" :key="index">{{list.title}} - {{list.price}} x {{count}}</li>
        <!-- 如何去掉开始的那个点  如何在再次点购买时不替换掉前一个 为什么在cart.js里 stste.list=product就会出现一个点 而且后一个会覆盖前一个呢-->
        合计:

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data:function() {
       return{
           count:0
       }
    },
    computed:{
        ...mapState({
            lists:state => state.cart.lists
        })
    },
    watch:{
        lists:function(){
            this.count++
        }
    }
}

</script>
