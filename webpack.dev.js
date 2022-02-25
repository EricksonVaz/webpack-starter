const path = require('path');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');

module.exports = merge(common,{
    mode:"development",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dev")
    },
    module:{
        rules:[
            {
                test:/\.(scss|sass)$/,
                exclude:/node_modules/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|icon|webp)$/i,
                exclude:/node_modules/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath:"img/",
                    }
                }
            }
        ]
    }
});