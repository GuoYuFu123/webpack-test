module.exports = {
    devtool: 'eval-source-map',
    mode: 'production',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public', //本地服务器加载页面所在的目录
        historyApiFallback: true,
        inline: true //实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader', //v7.1.5                    
                },
                exclude: /node_modules/
            }
        ]
    }
}