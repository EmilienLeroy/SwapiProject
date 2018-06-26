const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: './assets/index.js',

  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            'vue-router': 'vue-router/dist/vue-router.js',
            'vue-resource': 'vue-resource/dist/vue-resource.js',
            'vuex': 'vuex/dist/vuex.js'
        }
    },

  mode: "development",


}