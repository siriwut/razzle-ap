const util = require('util')
const merge = require('webpack-merge')

module.exports = {
  modify: (defaultConfig, { target, dev }, webpack) => {
    console.log(util.inspect(defaultConfig, { showHidden: true, depth: null }))

    const config = {
      // module: {
      //   rules: [
      //     {
      //       test: /\.css$/,
      //       use: [
      //         //{ loader: "style-loader" },
      //         { loader: "css-loader" }
      //       ]
      //     }
      //   ]
      // }
    }

    return merge(defaultConfig, config)
  }
}
