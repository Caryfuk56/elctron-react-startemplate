const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    watch: true,
    mode: 'development',
    target: 'electron-renderer',
    entry: path.resolve(__dirname, '../app/src/index.js'),
    output: {
        filename: 'renderer.bundle.js',
        path: path.resolve(__dirname, '../app/dist'),
        publicPath: './build'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.{jpg|png|gif}$/,
                use: 'file-loader'
            }
        ]
    },
    devtool: 'cheep-source-map',
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../app/dist'))
    ]
};