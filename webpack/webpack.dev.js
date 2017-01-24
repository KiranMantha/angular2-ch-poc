'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9100,
        hot: true
    },
    devtool: 'source-map',
    entry: {
        app: [path.resolve(rootDir, 'src', 'bootstrap')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')],
        style: [path.resolve(rootDir, 'src/Styles', 'app')]
    },
    module: {
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            // { loader: ExtractTextPlugin.extract(
            //         'style', // backup loader when not building .css file
            //         'css!sass' // loaders to preprocess CSS
            //     ), test: /\.scss$/ },
            {
                loader: ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css?sourceMap!less?sourceMap' // loaders to preprocess CSS
                ), test: /\.less$/
            },
            { test: /\.png$/, loader: "url?limit=10000&mimetype=image/png" },
            { test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff" }, 
            { test: /\.ttf$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot$/, loader: "file" },
            { test: /\.svg$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        }),
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['', '.js', '.ts', '.less']
    }
};