//ES6语法
//导入vue依赖包
import Vue from 'vue'
//导入组件,产生关联
import App from './app.vue'

// 导入mint-ui(这里导入是全局的，在下面的组件中都可以直接使用)
import MintUI from 'mint-ui'
// 导入mint-ui的样式文件
import 'mint-ui/lib/style.css'
// 将mint-ui关联vue
Vue.use(MintUI)

// 导入mui框架样式
import './statics/css/mui.min.css'

// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 图片缩略图，放大展示
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


// 导入各个组件
import Home from './components/home.vue'
import Info from './components/info.vue'
import Call from './components/call.vue'
import Setting from './components/setting.vue'
import NewList from './components/news/newlist.vue'
import Newdetail from './components/news/newsDetail.vue'
import PicShow from './components/pic/picshow.vue'
import PicDetail from './components/pic/picdetail.vue'
import Good from './components/goods/goods.vue'
import Goodbuy from './components/goods/goodbuy.vue'
import GoodDesc from './components/goods/goodDesc.vue'
import GoodComment from './components/goods/goodComment.vue'
import ShoppingCar from './components/shoppingCar.vue'

// 导入全局样式
import './style/roots.css'

// 导入vue-resource,用于请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入moment.js，时间过滤器
import Moment from 'moment'
// 这里不需要use，会报警告
// Vue.use(Moment)

// 初始化路由，配置路由信息
// redirect: '/home' 配置自动加载的属性，匹配一个路由路径
const router = new VueRouter({
	linkActiveClass: 'mui-active',
	routes:[
		{name:'index', path:'/', redirect: '/home'},
		{name:'home', path:'/home', component: Home},
		{name:'info', path:'/info', component: Info},
		{name:'call', path:'/call', component: Call},
		{name:'setting', path:'/setting', component: Setting},
		{name:'newlist', path:'/newlist', component: NewList},
		{name:'newsDetail', path: '/newsDetail/:detailId' , component: Newdetail},
		{name:'picshowAll', path:'/picshow', redirect: '/picshow/:picId'},
		{name:'picshow', path: '/picshow/:picId' , component: PicShow},
		{name:'picdetail', path: '/picdetail/:imgId' , component: PicDetail},
		{name:'good', path: '/goods' , component: Good},
		{name:'goodbuy', path: '/goodbuy/:goodid' , component: Goodbuy},
		{name:'goodDesc', path: '/goodDesc/:goodid' , component: GoodDesc},
		{name:'goodComment', path: '/goodComment/:goodid' , component: GoodComment},
		{name:'shoppingCar', path: '/shoppingCar' , component: ShoppingCar}
	]
})

Vue.filter('timeFilter', function (time,newTime) {
		return Moment(time).format(newTime)
	})


const vm = new Vue({
	el: "#box",
//	渲染组件,render方法,会将导入的组件渲染到el所对应的坑中
//	render: function (create){
//		create(App)
//	}

	// 将导出的对象App渲染到坑里面（box）
	render:create => create(App),
	router

})
