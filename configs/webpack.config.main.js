const webpack = require('webpack');
const path = require('path');

module.exports = {
    target: 'electron-main',
    entry: path.resolve(__dirname, '../app/electron-main.js'),
    output: {
        filename: 'electron-main.bundle.js',
        path: path.relative(__dirname, '../app/dist'),
        publicPath: './build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/
            }
        ]
    }
}