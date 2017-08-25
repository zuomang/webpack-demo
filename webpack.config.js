const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },

    // npm install --save-dev webpack-dev-server
    // start dev server 作为静态资源服务器
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
            // beautify: false,
            // comments: false,
            // compress: {
                // warnings: false,
                // drop_console: true,
                // collapse_vars: true,
                // reduce_vars: true,
            // }
        // }),
        // new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify('production')
        // })
        // 结合 express 和 webpack-dev-middleware 实现热加载, enable
        // new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

        // 结合 express 和 webpack-dev-middleware 实现热加载, enable
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
