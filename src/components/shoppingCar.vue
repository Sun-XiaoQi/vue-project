<style  scoped>
    .list{
        position: relative;
    }
    .list>input{
        position: absolute;
        top: 5px;
        left: 5px;
    }
</style>
<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media list" v-for="item in resCarData" :key="item.id">
					<input type="checkbox">
                    <a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.thumb_path">
						<div class="mui-media-body">
							<h5>{{ item.title }}</h5>
							<p class='mui-ellipsis'><span>{{ item.sell_price }}</span></p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>
<script>
    // 导入获取方法
    import {getData} from './tools/localStorage'
    import URL from './tools/url.js'
    export default {
        components:{
            Number
        },
        data () {
            return {
                resCarData : [],
                
            };
        },
        created(){
            this.getCar()
            
        },
        methods:{
            getCar(){
                // 获取localStorage数据
                const carArr = getData()
                // 接收数据
                let carData = {}
                carArr.forEach(element => {
                    if(carData[element.goodid]){
                        carData[element.goodid] += element.count 
                    }else{
                        carData[element.goodid] = element.count 
                    }
                });
                // 遍历数据对象，抽取商品的id
                let idArr = []
                for(var key in carData){
                    idArr.push(key)
                }
                // 将商品id拼成字符串
                const ids = idArr.join(",")
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/goods/getshopcarlist/${ids}`
                this.$http.get(url).then(
                    res => {
                        console.log(res)
                        this.resCarData = res.body.message
                    },
                    err => {})
            }
        }
    }
</script>
