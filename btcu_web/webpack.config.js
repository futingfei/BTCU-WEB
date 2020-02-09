module.exports = {
    mode:"development",
    entry: {
      app:'./src/App.jsx',
      vendor: ['react','react-dom','whatwg-fetch','react-router-dom'],
    },
    output: {
      path: __dirname + '/static',
      filename: 'app.bundle.js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },

    devServer: {
      port: 8000,
      contentBase: 'static',
      proxy: {
        '/api/*':{
          target: 'http://localhost:3000'
        }
      }
    },

    module: {
      rules: [
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          query: {
            presets: [
              ["es2015", { "modules": false, "loose": true }],
              "react",
              "stage-0"
            ]
          }
        },
      ]
    },

    devtool: 'source-map'

};