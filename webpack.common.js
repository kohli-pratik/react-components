const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: `${path.resolve(__dirname, 'src')}/index.js`,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: { loader: 'url-loader' },
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)(\?[a-z0-9=.]+)?$/,
                use: { loader: 'url-loader?limit=100000' },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new Dotenv(),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
};
