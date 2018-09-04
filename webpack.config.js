const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    output:{
        filename: '[name].js',
        path: path.resolve("../thithutoeic-backend/client/dist")
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        })
    ]
}