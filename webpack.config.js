const path = require('path')

module.exports = {

    entry: "./src/reactComponents.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: "cheap-module-eval-sourcemap",
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};