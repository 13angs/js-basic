const { merge } = require('webpack-merge');
const commonConfig = require('./common.webpack');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/'
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true
    }
}

module.exports = merge(commonConfig, devConfig);