const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }

}