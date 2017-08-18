<style>
    .pic{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .pic div{
        width: 24%;
    }
    .pic img{
        width: 100%;
    }
    .tem{
        padding: 5px;
    }
    .tem>h4{
        color: #26a2ff;
    }
    
</style>
<template>
  <div class="tem">
        <!--放大展示图片-->
        <lg-preview></lg-preview>

        <h4>{{ imgdetail.title }}</h4>
        <div><span>{{ imgdetail.click }}次浏览</span><span></span></div>
        <div class="pic">
            <div  v-for="(item,index) in imgArr" :key="index">
                <img :src="item.src" v-preview="item.src" alt="" >
            </div>
        </div>
        <p v-html="imgdetail.content"></p>
        <!--评论-->
       <Commnt :id="id" ></Commnt>
  </div>
</template>
<script>
    import URL from '../tools/url.js'
    import Commnt from '../tools/comment.vue'
    export default {
        components : {
            Commnt
        },
        props: ['imgId'],
        data(){
            return {
                imgdetail : {},
                imgArr : [],
                id : 0
            }
        },
        created(){
            // 因为imgId多个方法都会使用
            const imgid = this.$route.params.imgId
            this.id = imgid
            this.getdetail(imgid)
            this.getimg(imgid)
            // this.getcomment(this.imgid)
        },
        methods:{
            // 请求文字信息
            getdetail(imgid){
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getimageInfo/${imgid}`
                this.$http.get(url).then(
                    res => {
                        this.imgdetail = res.body.message[0]
                    },
                    err => {
                        console.log(err)
                    }
                )
            },
            // 请求图片缩略图
            getimg(imgid){
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getthumimages/${imgid}`
                this.$http.get(url).then(
                    res => {
                        this.imgArr = res.body.message
                    },
                    err => {
                        console.log(err)
                    }
                )
            },
            // 提交评论
            // postcomment(artid){
            //     console.log(this.id)
            //     const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/postcomment/${artid}`
            //     this.$http.post(url,{content:this.val},{emulateJSON:true}).then(
            //         res => {
            //             alert(res.body.message)
            //             this.val = ''
            //         },
            //         err => {
            //             console.log(err)
            //         }
            //     )
            //     return false;
            // },
            // 获取评论
            // getcomment(artid){
            //     const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getcomments/${artid}?pageindex=1`
            //     this.$http.get(url).then(
            //         res => {
            //             console.log(res)
            //             this.commonts = res.body.message
            //         },
            //         err => {
            //             console.log(err)
            //         }
            //     )
            //     return false;
            // }
        }
    }
</script>
