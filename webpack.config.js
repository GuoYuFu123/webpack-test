module.exports = {
    devtool: 'eval-source-map',
    mode: 'production',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    } ,
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
    }
}