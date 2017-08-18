//用来发布时候使用
const path = require('path')
// 安装之后需要依赖html-webpack-plugin这个对象
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 依赖webpack文件
const webpack = require('webpack')
// 所有的配置都在這個倒數
module.exports = {
    //	导入路径(-p写法)
    // entry: path.resolve(__dirname, './index/main.js'),

    // 分离第三方插件，入口写方法（webpack.optimize.CommonsChunkPlugin写法）
    entry: {
        app: path.resolve(__dirname, './src/main.js'),
        vendors: ['vue']
    },
    //	导出路径
    output: {
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
                use: ['style-loader', 'css-loader']
            },

            // 图片加载器
            {
                test: /\.(png|jpg|gif)$/,
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

    // webpack第三大亮点 : 压缩插件（一般不用）

    // 分离第三方插件（常见），因为需要依赖vue包，所以文件会很大。这时我们需要分离第三方和我们自己的文件
    //    插件的配置信息都写在plugins里面
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        // 这种写法的压缩插件不常用，不好
        // })

        // 在package.json中  -p   效果比较好

        // 分离第三方插件，webpack插件（常用）
        // name: 'vendors' 要压缩哪里的第三方插件， vendors 为entry入口导入的名字
        // filename: 'vendors.js' 要将分离压缩的第三方插件放到哪里去， 将压缩的第三方文件压缩到vendors.js文件里
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
        // 自动生成HTML文件，并且自动连接配置的.js文件
        new HtmlWebpackPlugin({
            // 文件模板：让生成的HTML文件和我们自己写的HTML一样
            template: './src/index.html',
            htmlWebpackPlugin: {
                "files": {
                    // 配置js文件，会自动引入到HTML文件中
                    "js": ["app.js", "vendors.js"]
                }
            },
            // 压缩HTML文件，因为HTML文件很小，所以压不压缩无所谓，不会有太多的影响
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace:  true,
            //     removeAttributeQuotes: true
            // }
        })
    ]

}