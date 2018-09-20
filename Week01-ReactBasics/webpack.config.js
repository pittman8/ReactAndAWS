var path = require('path');
var webpack = require('webpack');

module.exports = { 
    mode: 'development',
    entry: './src/main.js',
    output: {path: __dirname, filename: 'bundle.js'},
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    },
};