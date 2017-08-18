<style>
    .box{
        display: flex;
        justify-content: space-between
    }
    img{
        width:  100%;
    }
</style>

<template>
  <div>
        <div v-for="item in detailData" :key="item.id">
            <h4>{{ item.title }}</h4>
            <div class="box"><span>{{ item.add_time | timeFilter('YYYY-MM-DD hh:mm:ss') }}</span><span>{{ item.click }}次浏览</span></div>
            <div v-html="item.content"></div>
        </div>
  </div>
</template>

<script>
    import URL from '../tools/url.js'
    export default {
        data(){
           return {
                detailData : []
           }
        },
        created(){
            this.getDetail()
        },
        methods:{
            getDetail(){
                // 接收的参数要和路由配置中的名字一样
                const detailId = this.$route.params.detailId
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getnew/${detailId}`
                this.$http.get(url).then(
                    res => {
                        console.log(res)
                        this.detailData = res.body.message
                    },
                    err => {
                        console.log(err)
                    }
                )
            }
        }
    }
</script>
