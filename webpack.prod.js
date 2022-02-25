const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
    mode:"production",
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(scss|sass)$/,
                exclude:/node_modules/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|icon|webp)$/i,
                exclude:/node_modules/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"img/",
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg|icon|webp)$/i })
    ]
});