const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
module.exports = {
    entry: './src/index.js',
    mode:"development",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/,
                use: ['style-loader','css-loader' ]
            },
            { test: /\.jpg$/,
               loader:'url-loader',
               options:{
                   limit:10000,
                   name:'img/[name].[ext]'
               }
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};