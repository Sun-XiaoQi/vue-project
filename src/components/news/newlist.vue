<style scoped>
    .box{
        display: flex;
        justify-content: space-between;
    }
    /*.tem{
        margin-bottom: 40px;
    }*/
</style>

<template>
    <div class="tem">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsData" :key="item.id">
					<!--<router-link v-bind='{to:"/newsDetail/"+item.id}'>-->
                    <router-link :to="'/newsDetail/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
                            <p class='mui-ellipsis box'>
                                <span>{{ item.add_time | timeFilter('YYYY-MM-DD hh:mm') }}</span>
                                <span>{{ item.click }}次点击</span>
                            </p>
						</div>
					</router-link>
				</li>

			</ul>
    </div>
</template>

<script type=text/ecmascript-6>
    import URL from '../tools/url.js'
    export default {
        data(){
            return {
                newsData: []
            }
        },
        created(){
            this.getnewsData()
        },
        methods:{
            getnewsData(){
                const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getnewslist`
                console.log(url)
                this.$http.get(url).then(
                    res => {
                        console.log(res)
                        this.newsData = res.body.message
                    },
                    err => {
                        console.log(err)
                    }
                )
            }
        }
    }
</script>


