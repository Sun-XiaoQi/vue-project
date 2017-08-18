<style scoped>
    .goodname{
        color: #007aff;
        border: 1px solid #ccc;
        line-height: 40px;
    }
    .price{
        padding-left: 10px;
        font-size: 12px;
    }
    .price .sell{
        color: red;
        font-size: 16px;
        line-height: 40px;
    }
    button{
        margin-top: 5px;
    }
    .info{
        border: 1px solid #ccc;
        font-size: 12px;
        margin-top: 10px;
    }
    .info h4{
        font-size: 12px;
        line-height: 24px;
    }
    .info>div{
        padding-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-top: 1px dotted #ccc;
    }
    .info p{
        padding: 0;
        margin: 0;
    }
</style>
<template>
    <div class="tem">
        <Carousel :lunbotuData = 'goodImgs'></Carousel>
        <h4 class="goodname">{{ goodInfo.title }}</h4>
        <div class="price">市场价：<del>￥{{ goodInfo.market_price }}</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销售价：<span class="sell">￥{{ goodInfo.sell_price }}</span></div>
        <div>购买数量：<Number v-on:count="getCount"></Number></div>
        <button class="mui-btn mui-btn-primary">立即购买</button>
        <button type="button" class="mui-btn mui-btn-danger" @click="shoppingCar">加入购物车</button>
        <div class="info">
            <h4>商品参数</h4>
            <div>
                <p>商品货号：{{ goodInfo.goods_no }}</p>
                <p>库存情况：{{ goodInfo.stock_quantity }}</p>
                <p>上架时间：{{ goodInfo.add_time | timeFilter('YYYY-MM-DD hh:mm:ss') }}</p>
            </div>
        </div>
        <button type="button" class="mui-btn mui-btn-blue mui-btn-block mui-btn-outlined" @click="gogoodDesc">图文介绍</button>
        <button type="button" class="mui-btn mui-btn-red mui-btn-block mui-btn-outlined" @click="gogoodComment">商品评论</button>
    </div>
</template>
<script>
    import URL from '../tools/url.js'
    import Carousel from '../tools/Carousel.vue'
    // 导入数量组件
    import Number from '../tools/number.vue'
    // 导入存储方法
    import {setData} from '../tools/localStorage'
    // 导入邻居组件
    import {Linju} from '../tools/linju'
    export default {
        components:{
            Carousel,
            Number
        },
        data() {
            return {
                goodId : 0,
                goodImgs : [],
                goodInfo : {},
                goodNum : 1
            }
        },
        created() {
            this.goodId = this.$route.params.goodid
            this.getGoodImg(this.goodId)
            this.getGoodInfo(this.goodId)
        },
        methods: {
            // 获取商品图片轮播图
            getGoodImg(goodId) {
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getthumimages/${goodId}`
                this.$http.get(url).then(
                    res => {
                        this.goodImgs = res.body.message
                     },
                    err => {
                        console.log(err)
                     }
                )
            },
            // 获取商品信息以及价格
            getGoodInfo(goodId){
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/goods/getinfo/${goodId}`
                this.$http.get(url).then(
                    res => {
                        this.goodInfo = res.body.message[0]
                     },
                    err => {
                        console.log(err)
                     }
                )
            },
            // 获得子组件传过来的数量
            getCount(num){
                this.goodNum = num
            },
            // 图文介绍
            gogoodDesc(){
                // 如果想回退页面使用go方法，如果想前进页面使用push方法，又一种传参形式
                this.$router.push({name : 'goodDesc', params : {goodid : this.goodId}})
            },
            // 商品评论
            gogoodComment(){
                // 如果想回退页面使用go方法，如果想前进页面使用push方法，又一种传参形式
                this.$router.push({name : 'goodComment', params : {goodid : this.goodId}})
            },
            // 点击购物车
            shoppingCar(){
                // 将商品的id和购买数量存储到浏览器中
                setData({goodid:this.goodId, count:this.goodNum})
                // 将购买的商品数量传值给徽章（购物车）
                Linju.$emit('carInfo',this.goodNum)
            }
        }
    }
</script>
