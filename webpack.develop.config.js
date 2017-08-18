//用来开发时候使用
const path = require('path')
// 依赖webpack文件
const webpack = require('webpack')

module.exports = {
//	导入路径
	entry: path.resolve(__dirname, './src/main.js'),
//	导出路径
	output:{
		path: path.resolve(__dirname, 'app'),
//		导出的文件的文件名
		filename: 'app.js'
	},
	
	
//	加载器调用时间:在项目导入webpack之前的一瞬间
//将ES6语法转ES5语法
	module: {
		// 将所有的加载器都写在这里面
	  rules: [
			// 将ES6语法转成ES5语法
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env']
	        }
	      }
	    },

			// vue加载器，加载.vue文件
			 {
	      test: /\.vue$/,
//	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'vue-loader',
//	        options: {
//	          presets: ['env']
//	        }
	      }
	    },

			// 加载css加载器
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

			// 图片/文字加载器
			{
        test: /\.(png|jpg|gif|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }  
          }
        ]
      }
	  ]
	},

	// 服务器配置,通过这个付出其生成的文件，不会显示在文件夹中，而是存储在服务器上，节省资源
	// 服务器是开发的时候使用的，在发布的时候不使用
	// 目前还有点问题
	devtool: 'eval',
	devServer: {
		contentBase: path.join(__dirname, './src'),			/*当前服务器监听的路径*/
		hot :true,		/*热更新，相当于实时更新*/
		port: 8086,		/*定义端口号，需要监控的端口号*/
		host: 'localhost',
		open :true,		/*是否自动打开浏览器*/
		openPage: ''	/*加上这个属性才好用，不然就是undefined*/
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}