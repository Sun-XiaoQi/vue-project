<style scoped>
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        white-space: nowrap;
        overflow-x: auto;
    }
    ul li{
        padding: 0;
        margin: 0;
        margin-left: 10px;
        line-height: 40px;
    }
    ul a:focus{
        color: red;
    }
    .content img{
        width: 100%;
        vertical-align: bottom;
    }
    .content .list{
        position: relative;
    }
    .content .list div{
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 0;
        color: #fff;
        background: rgba(0,0,0,0.4)
    }
    
</style>

<template>
  <div class="tem">
      <!--分类标题-->
      <ul>
          <li  @click="getpiclist(0)">
              <!--router-link不会刷新页面-->
              <router-link to="/picshow/0">
                  全部
              </router-link>
          </li>
          <li v-for="cate in picCategory" :key="cate.id" @click="getpiclist(cate.id)">
              <router-link :to="'/picshow/'+cate.id">
                  {{ cate.title }}
              </router-link>
          </li>
      </ul>
      <!--图文列表-->
      <div class="content">
          <div  class="list" v-for="pic in piclist" :key="pic.id">
            <router-link :to="'/picdetail/'+pic.id">
                <img :src="pic.img_url" alt="">
                <div v-html=" pic.zhaiyao"></div>
            </router-link>
         </div>
      </div>
  </div>
</template>

<script>
    import URL from '../tools/url.js'
    // 我这个必须导入
    import { Indicator } from 'mint-ui';
    export default {
        data(){
            return {
                // 分类标题的数组
                picCategory: [],
                piclist: []
            }
        },
        created(){
            this.getpicCategory()
            this.getpiclist(0)
        },
        methods:{
            // 分类标题的请求
            getpicCategory(){
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getimgcategory`
                this.$http.get(url).then(
                    res => {
                        this.picCategory = res.body.message
                    },
                    err => {
                        console.log(err)
                    }
                )
            },
            // 图片列表请求
            getpiclist(cateid){
                // const cateid = this.$route.params.picId
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getimages/${cateid}`
                Indicator.open('loading');
                this.$http.get(url).then(
                    res => {
                        this.piclist = res.body.message
                        Indicator.close()
                    },
                    err => {
                        console.log(err)
                        Indicator.close()
                    },
                    
                )
            }
        }
    }
</script>
