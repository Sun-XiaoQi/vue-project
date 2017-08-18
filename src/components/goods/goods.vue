<style scoped>
    .mui-content{
        color: #ccc;
        font-size: 12px;
    }
</style>

<template>
  <div>
      <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view" >
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goods" :key="item.id">
		            <router-link :to='"/goodbuy/"+item.id'>
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{ item.title }}</div>
                        <div><span>￥{{ item.sell_price }}</span> <del>￥{{ item.market_price }}</del></div>
                    </router-link>
                </li>
		    </ul>    
		</div>
  </div>
</template>

<script>
    import URL from '../tools/url.js'
    export default {  
        data(){
            return {
                goods : []
            }
        },
        created(){
            this.getgoods()
        },
        methods:{
            getgoods(){
                 const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getgoods?pageindex=1`
                 this.$http.get(url).then(
                     res => {
                         console.log(res)
                         this.goods = res.body.message
                     },
                     err => {
                         console.log(err)
                     }
                 )
            }
        }
    }
</script>