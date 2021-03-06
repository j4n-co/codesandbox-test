const webpack = require("webpack");

module.exports = {
  pages: {
    index: "src/core/main.js",
    vector: "src/skins/vector/main.js",
    p1: "src/skins/p1/main.js",
    p2: "src/skins/p2/main.js",
    p3: "src/skins/p3/main.js",
    p4: "src/skins/p4/main.js"
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
