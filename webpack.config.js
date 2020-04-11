const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: { loader: 'url-loader' },
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        historyApiFallback: true,
    },
};
