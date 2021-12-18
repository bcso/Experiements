const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.port || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.[hash].js'
    },
    module : {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localsConvention: 'camelCase',
                      sourceMap: true
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
}