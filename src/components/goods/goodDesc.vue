<style>
    img{
        width: 100%;
    }
</style>
<template>
    <div>
        <h4>{{ goodDescData.title }}</h4>
        <div v-html="goodDescData.content"></div>
    </div>
</template>
<script>
    import URL from '../tools/url.js'
    export default {
        data () {
            return {
                goodDescData : {}
            };
        },
        created(){
            this.getDesc()
        },
        methods:{
            getDesc(){
                const descId = this.$route.params.goodid
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/goods/getdesc/${descId}`
                this.$http.get(url).then(
                    res => {
                        console.log(res)
                        this.goodDescData = res.body.message[0]
                    },
                    err => {
                        console.log(err)
                    }
                )
            }
        }
    }
</script>
