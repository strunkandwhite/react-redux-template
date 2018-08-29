/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  serve: {
    dev: {
      publicPath: '/',
      stats: {
        chunks: false,
        colors: true,
        modules: false,
        children: false,
      },
    },
  },
})
