const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        historyApiFallback: true,
    },
});
