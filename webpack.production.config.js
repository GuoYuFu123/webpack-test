const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: __dirname + '/app/main.js', //已多次提及的唯一入口文件
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devtool: 'none',
    devServer: {
        contentBase: './public', //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'), //版本说明
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.UglifyJsPlugin(), //UglifyJsPlugin压缩JS代码；【官方已经remove】 
        // new ExtractTextPlugin('style.css'), //ExtractTextPlugin分离CSS和JS文件
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // }),

        new UglifyJsPlugin({  //js代码压缩
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
            sourceMap: true, //使用sourceMap将错误消息位置映射到模块(这会减慢编译速度)。如果您使用自己的minify函数，请阅读minify部分以正确处理sourceMap
            parallel: true
        })
    ]
}