const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = merge(baseConfig, {
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(process.cwd(), 'src/index.js')
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),

        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: false
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],

    performance: {
        hints: false
    }
})