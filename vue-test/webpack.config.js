var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: {
        index: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit:1024,
                        name:'[name]-aaa.[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
};