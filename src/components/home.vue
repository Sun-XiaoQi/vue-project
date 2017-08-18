<style scoped>
/*scoped关键字 仅仅在自己的这个组件中使用*/


/*九宫格样式*/

.mui-icon-home {
    background-image: url('../image/JS.jpg');
    background-repeat: round;
}

.mui-icon-home:before {
    content: ''
}

.mui-icon-email {
    background-image: url('../image/bootstrap.png');
    background-repeat: round;
}

.mui-icon-email:before {
    content: ''
}

.mui-icon-chatbubble {
    background-image: url('../image/css3.jpg');
    background-repeat: round;
}

.mui-icon-chatbubble:before {
    content: ''
}

.mui-icon-location {
    background-image: url('../image/HTML5.png');
    background-repeat: round;
}

.mui-icon-location:before {
    content: ''
}

.mui-icon-search {
    background-image: url('../image/node.jpg');
    background-repeat: round;
}

.mui-icon-search:before {
    content: ''
}

.mui-icon-phone {
    background-image: url('../image/vue.png');
    background-repeat: round;
}

.mui-icon-phone:before {
    content: ''
}

.mui-icon-gear {
    background-image: url('../image/vue.png');
    background-repeat: round;
}

.mui-icon-gear:before {
    content: ''
}

.mui-icon-info {
    background-image: url('../image/vue.png');
    background-repeat: round;
}

.mui-icon-info:before {
    content: ''
}


/*当给after中的content:''设置空的时候，需要设置宽高*/

.mui-icon {
    width: 40px;
    height: 40px;
}
</style>

<template>
    <div>
        <!--调用公共组件-->
        <Carousel :lunbotuData="homeData"></Carousel>
    
        <!--分类导航（九宫格导航）-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#/newlist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#/picshow/0">
                    <span class="mui-icon mui-icon-email">
                        <span class="mui-badge">5</span>
                    </span>
                    <div class="mui-media-body">Email</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#/goods">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">more</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script type=text/ecmascript-6>
// type=text/ecmascript-6识别ES6语法
// 引入轮播图公共组件
import Carousel from './tools/Carousel.vue'

// 导入url
import URL from './tools/url.js'
export default {
    components: {
        // 公共组建引过来的时候必须声明
        Carousel
    },
    // 数据必须在这里面才能使用，数据放在data()里面
    data() {
        return {
            // 声明一个全局的数组，用来接收返回的数据，
            homeData: []
        }
    },
    // 最后执行，调用请求的
    created() {
        this.getHomeData()
    },
    // 方法一般都放在methods中
    methods: {
        getHomeData() {
            // 但是地址一般不会这样写，会比较麻烦，http://182.254.146.100:8899/api/getlunbo
            // 拼接地址
            // const url = URL.URL + '/api/getlunbo'   /*自己写的*/
            const url = `${URL.HTTP}${URL.SERVER_PATH}:${URL.PORT}/api/getlunbo`
            this.$http.get(url).then(res => {
                // 输出数据，res为局部作用域
                this.homeData = res.body.message
            }, err => {
                console.log(err)
            })
        }
    }
}
</script>


