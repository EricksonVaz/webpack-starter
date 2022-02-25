const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    devtool:"inline-source-map",
    resolve:{
        extensions:[".ts",".js"]
    },
    entry:{
        app:["@babel/polyfill","./src/script/app.ts"]
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:[
                    "babel-loader",
                    "ts-loader"
                ]
            },
            {
                test:/\.html$/,
                exclude:/node_modules/,
                use:["html-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html"}),
        new CleanWebpackPlugin(),
    ]
}